(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, react_1, classNames) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Alert = function (_a) {
        var className = _a.className, bootstrapStyle = _a.bootstrapStyle, message = _a.message;
        return message
            ? react_1.createElement("div", { className: classNames("alert alert-" + bootstrapStyle, className) }, message)
            : null;
    };
    exports.Alert.displayName = "Alert";
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(7), __webpack_require__(18), __webpack_require__(5), __webpack_require__(41), __webpack_require__(16)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, react_1, classNames, google_map_react_1, Alert_1, Marker_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Map = (function (_super) {
        __extends(Map, _super);
        function Map(props) {
            var _this = _super.call(this, props) || this;
            _this.defaultCenterLocation = { lat: 51.9107963, lng: 4.4789878 };
            _this.state = {
                center: _this.defaultCenterLocation,
                isLoaded: false,
                locations: props.locations
            };
            _this.handleOnGoogleApiLoaded = _this.handleOnGoogleApiLoaded.bind(_this);
            _this.onResizeIframe = _this.onResizeIframe.bind(_this);
            return _this;
        }
        Map.prototype.render = function () {
            return react_1.createElement("div", {
                className: classNames("widget-google-maps-wrapper", this.props.className),
                style: this.getStyle()
            }, react_1.createElement("div", { className: "widget-google-maps" }, react_1.createElement(Alert_1.Alert, {
                bootstrapStyle: "danger",
                className: "widget-google-maps-alert",
                message: this.state.alertMessage
            }), react_1.createElement(google_map_react_1.default, {
                bootstrapURLKeys: { key: this.props.apiKey },
                center: this.state.center,
                defaultZoom: this.props.zoomLevel,
                onGoogleApiLoaded: this.handleOnGoogleApiLoaded,
                options: {
                    draggable: this.props.optionDrag,
                    fullscreenControl: false,
                    mapTypeControl: this.props.optionMapControl,
                    maxZoom: 20,
                    minZoom: 2,
                    minZoomOverride: true,
                    resetBoundsOnResize: true,
                    scrollwheel: this.props.optionScroll,
                    streetViewControl: this.props.optionStreetView,
                    zoomControl: this.props.optionZoomControl
                },
                resetBoundsOnResize: true,
                yesIWantToUseGoogleMapApiInternals: true
            }, this.createMakers())));
        };
        Map.prototype.componentDidMount = function () {
            this.setUpEvents();
        };
        Map.prototype.componentWillReceiveProps = function (nextProps) {
            this.setState({ locations: nextProps.locations });
            this.resolveAddresses(nextProps);
        };
        Map.prototype.componentWillUnmount = function () {
            if (this.getIframe()) {
                window.removeEventListener("resize", this.onResizeIframe);
            }
        };
        Map.prototype.setUpEvents = function () {
            var iFrame = this.getIframe();
            if (iFrame) {
                iFrame.contentWindow.addEventListener("resize", this.onResizeIframe);
            }
        };
        Map.prototype.getIframe = function () {
            return document.getElementsByClassName("t-page-editor-iframe")[0];
        };
        Map.prototype.onResizeIframe = function (event) {
            if (this.mapLoader) {
                var originalCenter = this.mapLoader.map.getCenter();
                this.mapLoader.maps.event.trigger(this.mapLoader.map, "resize");
                this.mapLoader.map.setCenter(originalCenter);
                window.dispatchEvent(new Event("resize"));
            }
        };
        Map.prototype.getStyle = function () {
            var style = {
                width: this.props.widthUnit === "percentage" ? this.props.width + "%" : this.props.width + "px"
            };
            if (this.props.heightUnit === "percentageOfWidth") {
                style.paddingBottom = this.props.height + "%";
            }
            else if (this.props.heightUnit === "pixels") {
                style.paddingBottom = this.props.height + "px";
            }
            else if (this.props.heightUnit === "percentageOfParent") {
                style.height = this.props.height + "%";
            }
            return __assign({}, style, this.props.style);
        };
        Map.prototype.handleOnGoogleApiLoaded = function (mapLoader) {
            this.mapLoader = mapLoader;
            this.setState({ isLoaded: true });
            this.resolveAddresses(this.props);
        };
        Map.prototype.updateBounds = function (props, location) {
            if (this.mapLoader) {
                this.bounds.extend(new google.maps.LatLng(location.latitude, location.longitude));
                this.mapLoader.map.fitBounds(this.bounds);
                this.setZoom(props);
                if (!props.defaultCenterAddress) {
                    this.setState({ center: { lat: this.bounds.getCenter().lat(), lng: this.bounds.getCenter().lng() } });
                }
            }
        };
        Map.prototype.setZoom = function (props) {
            if (this.mapLoader) {
                var zoom = this.mapLoader.map.getZoom();
                if (props.autoZoom) {
                    var defaultBoundZoom = 6;
                    if (zoom && (zoom > defaultBoundZoom) || !zoom) {
                        zoom = defaultBoundZoom;
                    }
                }
                else {
                    zoom = props.zoomLevel;
                }
                this.mapLoader.map.setZoom(zoom);
            }
        };
        Map.prototype.resolveAddresses = function (props) {
            var _this = this;
            if (this.mapLoader) {
                this.bounds = new google.maps.LatLngBounds();
            }
            this.setZoom(props);
            if (props.locations && props.locations.length) {
                props.locations.forEach(function (location) {
                    if (!_this.validLocation(location) && location.address) {
                        _this.getLocation(location.address, function (locationLookup) {
                            if (locationLookup) {
                                location.latitude = Number(locationLookup.lat);
                                location.longitude = Number(locationLookup.lng);
                                _this.setState({ locations: props.locations });
                                _this.updateBounds(props, location);
                            }
                        });
                    }
                    else if (_this.validLocation(location)) {
                        _this.updateBounds(props, location);
                    }
                });
            }
            if (props.defaultCenterAddress) {
                this.getLocation(props.defaultCenterAddress, function (location) {
                    return location ? _this.setState({ center: location }) : _this.setState({ center: _this.defaultCenterLocation });
                });
            }
        };
        Map.prototype.validLocation = function (location) {
            var lat = location.latitude, lng = location.longitude;
            return typeof lat === "number" && typeof lng === "number"
                && lat <= 90 && lat >= -90
                && lng <= 180 && lng >= -180
                && !(lat === 0 && lng === 0);
        };
        Map.prototype.getLocation = function (address, callback) {
            var _this = this;
            if (this.state.isLoaded) {
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({ address: address }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        _this.setState({ alertMessage: "" });
                        callback({
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng()
                        });
                    }
                    else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                        _this.setState({ alertMessage: "Google free quota request exceeded." });
                        callback();
                    }
                    else {
                        _this.setState({ alertMessage: "Can not find address " + address });
                        callback();
                    }
                });
            }
            else {
                callback();
            }
        };
        Map.prototype.createMakers = function () {
            var _this = this;
            var markerElements = [];
            if (this.state.locations && this.state.locations.length) {
                this.state.locations.map(function (locationObject, index) {
                    var latitude = locationObject.latitude, longitude = locationObject.longitude;
                    if (_this.validLocation(locationObject)) {
                        markerElements.push(react_1.createElement(Marker_1.Marker, {
                            key: index,
                            lat: latitude,
                            lng: longitude
                        }));
                    }
                });
            }
            return markerElements;
        };
        return Map;
    }(react_1.Component));
    exports.Map = Map;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(20)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(23)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(2);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowEqual = __webpack_require__(10);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _omit = __webpack_require__(12);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/forbid-prop-types */

var mainStyle = {
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  margin: 0,
  padding: 0,
  position: 'absolute'
};

var style = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  backgroundColor: 'transparent',
  position: 'absolute'
};

var GoogleMapMarkers = function (_Component) {
  _inherits(GoogleMapMarkers, _Component);

  function GoogleMapMarkers(props) {
    _classCallCheck(this, GoogleMapMarkers);

    var _this = _possibleConstructorReturn(this, (GoogleMapMarkers.__proto__ || Object.getPrototypeOf(GoogleMapMarkers)).call(this, props));

    _this._getState = function () {
      return {
        children: _this.props.dispatcher.getChildren(),
        updateCounter: _this.props.dispatcher.getUpdateCounter()
      };
    };

    _this._onChangeHandler = function () {
      if (!_this.dimesionsCache_) {
        return;
      }

      var prevChildCount = (_this.state.children || []).length;
      var state = _this._getState();

      _this.setState(state, function () {
        return (state.children || []).length !== prevChildCount && _this._onMouseChangeHandler();
      });
    };

    _this._onChildClick = function () {
      if (_this.props.onChildClick) {
        if (_this.hoverChildProps_) {
          var hoverKey = _this.hoverKey_;
          var childProps = _this.hoverChildProps_;
          // click works only on hovered item
          _this.props.onChildClick(hoverKey, childProps);
        }
      }
    };

    _this._onChildMouseDown = function () {
      if (_this.props.onChildMouseDown) {
        if (_this.hoverChildProps_) {
          var hoverKey = _this.hoverKey_;
          var childProps = _this.hoverChildProps_;
          // works only on hovered item
          _this.props.onChildMouseDown(hoverKey, childProps);
        }
      }
    };

    _this._onChildMouseEnter = function (hoverKey, childProps) {
      if (!_this.dimesionsCache_) {
        return;
      }

      if (_this.props.onChildMouseEnter) {
        _this.props.onChildMouseEnter(hoverKey, childProps);
      }

      _this.hoverChildProps_ = childProps;
      _this.hoverKey_ = hoverKey;
      _this.setState({ hoverKey: hoverKey });
    };

    _this._onChildMouseLeave = function () {
      if (!_this.dimesionsCache_) {
        return;
      }

      var hoverKey = _this.hoverKey_;
      var childProps = _this.hoverChildProps_;

      if (hoverKey !== undefined && hoverKey !== null) {
        if (_this.props.onChildMouseLeave) {
          _this.props.onChildMouseLeave(hoverKey, childProps);
        }

        _this.hoverKey_ = null;
        _this.hoverChildProps_ = null;
        _this.setState({ hoverKey: null });
      }
    };

    _this._onMouseAllow = function (value) {
      if (!value) {
        _this._onChildMouseLeave();
      }

      _this.allowMouse_ = value;
    };

    _this._onMouseChangeHandler = function () {
      if (_this.allowMouse_) {
        _this._onMouseChangeHandlerRaf();
      }
    };

    _this._onMouseChangeHandlerRaf = function () {
      if (!_this.dimesionsCache_) {
        return;
      }

      var mp = _this.props.dispatcher.getMousePosition();

      if (mp) {
        var distances = [];
        var hoverDistance = _this.props.getHoverDistance();

        _react2.default.Children.forEach(_this.state.children, function (child, childIndex) {
          if (!child) return;
          // layers
          if (child.props.latLng === undefined && child.props.lat === undefined && child.props.lng === undefined) {
            return;
          }

          var childKey = child.key !== undefined && child.key !== null ? child.key : childIndex;
          var dist = _this.props.distanceToMouse(_this.dimesionsCache_[childKey], mp, child.props);
          if (dist < hoverDistance) {
            distances.push({
              key: childKey,
              dist: dist,
              props: child.props
            });
          }
        });

        if (distances.length) {
          distances.sort(function (a, b) {
            return a.dist - b.dist;
          });
          var hoverKey = distances[0].key;
          var childProps = distances[0].props;

          if (_this.hoverKey_ !== hoverKey) {
            _this._onChildMouseLeave();

            _this._onChildMouseEnter(hoverKey, childProps);
          }
        } else {
          _this._onChildMouseLeave();
        }
      } else {
        _this._onChildMouseLeave();
      }
    };

    _this._getDimensions = function (key) {
      var childKey = key;
      return _this.dimesionsCache_[childKey];
    };

    _this.props.dispatcher.on('kON_CHANGE', _this._onChangeHandler);
    _this.props.dispatcher.on('kON_MOUSE_POSITION_CHANGE', _this._onMouseChangeHandler);
    _this.props.dispatcher.on('kON_CLICK', _this._onChildClick);
    _this.props.dispatcher.on('kON_MDOWN', _this._onChildMouseDown);

    _this.dimesionsCache_ = {};
    _this.hoverKey_ = null;
    _this.hoverChildProps_ = null;
    _this.allowMouse_ = true;

    _this.state = _extends({}, _this._getState(), { hoverKey: null });
    return _this;
  }

  _createClass(GoogleMapMarkers, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.experimental === true) {
        return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)((0, _omit2.default)(this.state, ['hoverKey']), (0, _omit2.default)(nextState, ['hoverKey']));
      }

      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.dispatcher.removeListener('kON_CHANGE', this._onChangeHandler);
      this.props.dispatcher.removeListener('kON_MOUSE_POSITION_CHANGE', this._onMouseChangeHandler);
      this.props.dispatcher.removeListener('kON_CLICK', this._onChildClick);
      this.props.dispatcher.removeListener('kON_MDOWN', this._onChildMouseDown);

      this.dimesionsCache_ = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var mainElementStyle = this.props.style || mainStyle;
      this.dimesionsCache_ = {};

      var markers = _react2.default.Children.map(this.state.children, function (child, childIndex) {
        if (!child) return undefined;
        if (child.props.latLng === undefined && child.props.lat === undefined && child.props.lng === undefined) {
          return _react2.default.cloneElement(child, {
            $geoService: _this2.props.geoService,
            $onMouseAllow: _this2._onMouseAllow,
            $prerender: _this2.props.prerender
          });
        }

        var latLng = child.props.latLng !== undefined ? child.props.latLng : { lat: child.props.lat, lng: child.props.lng };

        var pt = _this2.props.geoService.project(latLng, _this2.props.projectFromLeftTop);

        var stylePtPos = {
          left: pt.x,
          top: pt.y
        };

        var dx = 0;
        var dy = 0;

        if (!_this2.props.projectFromLeftTop) {
          // center projection
          if (_this2.props.geoService.hasSize()) {
            dx = _this2.props.geoService.getWidth() / 2;
            dy = _this2.props.geoService.getHeight() / 2;
          }
        }

        // to prevent rerender on child element i need to pass
        // const params $getDimensions and $dimensionKey instead of dimension object
        var childKey = child.key !== undefined && child.key !== null ? child.key : childIndex;

        _this2.dimesionsCache_[childKey] = _extends({
          x: pt.x + dx,
          y: pt.y + dy
        }, latLng);

        return _react2.default.createElement(
          'div',
          {
            key: childKey,
            style: _extends({}, style, stylePtPos),
            className: child.props.$markerHolderClassName
          },
          _react2.default.cloneElement(child, {
            $hover: childKey === _this2.state.hoverKey,
            $getDimensions: _this2._getDimensions,
            $dimensionKey: childKey,
            $geoService: _this2.props.geoService,
            $onMouseAllow: _this2._onMouseAllow,
            $prerender: _this2.props.prerender
          })
        );
      });

      return _react2.default.createElement(
        'div',
        { style: mainElementStyle },
        markers
      );
    }
  }]);

  return GoogleMapMarkers;
}(_react.Component);

GoogleMapMarkers.propTypes = {
  geoService: _propTypes2.default.any,
  style: _propTypes2.default.any,
  distanceToMouse: _propTypes2.default.func,
  dispatcher: _propTypes2.default.any,
  onChildClick: _propTypes2.default.func,
  onChildMouseDown: _propTypes2.default.func,
  onChildMouseLeave: _propTypes2.default.func,
  onChildMouseEnter: _propTypes2.default.func,
  getHoverDistance: _propTypes2.default.func,
  projectFromLeftTop: _propTypes2.default.bool,
  prerender: _propTypes2.default.bool
};
GoogleMapMarkers.defaultProps = {
  projectFromLeftTop: false,
  prerender: false
};
exports.default = GoogleMapMarkers;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/acdlite/recompose/blob/master/src/packages/recompose/utils/omit.js
var omit = function omit(obj, keys) {
  var rest = _objectWithoutProperties(obj, []);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key in rest) {
      delete rest[key];
    }
  }
  return rest;
};

exports.default = omit;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Point;

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype = {
    clone: function() { return new Point(this.x, this.y); },

    add:     function(p) { return this.clone()._add(p);     },
    sub:     function(p) { return this.clone()._sub(p);     },
    mult:    function(k) { return this.clone()._mult(k);    },
    div:     function(k) { return this.clone()._div(k);     },
    rotate:  function(a) { return this.clone()._rotate(a);  },
    matMult: function(m) { return this.clone()._matMult(m); },
    unit:    function() { return this.clone()._unit(); },
    perp:    function() { return this.clone()._perp(); },
    round:   function() { return this.clone()._round(); },

    mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    equals: function(p) {
        return this.x === p.x &&
               this.y === p.y;
    },

    dist: function(p) {
        return Math.sqrt(this.distSqr(p));
    },

    distSqr: function(p) {
        var dx = p.x - this.x,
            dy = p.y - this.y;
        return dx * dx + dy * dy;
    },

    angle: function() {
        return Math.atan2(this.y, this.x);
    },

    angleTo: function(b) {
        return Math.atan2(this.y - b.y, this.x - b.x);
    },

    angleWith: function(b) {
        return this.angleWithSep(b.x, b.y);
    },

    // Find the angle of the two vectors, solving the formula for the cross product a x b = |a||b|sin(θ) for θ.
    angleWithSep: function(x, y) {
        return Math.atan2(
            this.x * y - this.y * x,
            this.x * x + this.y * y);
    },

    _matMult: function(m) {
        var x = m[0] * this.x + m[1] * this.y,
            y = m[2] * this.x + m[3] * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _add: function(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    },

    _sub: function(p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    },

    _mult: function(k) {
        this.x *= k;
        this.y *= k;
        return this;
    },

    _div: function(k) {
        this.x /= k;
        this.y /= k;
        return this;
    },

    _unit: function() {
        this._div(this.mag());
        return this;
    },

    _perp: function() {
        var y = this.y;
        this.y = this.x;
        this.x = -y;
        return this;
    },

    _rotate: function(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = cos * this.x - sin * this.y,
            y = sin * this.x + cos * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
};

// constructs Point from an array if necessary
Point.convert = function (a) {
    if (a instanceof Point) {
        return a;
    }
    if (Array.isArray(a)) {
        return new Point(a[0], a[1]);
    }
    return a;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wrap2 = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LatLng = function () {
  function LatLng(lat, lng) {
    _classCallCheck(this, LatLng);

    if (isNaN(lat) || isNaN(lng)) {
      throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
    }
    this.lat = +lat;
    this.lng = +lng;
  }

  _createClass(LatLng, [{
    key: 'wrap',
    value: function wrap() {
      return new LatLng(this.lat, (0, _wrap2.wrap)(this.lng, -180, 180));
    }
  }]);

  return LatLng;
}();

LatLng.convert = function (a) {
  if (a instanceof LatLng) {
    return a;
  }

  if (Array.isArray(a)) {
    return new LatLng(a[0], a[1]);
  }

  if ('lng' in a && 'lat' in a) {
    return new LatLng(a.lat, a.lng);
  }

  return a;
};

exports.default = LatLng;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrap = wrap;
/* eslint-disable import/prefer-default-export */

function wrap(n, min, max) {
  var d = max - min;
  return n === max ? n : ((n - min) % d + d) % d + min;
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = ".widget-google-maps-wrapper {\n    position: relative;\n}\n\n.widget-google-maps-wrapper > div {\n    position: absolute;\n    top: 0; bottom: 0; left: 0; right: 0;\n}\n\n.widget-google-maps-marker{\n    background-image: url(data:image/png;base64,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);\n    cursor: pointer;\n    width: 50px;\n    height: 50px;\n    padding: 0;\n    left: -25px;\n    top: -50px;\n    position: absolute;\n}\n"

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(6), __webpack_require__(5), __webpack_require__(42)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, react_1, Map_1, Alert_1, GoogleMapContainer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var preview = (function (_super) {
        __extends(preview, _super);
        function preview() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        preview.prototype.render = function () {
            var warnings = GoogleMapContainer_1.default.validateProps(this.props);
            var reactElement;
            if (!warnings) {
                reactElement = react_1.createElement(Map_1.Map, preview.transformProps(this.props));
            }
            else {
                reactElement = react_1.createElement("div", {}, react_1.createElement(Alert_1.Alert, {
                    bootstrapStyle: "danger",
                    className: "widget-google-maps-alert",
                    message: warnings
                }), react_1.createElement(Map_1.Map, preview.transformProps(this.props)));
            }
            return react_1.createElement("div", {}, reactElement);
        };
        preview.transformProps = function (props) {
            var locations = props.dataSource === "static"
                ? GoogleMapContainer_1.default.parseStaticLocations(props.staticLocations)
                : [];
            return {
                apiKey: props.apiKey,
                autoZoom: props.autoZoom,
                defaultCenterAddress: props.defaultCenterAddress,
                height: props.height,
                heightUnit: props.heightUnit,
                locations: locations,
                optionDrag: props.optionDrag,
                optionMapControl: props.optionMapControl,
                optionScroll: props.optionScroll,
                optionStreetView: props.optionStreetView,
                optionZoomControl: props.optionZoomControl,
                style: {},
                width: props.width,
                widthUnit: props.widthUnit,
                zoomLevel: props.zoomLevel
            };
        };
        return preview;
    }(react_1.Component));
    exports.preview = preview;
    function getVisibleProperties(valueMap, visibilityMap) {
        if (valueMap.dataSource === "static") {
            visibilityMap.addressAttribute = false;
            visibilityMap.dataSourceMicroflow = false;
            visibilityMap.entityConstraint = false;
            visibilityMap.locationsEntity = false;
            visibilityMap.latitudeAttribute = false;
            visibilityMap.longitudeAttribute = false;
        }
        else if (valueMap.dataSource === "XPath") {
            visibilityMap.addressAttribute = true;
            visibilityMap.dataSourceMicroflow = false;
            visibilityMap.entityConstraint = true;
            visibilityMap.locationsEntity = true;
            visibilityMap.latitudeAttribute = true;
            visibilityMap.longitudeAttribute = true;
        }
        else if (valueMap.dataSource === "context") {
            visibilityMap.addressAttribute = true;
            visibilityMap.dataSourceMicroflow = false;
            visibilityMap.entityConstraint = false;
            visibilityMap.locationsEntity = false;
            visibilityMap.latitudeAttribute = true;
            visibilityMap.longitudeAttribute = true;
        }
        else if (valueMap.dataSource === "microflow") {
            visibilityMap.addressAttribute = true;
            visibilityMap.dataSourceMicroflow = true;
            visibilityMap.entityConstraint = false;
            visibilityMap.locationsEntity = true;
            visibilityMap.latitudeAttribute = true;
            visibilityMap.longitudeAttribute = true;
        }
        return visibilityMap;
    }
    exports.getVisibleProperties = getVisibleProperties;
    function getPreviewCss() {
        return __webpack_require__(16);
    }
    exports.getPreviewCss = getPreviewCss;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _google_map = __webpack_require__(19);

var _google_map2 = _interopRequireDefault(_google_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _google_map2.default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(24);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(10);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _marker_dispatcher = __webpack_require__(25);

var _marker_dispatcher2 = _interopRequireDefault(_marker_dispatcher);

var _google_map_map = __webpack_require__(27);

var _google_map_map2 = _interopRequireDefault(_google_map_map);

var _google_map_markers = __webpack_require__(11);

var _google_map_markers2 = _interopRequireDefault(_google_map_markers);

var _google_map_markers_prerender = __webpack_require__(28);

var _google_map_markers_prerender2 = _interopRequireDefault(_google_map_markers_prerender);

var _google_map_loader = __webpack_require__(29);

var _google_map_loader2 = _interopRequireDefault(_google_map_loader);

var _detect = __webpack_require__(31);

var _detect2 = _interopRequireDefault(_detect);

var _geo = __webpack_require__(32);

var _geo2 = _interopRequireDefault(_geo);

var _array_helper = __webpack_require__(34);

var _array_helper2 = _interopRequireDefault(_array_helper);

var _is_plain_object = __webpack_require__(35);

var _is_plain_object2 = _interopRequireDefault(_is_plain_object);

var _pick = __webpack_require__(36);

var _pick2 = _interopRequireDefault(_pick);

var _raf = __webpack_require__(37);

var _raf2 = _interopRequireDefault(_raf);

var _log = __webpack_require__(38);

var _log2 = _interopRequireDefault(_log);

var _isNumber = __webpack_require__(39);

var _isNumber2 = _interopRequireDefault(_isNumber);

var _omit = __webpack_require__(12);

var _omit2 = _interopRequireDefault(_omit);

var _detectElementResize = __webpack_require__(40);

var _detectElementResize2 = _interopRequireDefault(_detectElementResize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies, react/forbid-prop-types, react/no-find-dom-node, no-console */


var kEPS = 0.00001;
var K_GOOGLE_TILE_SIZE = 256;
// real minZoom calculated here _getMinZoom
var K_IDLE_TIMEOUT = 100;
var K_IDLE_CLICK_TIMEOUT = 300;
var DEFAULT_MIN_ZOOM = 3;

function defaultOptions_() /* maps */{
  return {
    overviewMapControl: false,
    streetViewControl: false,
    rotateControl: true,
    mapTypeControl: false,
    // disable poi
    styles: [{
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    }],
    minZoom: DEFAULT_MIN_ZOOM };
}

var latLng2Obj = function latLng2Obj(latLng) {
  return (0, _is_plain_object2.default)(latLng) ? latLng : { lat: latLng[0], lng: latLng[1] };
};

var _checkMinZoom = function _checkMinZoom(zoom, minZoom) {
  if (process.env.NODE_ENV !== 'production') {
    if (zoom < minZoom) {
      console.warn('GoogleMap: ' + // eslint-disable-line
      'minZoom option is less than recommended ' + 'minZoom option for your map sizes.\n' + 'overrided to value ' + minZoom);
    }
  }

  if (minZoom < zoom) {
    return zoom;
  }
  return minZoom;
};

var GoogleMap = function (_Component) {
  _inherits(GoogleMap, _Component);

  // eslint-disable-line

  function GoogleMap(props) {
    _classCallCheck(this, GoogleMap);

    var _this = _possibleConstructorReturn(this, (GoogleMap.__proto__ || Object.getPrototypeOf(GoogleMap)).call(this, props));

    _this._getMinZoom = function () {
      if (_this.geoService_.getWidth() > 0 || _this.geoService_.getHeight() > 0) {
        var tilesPerWidth = Math.ceil(_this.geoService_.getWidth() / K_GOOGLE_TILE_SIZE) + 2;
        var tilesPerHeight = Math.ceil(_this.geoService_.getHeight() / K_GOOGLE_TILE_SIZE) + 2;
        var maxTilesPerDim = Math.max(tilesPerWidth, tilesPerHeight);
        return Math.ceil((0, _log2.default)(maxTilesPerDim));
      }
      return DEFAULT_MIN_ZOOM;
    };

    _this._computeMinZoom = function (minZoomOverride, minZoom) {
      if (minZoomOverride) {
        return minZoom || DEFAULT_MIN_ZOOM;
      }
      return _this._getMinZoom();
    };

    _this._mapDomResizeCallback = function () {
      _this.resetSizeOnIdle_ = true;
      if (_this.maps_) {
        var originalCenter = _this.map_.getCenter();
        _this.maps_.event.trigger(_this.map_, 'resize');
        _this.map_.setCenter(originalCenter);
      }
    };

    _this._setLayers = function (layerTypes) {
      layerTypes.forEach(function (layerType) {
        _this.layers_[layerType] = new _this.maps_[layerType]();
        _this.layers_[layerType].setMap(_this.map_);
      });
    };

    _this._initMap = function () {
      // only initialize the map once
      if (_this.initialized_) {
        return;
      }
      _this.initialized_ = true;

      var propsCenter = latLng2Obj(_this.props.center || _this.props.defaultCenter);
      _this.geoService_.setView(propsCenter, _this.props.zoom || _this.props.defaultZoom, 0);

      _this._onBoundsChanged(); // now we can calculate map bounds center etc...

      var bootstrapURLKeys = _extends({}, _this.props.apiKey && { key: _this.props.apiKey }, _this.props.bootstrapURLKeys);

      _this.props.googleMapLoader(bootstrapURLKeys).then(function (maps) {
        if (!_this.mounted_) {
          return;
        }

        var centerLatLng = _this.geoService_.getCenter();

        var propsOptions = {
          zoom: _this.props.zoom || _this.props.defaultZoom,
          center: new maps.LatLng(centerLatLng.lat, centerLatLng.lng)
        };

        // prevent to exapose full api
        // next props must be exposed (console.log(Object.keys(pick(maps, isPlainObject))))
        // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
        // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition",
        // "SymbolPath", "ZoomControlStyle",
        // "event", "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem",
        // "DistanceMatrixStatus",
        // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType",
        // "GeocoderStatus", "KmlLayerStatus",
        // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference",
        // "TravelMode", "UnitSystem"
        var mapPlainObjects = (0, _pick2.default)(maps, _is_plain_object2.default);
        var options = typeof _this.props.options === 'function' ? _this.props.options(mapPlainObjects) : _this.props.options;
        var defaultOptions = defaultOptions_(mapPlainObjects);

        var draggableOptions = _this.props.draggable !== undefined && {
          draggable: _this.props.draggable
        };

        var minZoom = _this._computeMinZoom(options.minZoomOverride, options.minZoom);
        _this.minZoom_ = minZoom;

        var preMapOptions = _extends({}, defaultOptions, {
          minZoom: minZoom
        }, options, propsOptions);

        _this.defaultDraggableOption_ = preMapOptions.draggable !== undefined ? preMapOptions.draggable : _this.defaultDraggableOption_;

        var mapOptions = _extends({}, preMapOptions, draggableOptions);

        mapOptions.minZoom = _checkMinZoom(mapOptions.minZoom, minZoom);

        var map = new maps.Map(_reactDom2.default.findDOMNode(_this.googleMapDom_), mapOptions);

        _this.map_ = map;
        _this.maps_ = maps;

        _this._setLayers(_this.props.layerTypes);

        // render in overlay
        var this_ = _this;
        var overlay = Object.assign(new maps.OverlayView(), {
          onAdd: function onAdd() {
            var K_MAX_WIDTH = typeof screen !== 'undefined' ? screen.width + 'px' : '2000px';
            var K_MAX_HEIGHT = typeof screen !== 'undefined' ? screen.height + 'px' : '2000px';

            var div = document.createElement('div');
            this.div = div;
            div.style.backgroundColor = 'transparent';
            div.style.position = 'absolute';
            div.style.left = '0px';
            div.style.top = '0px';
            div.style.width = K_MAX_WIDTH; // prevents some chrome draw defects
            div.style.height = K_MAX_HEIGHT;

            var panes = this.getPanes();
            panes.overlayMouseTarget.appendChild(div);

            _reactDom2.default.unstable_renderSubtreeIntoContainer(this_, _react2.default.createElement(_google_map_markers2.default, {
              experimental: this_.props.experimental,
              onChildClick: this_._onChildClick,
              onChildMouseDown: this_._onChildMouseDown,
              onChildMouseEnter: this_._onChildMouseEnter,
              onChildMouseLeave: this_._onChildMouseLeave,
              geoService: this_.geoService_,
              projectFromLeftTop: true,
              distanceToMouse: this_.props.distanceToMouse,
              getHoverDistance: this_._getHoverDistance,
              dispatcher: this_.markersDispatcher_
            }), div,
            // remove prerendered markers
            function () {
              return this_.setState({ overlayCreated: true });
            });
          },
          onRemove: function onRemove() {
            _reactDom2.default.unmountComponentAtNode(this.div);
          },
          draw: function draw() {
            var div = overlay.div;
            var overlayProjection = overlay.getProjection();
            var bounds = map.getBounds();
            var ne = bounds.getNorthEast();
            var sw = bounds.getSouthWest();
            var ptx = overlayProjection.fromLatLngToDivPixel(new maps.LatLng(ne.lat(), sw.lng()));

            // need round for safari still can't find what need for firefox
            var ptxRounded = (0, _detect2.default)().isSafari ? { x: Math.round(ptx.x), y: Math.round(ptx.y) } : { x: ptx.x, y: ptx.y };

            this_.updateCounter_++;
            this_._onBoundsChanged(map, maps, !this_.props.debounced);

            if (!this_.googleApiLoadedCalled_) {
              this_._onGoogleApiLoaded({ map: map, maps: maps });
              this_.googleApiLoadedCalled_ = true;
            }

            div.style.left = ptxRounded.x + 'px';
            div.style.top = ptxRounded.y + 'px';
            if (this_.markersDispatcher_) {
              this_.markersDispatcher_.emit('kON_CHANGE');
            }
          }
        });

        _this.overlay_ = overlay;

        overlay.setMap(map);

        maps.event.addListener(map, 'zoom_changed', function () {
          // recalc position at zoom start
          if (this_.geoService_.getZoom() !== map.getZoom()) {
            if (!this_.zoomAnimationInProgress_) {
              this_.zoomAnimationInProgress_ = true;
              this_._onZoomAnimationStart();
            }

            var TIMEOUT_ZOOM = 300;

            if (new Date().getTime() - _this.zoomControlClickTime_ < TIMEOUT_ZOOM) {
              // there is strange Google Map Api behavior in chrome when zoom animation of map
              // is started only on second raf call, if was click on zoom control
              // or +- keys pressed, so i wait for two rafs before change state

              // this does not fully prevent animation jump
              // but reduce it's occurence probability
              (0, _raf2.default)(function () {
                return (0, _raf2.default)(function () {
                  this_.updateCounter_++;
                  this_._onBoundsChanged(map, maps);
                });
              });
            } else {
              this_.updateCounter_++;
              this_._onBoundsChanged(map, maps);
            }
          }
        });

        maps.event.addListener(map, 'idle', function () {
          if (_this.resetSizeOnIdle_) {
            _this._setViewSize();
            var currMinZoom = _this._computeMinZoom(_this.props.options.minZoomOverride, _this.props.options.minZoom);

            if (currMinZoom !== _this.minZoom_) {
              _this.minZoom_ = currMinZoom;
              map.setOptions({ minZoom: currMinZoom });
            }

            _this.resetSizeOnIdle_ = false;
          }

          if (this_.zoomAnimationInProgress_) {
            this_.zoomAnimationInProgress_ = false;
            this_._onZoomAnimationEnd();
          }

          var div = overlay.div;
          var overlayProjection = overlay.getProjection();
          var bounds = map.getBounds();
          var ne = bounds.getNorthEast();
          var sw = bounds.getSouthWest();
          var ptx = overlayProjection.fromLatLngToDivPixel(new maps.LatLng(ne.lat(), sw.lng()));
          // need round for safari still can't find what need for firefox
          var ptxRounded = (0, _detect2.default)().isSafari ? { x: Math.round(ptx.x), y: Math.round(ptx.y) } : { x: ptx.x, y: ptx.y };

          this_.updateCounter_++;
          this_._onBoundsChanged(map, maps);

          if (_this.mouse_) {
            var latLng = _this.geoService_.unproject(_this.mouse_, true);
            _this.mouse_.lat = latLng.lat;
            _this.mouse_.lng = latLng.lng;
          }

          _this._onChildMouseMove();

          this_.dragTime_ = 0;
          div.style.left = ptxRounded.x + 'px';
          div.style.top = ptxRounded.y + 'px';
          if (this_.markersDispatcher_) {
            this_.markersDispatcher_.emit('kON_CHANGE');
            if (this_.fireMouseEventOnIdle_) {
              this_.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
            }
          }
        });

        maps.event.addListener(map, 'mouseover', function () {
          // has advantage over div MouseLeave
          this_.mouseInMap_ = true;
        });

        // an alternative way to know the mouse is back within the map
        // This would not fire when clicking/interacting with google maps
        // own on-map countrols+markers. This handles an edge case for touch devices
        // + 'draggable:false' custom option. See #332 for more details.
        maps.event.addListener(map, 'click', function () {
          this_.mouseInMap_ = true;
        });

        maps.event.addListener(map, 'mouseout', function () {
          // has advantage over div MouseLeave
          this_.mouseInMap_ = false;
          this_.mouse_ = null;
          this_.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
        });

        maps.event.addListener(map, 'drag', function () {
          this_.dragTime_ = new Date().getTime();
          this_._onDrag();
        });
        // user choosing satellite vs roads, etc
        maps.event.addListener(map, 'maptypeid_changed', function () {
          this_._onMapTypeIdChange(map.getMapTypeId());
        });
      }).catch(function (e) {
        console.error(e); // eslint-disable-line no-console
        throw e;
      });
    };

    _this._onGoogleApiLoaded = function () {
      if (_this.props.onGoogleApiLoaded) {
        var _this$props;

        if (process.env.NODE_ENV !== 'production' && _this.props.yesIWantToUseGoogleMapApiInternals !== true) {
          console.warn('GoogleMap: ' + // eslint-disable-line
          'Usage of internal api objects is dangerous ' + 'and can cause a lot of issues.\n' + 'To hide this warning add yesIWantToUseGoogleMapApiInternals={true} ' + 'to <GoogleMap instance');
        }

        (_this$props = _this.props).onGoogleApiLoaded.apply(_this$props, arguments);
      }
    };

    _this._getHoverDistance = function () {
      return _this.props.hoverDistance;
    };

    _this._onDrag = function () {
      var _this$props2;

      return _this.props.onDrag && (_this$props2 = _this.props).onDrag.apply(_this$props2, arguments);
    };

    _this._onMapTypeIdChange = function () {
      var _this$props3;

      return _this.props.onMapTypeIdChange && (_this$props3 = _this.props).onMapTypeIdChange.apply(_this$props3, arguments);
    };

    _this._onZoomAnimationStart = function () {
      var _this$props4;

      return _this.props.onZoomAnimationStart && (_this$props4 = _this.props).onZoomAnimationStart.apply(_this$props4, arguments);
    };

    _this._onZoomAnimationEnd = function () {
      var _this$props5;

      return _this.props.onZoomAnimationEnd && (_this$props5 = _this.props).onZoomAnimationEnd.apply(_this$props5, arguments);
    };

    _this._onChildClick = function () {
      if (_this.props.onChildClick) {
        var _this$props6;

        return (_this$props6 = _this.props).onChildClick.apply(_this$props6, arguments);
      }
      return undefined;
    };

    _this._onChildMouseDown = function (hoverKey, childProps) {
      _this.childMouseDownArgs_ = [hoverKey, childProps];
      if (_this.props.onChildMouseDown) {
        _this.props.onChildMouseDown(hoverKey, childProps, _extends({}, _this.mouse_));
      }
    };

    _this._onChildMouseUp = function () {
      if (_this.childMouseDownArgs_) {
        if (_this.props.onChildMouseUp) {
          var _this$props7;

          (_this$props7 = _this.props).onChildMouseUp.apply(_this$props7, _toConsumableArray(_this.childMouseDownArgs_).concat([_extends({}, _this.mouse_)]));
        }
        _this.childMouseDownArgs_ = null;
        _this.childMouseUpTime_ = new Date().getTime();
      }
    };

    _this._onChildMouseMove = function () {
      if (_this.childMouseDownArgs_) {
        if (_this.props.onChildMouseMove) {
          var _this$props8;

          (_this$props8 = _this.props).onChildMouseMove.apply(_this$props8, _toConsumableArray(_this.childMouseDownArgs_).concat([_extends({}, _this.mouse_)]));
        }
      }
    };

    _this._onChildMouseEnter = function () {
      if (_this.props.onChildMouseEnter) {
        var _this$props9;

        return (_this$props9 = _this.props).onChildMouseEnter.apply(_this$props9, arguments);
      }
      return undefined;
    };

    _this._onChildMouseLeave = function () {
      if (_this.props.onChildMouseLeave) {
        var _this$props10;

        return (_this$props10 = _this.props).onChildMouseLeave.apply(_this$props10, arguments);
      }
      return undefined;
    };

    _this._setViewSize = function () {
      if (!_this.mounted_) return;

      var mapDom = _reactDom2.default.findDOMNode(_this.googleMapDom_);
      _this.geoService_.setViewSize(mapDom.clientWidth, mapDom.clientHeight);
      _this._onBoundsChanged();
    };

    _this._onWindowResize = function () {
      _this.resetSizeOnIdle_ = true;
    };

    _this._onMapMouseMove = function (e) {
      if (!_this.mouseInMap_) return;

      var currTime = new Date().getTime();
      var K_RECALC_CLIENT_RECT_MS = 50;

      if (currTime - _this.mouseMoveTime_ > K_RECALC_CLIENT_RECT_MS) {
        _this.boundingRect_ = e.currentTarget.getBoundingClientRect();
      }
      _this.mouseMoveTime_ = currTime;

      var mousePosX = e.clientX - _this.boundingRect_.left;
      var mousePosY = e.clientY - _this.boundingRect_.top;

      if (!_this.mouse_) {
        _this.mouse_ = { x: 0, y: 0, lat: 0, lng: 0 };
      }

      _this.mouse_.x = mousePosX;
      _this.mouse_.y = mousePosY;

      var latLng = _this.geoService_.unproject(_this.mouse_, true);
      _this.mouse_.lat = latLng.lat;
      _this.mouse_.lng = latLng.lng;

      _this._onChildMouseMove();

      if (currTime - _this.dragTime_ < K_IDLE_TIMEOUT) {
        _this.fireMouseEventOnIdle_ = true;
      } else {
        _this.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
        _this.fireMouseEventOnIdle_ = false;
      }
    };

    _this._onClick = function () {
      var _this$props11;

      return _this.props.onClick && !_this.childMouseDownArgs_ && new Date().getTime() - _this.childMouseUpTime_ > K_IDLE_CLICK_TIMEOUT && _this.dragTime_ === 0 && (_this$props11 = _this.props).onClick.apply(_this$props11, arguments);
    };

    _this._onMapClick = function (event) {
      if (_this.markersDispatcher_) {
        // support touch events and recalculate mouse position on click
        _this._onMapMouseMove(event);
        var currTime = new Date().getTime();
        if (currTime - _this.dragTime_ > K_IDLE_TIMEOUT) {
          if (_this.mouse_) {
            _this._onClick(_extends({}, _this.mouse_, {
              event: event
            }));
          }

          _this.markersDispatcher_.emit('kON_CLICK', event);
        }
      }
    };

    _this._onMapMouseDownNative = function (event) {
      if (!_this.mouseInMap_) return;

      _this._onMapMouseDown(event);
    };

    _this._onMapMouseDown = function (event) {
      if (_this.markersDispatcher_) {
        var currTime = new Date().getTime();
        if (currTime - _this.dragTime_ > K_IDLE_TIMEOUT) {
          // Hovered marker detected at mouse move could be deleted at mouse down time
          // so it will be good to force hovered marker recalculation
          _this._onMapMouseMove(event);
          _this.markersDispatcher_.emit('kON_MDOWN', event);
        }
      }
    };

    _this._onMapMouseDownCapture = function () {
      if ((0, _detect2.default)().isChrome) {
        // to fix strange zoom in chrome
        if (!_this.mouse_) {
          _this.zoomControlClickTime_ = new Date().getTime();
        }
      }
    };

    _this._onKeyDownCapture = function () {
      if ((0, _detect2.default)().isChrome) {
        _this.zoomControlClickTime_ = new Date().getTime();
      }
    };

    _this._isCenterDefined = function (center) {
      return center && ((0, _is_plain_object2.default)(center) && (0, _isNumber2.default)(center.lat) && (0, _isNumber2.default)(center.lng) || center.length === 2 && (0, _isNumber2.default)(center[0]) && (0, _isNumber2.default)(center[1]));
    };

    _this._onBoundsChanged = function (map, maps, callExtBoundsChange) {
      if (map) {
        var gmC = map.getCenter();
        _this.geoService_.setView([gmC.lat(), gmC.lng()], map.getZoom(), 0);
      }

      if ((_this.props.onChange || _this.props.onBoundsChange) && _this.geoService_.canProject()) {
        var zoom = _this.geoService_.getZoom();
        var bounds = _this.geoService_.getBounds();
        var centerLatLng = _this.geoService_.getCenter();

        if (!(0, _array_helper2.default)(bounds, _this.prevBounds_, kEPS)) {
          if (callExtBoundsChange !== false) {
            var marginBounds = _this.geoService_.getBounds(_this.props.margin);
            if (_this.props.onBoundsChange) {
              _this.props.onBoundsChange(_this.centerIsObject_ ? _extends({}, centerLatLng) : [centerLatLng.lat, centerLatLng.lng], zoom, bounds, marginBounds);
            }

            if (_this.props.onChange) {
              _this.props.onChange({
                center: _extends({}, centerLatLng),
                zoom: zoom,
                bounds: {
                  nw: {
                    lat: bounds[0],
                    lng: bounds[1]
                  },
                  se: {
                    lat: bounds[2],
                    lng: bounds[3]
                  },
                  sw: {
                    lat: bounds[4],
                    lng: bounds[5]
                  },
                  ne: {
                    lat: bounds[6],
                    lng: bounds[7]
                  }
                },
                marginBounds: {
                  nw: {
                    lat: marginBounds[0],
                    lng: marginBounds[1]
                  },
                  se: {
                    lat: marginBounds[2],
                    lng: marginBounds[3]
                  },
                  sw: {
                    lat: marginBounds[4],
                    lng: marginBounds[5]
                  },
                  ne: {
                    lat: marginBounds[6],
                    lng: marginBounds[7]
                  }
                },

                size: _this.geoService_.hasSize() ? {
                  width: _this.geoService_.getWidth(),
                  height: _this.geoService_.getHeight()
                } : {
                  width: 0,
                  height: 0
                }
              });
            }

            _this.prevBounds_ = bounds;
          }
        }
      }
    };

    _this._registerChild = function (ref) {
      _this.googleMapDom_ = ref;
    };

    _this.mounted_ = false;
    _this.initialized_ = false;
    _this.googleApiLoadedCalled_ = false;

    _this.map_ = null;
    _this.maps_ = null;
    _this.prevBounds_ = null;

    _this.layers_ = {};

    _this.mouse_ = null;
    _this.mouseMoveTime_ = 0;
    _this.boundingRect_ = null;
    _this.mouseInMap_ = true;

    _this.dragTime_ = 0;
    _this.fireMouseEventOnIdle_ = false;
    _this.updateCounter_ = 0;

    _this.markersDispatcher_ = new _marker_dispatcher2.default(_this);
    _this.geoService_ = new _geo2.default(K_GOOGLE_TILE_SIZE);
    _this.centerIsObject_ = (0, _is_plain_object2.default)(_this.props.center);

    _this.minZoom_ = DEFAULT_MIN_ZOOM;
    _this.defaultDraggableOption_ = true;

    _this.zoomControlClickTime_ = 0;

    _this.childMouseDownArgs_ = null;
    _this.childMouseUpTime_ = 0;

    _this.googleMapDom_ = null;

    if (process.env.NODE_ENV !== 'production') {
      if (_this.props.apiKey) {
        console.warn('GoogleMap: ' + // eslint-disable-line no-console
        'apiKey is deprecated, use ' + 'bootstrapURLKeys={{key: YOUR_API_KEY}} instead.');
      }

      if (_this.props.onBoundsChange) {
        console.warn('GoogleMap: ' + // eslint-disable-line no-console
        'onBoundsChange is deprecated, use ' + 'onChange({center, zoom, bounds, ...other}) instead.');
      }

      if (_this.props.center === undefined && _this.props.defaultCenter === undefined) {
        console.warn('GoogleMap: center or defaultCenter property must be defined' // eslint-disable-line no-console
        );
      }

      if (_this.props.zoom === undefined && _this.props.defaultZoom === undefined) {
        console.warn('GoogleMap: zoom or defaultZoom property must be defined' // eslint-disable-line no-console
        );
      }
    }

    if (_this._isCenterDefined(_this.props.center || _this.props.defaultCenter)) {
      var propsCenter = latLng2Obj(_this.props.center || _this.props.defaultCenter);
      _this.geoService_.setView(propsCenter, _this.props.zoom || _this.props.defaultZoom, 0);
    }

    _this.zoomAnimationInProgress_ = false;

    _this.state = {
      overlayCreated: false
    };
    return _this;
  }

  _createClass(GoogleMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.mounted_ = true;
      window.addEventListener('resize', this._onWindowResize);
      window.addEventListener('keydown', this._onKeyDownCapture, true);
      var mapDom = _reactDom2.default.findDOMNode(this.googleMapDom_);
      // gmap can't prevent map drag if mousedown event already occured
      // the only workaround I find is prevent mousedown native browser event
      _reactDom2.default.findDOMNode(this.googleMapDom_).addEventListener('mousedown', this._onMapMouseDownNative, true);

      window.addEventListener('mouseup', this._onChildMouseUp, false);

      var bootstrapURLKeys = _extends({}, this.props.apiKey && { key: this.props.apiKey }, this.props.bootstrapURLKeys);

      this.props.googleMapLoader(bootstrapURLKeys); // we can start load immediatly

      setTimeout(function () {
        // to detect size
        _this2._setViewSize();
        if (_this2._isCenterDefined(_this2.props.center || _this2.props.defaultCenter)) {
          _this2._initMap();
        }
      }, 0, this);
      if (this.props.resetBoundsOnResize) {
        var that = this;
        _detectElementResize2.default.addResizeListener(mapDom, that._mapDomResizeCallback);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      if (process.env.NODE_ENV !== 'production') {
        if (this.props.defaultCenter !== nextProps.defaultCenter) {
          console.warn('GoogleMap: defaultCenter prop changed. ' + // eslint-disable-line
          "You can't change default props.");
        }

        if (this.props.defaultZoom !== nextProps.defaultZoom) {
          console.warn('GoogleMap: defaultZoom prop changed. ' + // eslint-disable-line
          "You can't change default props.");
        }
      }

      if (!this._isCenterDefined(this.props.center) && this._isCenterDefined(nextProps.center)) {
        setTimeout(function () {
          return _this3._initMap();
        }, 0);
      }

      if (this.map_) {
        var centerLatLng = this.geoService_.getCenter();
        if (this._isCenterDefined(nextProps.center)) {
          var nextPropsCenter = latLng2Obj(nextProps.center);
          var currCenter = this._isCenterDefined(this.props.center) ? latLng2Obj(this.props.center) : null;

          if (!currCenter || Math.abs(nextPropsCenter.lat - currCenter.lat) + Math.abs(nextPropsCenter.lng - currCenter.lng) > kEPS) {
            if (Math.abs(nextPropsCenter.lat - centerLatLng.lat) + Math.abs(nextPropsCenter.lng - centerLatLng.lng) > kEPS) {
              this.map_.panTo({
                lat: nextPropsCenter.lat,
                lng: nextPropsCenter.lng
              });
            }
          }
        }

        if (nextProps.zoom !== undefined) {
          // if zoom chaged by user
          if (Math.abs(nextProps.zoom - this.props.zoom) > 0) {
            this.map_.setZoom(nextProps.zoom);
          }
        }

        if (this.props.draggable !== undefined && nextProps.draggable === undefined) {
          // reset to default
          this.map_.setOptions({ draggable: this.defaultDraggableOption_ });
        } else if (this.props.draggable !== nextProps.draggable) {
          // also prevent this on window 'mousedown' event to prevent map move
          this.map_.setOptions({ draggable: nextProps.draggable });
        }

        // use shallowEqual to try avoid calling map._setOptions if only the ref changes
        if (nextProps.options !== undefined && !(0, _shallowEqual2.default)(this.props.options, nextProps.options)) {
          var mapPlainObjects = (0, _pick2.default)(this.maps_, _is_plain_object2.default);
          var options = typeof nextProps.options === 'function' ? nextProps.options(mapPlainObjects) : nextProps.options;
          // remove zoom, center and draggable options as these are managed by google-maps-react
          options = (0, _omit2.default)(options, ['zoom', 'center', 'draggable']);

          if ('minZoom' in options) {
            var minZoom = this._computeMinZoom(options.minZoomOverride, options.minZoom);
            options.minZoom = _checkMinZoom(options.minZoom, minZoom);
          }

          this.map_.setOptions(options);
        }

        if (nextProps.layerTypes !== this.props.layerTypes) {
          Object.keys(this.layers_).forEach(function (layerKey) {
            _this3.layers_[layerKey].setMap(null);
            delete _this3.layers_[layerKey];
          });
          this._setLayers(nextProps.layerTypes);
        }
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      // draggable does not affect inner components
      return !(0, _shallowEqual2.default)((0, _omit2.default)(this.props, ['draggable']), (0, _omit2.default)(nextProps, ['draggable'])) || !(0, _shallowEqual2.default)(this.state, nextState);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.markersDispatcher_.emit('kON_CHANGE');

      if (this.props.hoverDistance !== prevProps.hoverDistance) {
        this.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted_ = false;
      var mapDom = _reactDom2.default.findDOMNode(this.googleMapDom_);
      window.removeEventListener('resize', this._onWindowResize);
      window.removeEventListener('keydown', this._onKeyDownCapture);
      mapDom.removeEventListener('mousedown', this._onMapMouseDownNative, true);
      window.removeEventListener('mouseup', this._onChildMouseUp, false);
      if (this.props.resetBoundsOnResize) {
        _detectElementResize2.default.removeResizeListener(mapDom, this._mapDomResizeCallback);
      }

      if (this.overlay_) {
        // this triggers overlay_.onRemove(), which will unmount the <GoogleMapMarkers/>
        this.overlay_.setMap(null);
      }

      if (this.maps_ && this.map_) {
        // fix google, as otherwise listeners works even without map
        this.map_.setOptions({ scrollwheel: false });
        this.maps_.event.clearInstanceListeners(this.map_);
      }

      this.map_ = null;
      this.maps_ = null;
      this.markersDispatcher_.dispose();

      this.resetSizeOnIdle_ = false;

      delete this.map_;
      delete this.markersDispatcher_;
    }
    // calc minZoom if map size available
    // it's better to not set minZoom less than this calculation gives
    // otherwise there is no homeomorphism between screen coordinates and map
    // (one map coordinate can have different screen coordinates)


    // this method works only if this.props.onChildMouseDown was called


    // this method works only if this.props.onChildMouseDown was called


    // K_IDLE_CLICK_TIMEOUT - looks like 300 is enough


    // gmap can't prevent map drag if mousedown event already occured
    // the only workaround I find is prevent mousedown native browser event

  }, {
    key: 'render',
    value: function render() {
      var mapMarkerPrerender = !this.state.overlayCreated ? _react2.default.createElement(_google_map_markers_prerender2.default, {
        experimental: this.props.experimental,
        onChildClick: this._onChildClick,
        onChildMouseDown: this._onChildMouseDown,
        onChildMouseEnter: this._onChildMouseEnter,
        onChildMouseLeave: this._onChildMouseLeave,
        geoService: this.geoService_,
        projectFromLeftTop: false,
        distanceToMouse: this.props.distanceToMouse,
        getHoverDistance: this._getHoverDistance,
        dispatcher: this.markersDispatcher_
      }) : null;

      return _react2.default.createElement(
        'div',
        {
          style: this.props.style,
          onMouseMove: this._onMapMouseMove,
          onMouseDownCapture: this._onMapMouseDownCapture,
          onClick: this._onMapClick
        },
        _react2.default.createElement(_google_map_map2.default, { registerChild: this._registerChild }),
        mapMarkerPrerender
      );
    }
  }]);

  return GoogleMap;
}(_react.Component);

GoogleMap.propTypes = {
  apiKey: _propTypes2.default.string,
  bootstrapURLKeys: _propTypes2.default.any,

  defaultCenter: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({
    lat: _propTypes2.default.number,
    lng: _propTypes2.default.number
  })]),
  center: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({
    lat: _propTypes2.default.number,
    lng: _propTypes2.default.number
  })]),
  defaultZoom: _propTypes2.default.number,
  zoom: _propTypes2.default.number,
  onBoundsChange: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onChildClick: _propTypes2.default.func,
  onChildMouseDown: _propTypes2.default.func,
  onChildMouseUp: _propTypes2.default.func,
  onChildMouseMove: _propTypes2.default.func,
  onChildMouseEnter: _propTypes2.default.func,
  onChildMouseLeave: _propTypes2.default.func,
  onZoomAnimationStart: _propTypes2.default.func,
  onZoomAnimationEnd: _propTypes2.default.func,
  onDrag: _propTypes2.default.func,
  onMapTypeIdChange: _propTypes2.default.func,
  options: _propTypes2.default.any,
  distanceToMouse: _propTypes2.default.func,
  hoverDistance: _propTypes2.default.number,
  debounced: _propTypes2.default.bool,
  margin: _propTypes2.default.array,
  googleMapLoader: _propTypes2.default.any,
  onGoogleApiLoaded: _propTypes2.default.func,
  yesIWantToUseGoogleMapApiInternals: _propTypes2.default.bool,
  draggable: _propTypes2.default.bool,
  style: _propTypes2.default.any,
  resetBoundsOnResize: _propTypes2.default.bool,
  layerTypes: _propTypes2.default.arrayOf(_propTypes2.default.string) };
GoogleMap.defaultProps = {
  distanceToMouse: function distanceToMouse(pt, mousePos /* , markerProps */) {
    return Math.sqrt((pt.x - mousePos.x) * (pt.x - mousePos.x) + (pt.y - mousePos.y) * (pt.y - mousePos.y));
  },

  hoverDistance: 30,
  debounced: true,
  options: defaultOptions_,
  googleMapLoader: _google_map_loader2.default,
  yesIWantToUseGoogleMapApiInternals: false,
  style: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    position: 'relative'
  },
  layerTypes: []
};
GoogleMap.googleMapLoader = _google_map_loader2.default;
exports.default = GoogleMap;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(3);
var warning = __webpack_require__(9);
var assign = __webpack_require__(21);

var ReactPropTypesSecret = __webpack_require__(4);
var checkPropTypes = __webpack_require__(22);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(3);
  var warning = __webpack_require__(9);
  var ReactPropTypesSecret = __webpack_require__(4);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(3);
var ReactPropTypesSecret = __webpack_require__(4);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = __webpack_require__(26);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkerDispatcher = function (_EventEmitter) {
  _inherits(MarkerDispatcher, _EventEmitter);

  function MarkerDispatcher(gmapInstance) {
    _classCallCheck(this, MarkerDispatcher);

    var _this = _possibleConstructorReturn(this, (MarkerDispatcher.__proto__ || Object.getPrototypeOf(MarkerDispatcher)).call(this));

    _this.gmapInstance = gmapInstance;
    return _this;
  }

  _createClass(MarkerDispatcher, [{
    key: 'getChildren',
    value: function getChildren() {
      return this.gmapInstance.props.children;
    }
  }, {
    key: 'getMousePosition',
    value: function getMousePosition() {
      return this.gmapInstance.mouse_;
    }
  }, {
    key: 'getUpdateCounter',
    value: function getUpdateCounter() {
      return this.gmapInstance.updateCounter_;
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      this.gmapInstance = null;
      this.removeAllListeners();
    }
  }]);

  return MarkerDispatcher;
}(_eventemitter2.default);

exports.default = MarkerDispatcher;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

//
// We store our EE objects in a plain object whose properties are event names.
// If `Object.create(null)` is not supported we prefix the event names with a
// `~` to make sure that the built-in object properties are not overridden or
// used as an attack vector.
// We also assume that `Object.create(null)` is available when the event name
// is an ES6 Symbol.
//
var prefix = typeof Object.create !== 'function' ? '~' : false;

/**
 * Representation of a single EventEmitter function.
 *
 * @param {Function} fn Event handler to be called.
 * @param {Mixed} context Context for function execution.
 * @param {Boolean} [once=false] Only emit once
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal EventEmitter interface that is molded against the Node.js
 * EventEmitter interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() { /* Nothing to set */ }

/**
 * Hold the assigned EventEmitters by name.
 *
 * @type {Object}
 * @private
 */
EventEmitter.prototype._events = undefined;

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var events = this._events
    , names = []
    , name;

  if (!events) return names;

  for (name in events) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return a list of assigned event listeners.
 *
 * @param {String} event The events that should be listed.
 * @param {Boolean} exists We only need to know if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events && this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Emit an event to all registered event listeners.
 *
 * @param {String} event The name of the event.
 * @returns {Boolean} Indication if we've emitted an event.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events || !this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if ('function' === typeof listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Register a new EventListener for the given event.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} [context=this] The context of the function.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events) this._events = prefix ? {} : Object.create(null);
  if (!this._events[evt]) this._events[evt] = listener;
  else {
    if (!this._events[evt].fn) this._events[evt].push(listener);
    else this._events[evt] = [
      this._events[evt], listener
    ];
  }

  return this;
};

/**
 * Add an EventListener that's only called once.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} [context=this] The context of the function.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events) this._events = prefix ? {} : Object.create(null);
  if (!this._events[evt]) this._events[evt] = listener;
  else {
    if (!this._events[evt].fn) this._events[evt].push(listener);
    else this._events[evt] = [
      this._events[evt], listener
    ];
  }

  return this;
};

/**
 * Remove event listeners.
 *
 * @param {String} event The event we want to remove.
 * @param {Function} fn The listener that we need to find.
 * @param {Mixed} context Only remove listeners matching this context.
 * @param {Boolean} once Only remove once listeners.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events || !this._events[evt]) return this;

  var listeners = this._events[evt]
    , events = [];

  if (fn) {
    if (listeners.fn) {
      if (
           listeners.fn !== fn
        || (once && !listeners.once)
        || (context && listeners.context !== context)
      ) {
        events.push(listeners);
      }
    } else {
      for (var i = 0, length = listeners.length; i < length; i++) {
        if (
             listeners[i].fn !== fn
          || (once && !listeners[i].once)
          || (context && listeners[i].context !== context)
        ) {
          events.push(listeners[i]);
        }
      }
    }
  }

  //
  // Reset the array, or remove it completely if we have no more listeners.
  //
  if (events.length) {
    this._events[evt] = events.length === 1 ? events[0] : events;
  } else {
    delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners or only the listeners for the specified event.
 *
 * @param {String} event The event want to remove all listeners for.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  if (!this._events) return this;

  if (event) delete this._events[prefix ? prefix + event : event];
  else this._events = prefix ? {} : Object.create(null);

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  margin: 0,
  padding: 0,
  position: 'absolute'
};

var GoogleMapMap = function (_Component) {
  _inherits(GoogleMapMap, _Component);

  function GoogleMapMap() {
    _classCallCheck(this, GoogleMapMap);

    return _possibleConstructorReturn(this, (GoogleMapMap.__proto__ || Object.getPrototypeOf(GoogleMapMap)).apply(this, arguments));
  }

  _createClass(GoogleMapMap, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false; // disable react on this div
    }
  }, {
    key: 'render',
    value: function render() {
      var registerChild = this.props.registerChild;

      return _react2.default.createElement('div', { ref: registerChild, style: style });
    }
  }]);

  return GoogleMapMap;
}(_react.Component);

exports.default = GoogleMapMap;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    { style: style },
    _react2.default.createElement(_google_map_markers2.default, _extends({}, props, { prerender: true }))
  );
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _google_map_markers = __webpack_require__(11);

var _google_map_markers2 = _interopRequireDefault(_google_map_markers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  width: '50%',
  height: '50%',
  left: '50%',
  top: '50%',
  // backgroundColor: 'red',
  margin: 0,
  padding: 0,
  position: 'absolute'
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = googleMapLoader;
/* eslint-disable no-console */
var $script_ = null;

var loadPromise_ = void 0;

var resolveCustomPromise_ = void 0;
var _customPromise = new Promise(function (resolve) {
  resolveCustomPromise_ = resolve;
});

// TODO add libraries language and other map options
function googleMapLoader(bootstrapURLKeys) {
  if (!$script_) {
    $script_ = __webpack_require__(30); // eslint-disable-line
  }

  // call from outside google-map-react
  // will be as soon as loadPromise_ resolved
  if (!bootstrapURLKeys) {
    return _customPromise;
  }

  if (loadPromise_) {
    return loadPromise_;
  }

  loadPromise_ = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      reject(new Error('google map cannot be loaded outside browser env'));
      return;
    }

    if (window.google && window.google.maps) {
      resolve(window.google.maps);
      return;
    }

    if (typeof window._$_google_map_initialize_$_ !== 'undefined') {
      reject(new Error('google map initialization error'));
    }

    window._$_google_map_initialize_$_ = function () {
      delete window._$_google_map_initialize_$_;
      resolve(window.google.maps);
    };

    if (process.env.NODE_ENV !== 'production') {
      if (Object.keys(bootstrapURLKeys).indexOf('callback') > -1) {
        console.error('"callback" key in bootstrapURLKeys is not allowed, ' + // eslint-disable-line
        'use onGoogleApiLoaded property instead');
        throw new Error('"callback" key in bootstrapURLKeys is not allowed, ' + 'use onGoogleApiLoaded property instead');
      }
    }

    var queryString = Object.keys(bootstrapURLKeys).reduce(function (r, key) {
      return r + '&' + key + '=' + bootstrapURLKeys[key];
    }, '');

    $script_('https://maps.googleapis.com/maps/api/js?callback=_$_google_map_initialize_$_' + queryString, function () {
      return typeof window.google === 'undefined' && reject(new Error('google map initialization error (not loaded)'));
    });
  });

  resolveCustomPromise_(loadPromise_);

  return loadPromise_;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else this[name] = definition()
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      return !fn(el)
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectBrowser;
// http://stackoverflow.com/questions/5899783/detect-safari-chrome-ie-firefox-opera-with-user-agent
var detectBrowserResult_ = null;

function detectBrowser() {
  if (detectBrowserResult_) {
    return detectBrowserResult_;
  }

  if (typeof navigator !== 'undefined') {
    var isExplorer = navigator.userAgent.indexOf('MSIE') > -1;
    var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
    var isOpera = navigator.userAgent.toLowerCase().indexOf('op') > -1;

    var isChrome = navigator.userAgent.indexOf('Chrome') > -1;
    var isSafari = navigator.userAgent.indexOf('Safari') > -1;

    if (isChrome && isSafari) {
      isSafari = false;
    }

    if (isChrome && isOpera) {
      isChrome = false;
    }

    detectBrowserResult_ = {
      isExplorer: isExplorer,
      isFirefox: isFirefox,
      isOpera: isOpera,
      isChrome: isChrome,
      isSafari: isSafari
    };
    return detectBrowserResult_;
  }

  detectBrowserResult_ = {
    isChrome: true,
    isExplorer: false,
    isFirefox: false,
    isOpera: false,
    isSafari: false
  };

  return detectBrowserResult_;
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pointGeometry = __webpack_require__(13);

var _pointGeometry2 = _interopRequireDefault(_pointGeometry);

var _lat_lng = __webpack_require__(14);

var _lat_lng2 = _interopRequireDefault(_lat_lng);

var _transform = __webpack_require__(33);

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Geo = function () {
  function Geo(tileSize) {
    _classCallCheck(this, Geo);

    // left_top view пользует гугл
    // super();
    this.hasSize_ = false;
    this.hasView_ = false;
    this.transform_ = new _transform2.default(tileSize || 512);
  }

  _createClass(Geo, [{
    key: 'setView',
    value: function setView(center, zoom, bearing) {
      this.transform_.center = _lat_lng2.default.convert(center);
      this.transform_.zoom = +zoom;
      this.transform_.bearing = +bearing;
      this.hasView_ = true;
    }
  }, {
    key: 'setViewSize',
    value: function setViewSize(width, height) {
      this.transform_.width = width;
      this.transform_.height = height;
      this.hasSize_ = true;
    }
  }, {
    key: 'canProject',
    value: function canProject() {
      return this.hasSize_ && this.hasView_;
    }
  }, {
    key: 'hasSize',
    value: function hasSize() {
      return this.hasSize_;
    }
  }, {
    key: 'unproject',
    value: function unproject(ptXY, viewFromLeftTop) {
      var ptRes = void 0;
      if (viewFromLeftTop) {
        var ptxy = _extends({}, ptXY);
        ptxy.x -= this.transform_.width / 2;
        ptxy.y -= this.transform_.height / 2;
        ptRes = this.transform_.pointLocation(_pointGeometry2.default.convert(ptxy));
      } else {
        ptRes = this.transform_.pointLocation(_pointGeometry2.default.convert(ptXY));
      }

      ptRes.lng -= 360 * Math.round(ptRes.lng / 360); // convert 2 google format
      return ptRes;
    }
  }, {
    key: 'project',
    value: function project(ptLatLng, viewFromLeftTop) {
      if (viewFromLeftTop) {
        var pt = this.transform_.locationPoint(_lat_lng2.default.convert(ptLatLng));
        pt.x -= this.transform_.worldSize * Math.round(pt.x / this.transform_.worldSize);

        pt.x += this.transform_.width / 2;
        pt.y += this.transform_.height / 2;

        return pt;
      }

      return this.transform_.locationPoint(_lat_lng2.default.convert(ptLatLng));
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.transform_.width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.transform_.height;
    }
  }, {
    key: 'getZoom',
    value: function getZoom() {
      return this.transform_.zoom;
    }
  }, {
    key: 'getCenter',
    value: function getCenter() {
      var ptRes = this.transform_.pointLocation({ x: 0, y: 0 });

      return ptRes;
    }
  }, {
    key: 'getBounds',
    value: function getBounds(margins, roundFactor) {
      var bndT = margins && margins[0] || 0;
      var bndR = margins && margins[1] || 0;
      var bndB = margins && margins[2] || 0;
      var bndL = margins && margins[3] || 0;

      if (this.getWidth() - bndR - bndL > 0 && this.getHeight() - bndT - bndB > 0) {
        var topLeftCorner = this.unproject({
          x: bndL - this.getWidth() / 2,
          y: bndT - this.getHeight() / 2
        });
        var bottomRightCorner = this.unproject({
          x: this.getWidth() / 2 - bndR,
          y: this.getHeight() / 2 - bndB
        });

        var res = [topLeftCorner.lat, topLeftCorner.lng, // NW
        bottomRightCorner.lat, bottomRightCorner.lng, // SE
        bottomRightCorner.lat, topLeftCorner.lng, // SW
        topLeftCorner.lat, bottomRightCorner.lng];

        if (roundFactor) {
          res = res.map(function (r) {
            return Math.round(r * roundFactor) / roundFactor;
          });
        }
        return res;
      }

      return [0, 0, 0, 0];
    }
  }]);

  return Geo;
}();

exports.default = Geo;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


var _pointGeometry = __webpack_require__(13);

var _pointGeometry2 = _interopRequireDefault(_pointGeometry);

var _lat_lng = __webpack_require__(14);

var _lat_lng2 = _interopRequireDefault(_lat_lng);

var _wrap = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// A single transform, generally used for a single tile to be scaled, rotated, and zoomed.
var Transform = function () {
  function Transform(tileSize, minZoom, maxZoom) {
    _classCallCheck(this, Transform);

    this.tileSize = tileSize || 512; // constant

    this._minZoom = minZoom || 0;
    this._maxZoom = maxZoom || 52;

    this.latRange = [-85.05113, 85.05113];

    this.width = 0;
    this.height = 0;
    this.zoom = 0;
    this.center = new _lat_lng2.default(0, 0);
    this.angle = 0;
  }

  _createClass(Transform, [{
    key: 'zoomScale',
    value: function zoomScale(zoom) {
      return Math.pow(2, zoom);
    }
  }, {
    key: 'scaleZoom',
    value: function scaleZoom(scale) {
      return Math.log(scale) / Math.LN2;
    }
  }, {
    key: 'project',
    value: function project(latlng, worldSize) {
      return new _pointGeometry2.default(this.lngX(latlng.lng, worldSize), this.latY(latlng.lat, worldSize));
    }
  }, {
    key: 'unproject',
    value: function unproject(point, worldSize) {
      return new _lat_lng2.default(this.yLat(point.y, worldSize), this.xLng(point.x, worldSize));
    }
  }, {
    key: 'lngX',


    // lat/lon <-> absolute pixel coords convertion
    value: function lngX(lon, worldSize) {
      return (180 + lon) * (worldSize || this.worldSize) / 360;
    }

    // latitude to absolute y coord

  }, {
    key: 'latY',
    value: function latY(lat, worldSize) {
      var y = 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
      return (180 - y) * (worldSize || this.worldSize) / 360;
    }
  }, {
    key: 'xLng',
    value: function xLng(x, worldSize) {
      return x * 360 / (worldSize || this.worldSize) - 180;
    }
  }, {
    key: 'yLat',
    value: function yLat(y, worldSize) {
      var y2 = 180 - y * 360 / (worldSize || this.worldSize);
      return 360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90;
    }
  }, {
    key: 'locationPoint',
    value: function locationPoint(latlng) {
      var p = this.project(latlng);
      return this.centerPoint._sub(this.point._sub(p)._rotate(this.angle));
    }
  }, {
    key: 'pointLocation',
    value: function pointLocation(p) {
      var p2 = this.centerPoint._sub(p)._rotate(-this.angle);
      return this.unproject(this.point.sub(p2));
    }
  }, {
    key: 'minZoom',
    get: function get() {
      return this._minZoom;
    },
    set: function set(zoom) {
      this._minZoom = zoom;
      this.zoom = Math.max(this.zoom, zoom);
    }
  }, {
    key: 'maxZoom',
    get: function get() {
      return this._maxZoom;
    },
    set: function set(zoom) {
      this._maxZoom = zoom;
      this.zoom = Math.min(this.zoom, zoom);
    }
  }, {
    key: 'worldSize',
    get: function get() {
      return this.tileSize * this.scale;
    }
  }, {
    key: 'centerPoint',
    get: function get() {
      return new _pointGeometry2.default(0, 0); // this.size._div(2);
    }
  }, {
    key: 'size',
    get: function get() {
      return new _pointGeometry2.default(this.width, this.height);
    }
  }, {
    key: 'bearing',
    get: function get() {
      return -this.angle / Math.PI * 180;
    },
    set: function set(bearing) {
      this.angle = -(0, _wrap.wrap)(bearing, -180, 180) * Math.PI / 180;
    }
  }, {
    key: 'zoom',
    get: function get() {
      return this._zoom;
    },
    set: function set(zoom) {
      var zoomV = Math.min(Math.max(zoom, this.minZoom), this.maxZoom);
      this._zoom = zoomV;
      this.scale = this.zoomScale(zoomV);
      this.tileZoom = Math.floor(zoomV);
      this.zoomFraction = zoomV - this.tileZoom;
    }
  }, {
    key: 'x',
    get: function get() {
      return this.lngX(this.center.lng);
    }
  }, {
    key: 'y',
    get: function get() {
      return this.latY(this.center.lat);
    }
  }, {
    key: 'point',
    get: function get() {
      return new _pointGeometry2.default(this.x, this.y);
    }
  }]);

  return Transform;
}();

exports.default = Transform;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isArraysEqualEps;
function isArraysEqualEps(arrayA, arrayB, eps) {
  if (arrayA && arrayB) {
    for (var i = 0; i !== arrayA.length; ++i) {
      if (Math.abs(arrayA[i] - arrayB[i]) > eps) {
        return false;
      }
    }
    return true;
  }
  return false;
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isPlainObject;
// source taken from https://github.com/rackt/redux/blob/master/src/utils/isPlainObject.js
var fnToString = function fnToString(fn) {
  return Function.prototype.toString.call(fn);
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return false;
  }

  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

  if (proto === null) {
    return true;
  }

  var constructor = proto.constructor;

  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pick;
// source taken from https://github.com/rackt/redux/blob/master/src/utils/pick.js

function pick(obj, fn) {
  return Object.keys(obj).reduce(function (result, key) {
    if (fn(obj[key])) {
      result[key] = obj[key]; // eslint-disable-line
    }
    return result;
  }, {});
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = raf;
function raf(callback) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(callback);
  }

  var nativeRaf = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

  return nativeRaf ? nativeRaf(callback) : window.setTimeout(callback, 1e3 / 60);
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var log2 = Math.log2 ? Math.log2 : function (x) {
  return Math.log(x) / Math.LN2;
};

exports.default = log2;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isNumber;
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}

var objectToString = Object.prototype.toString;

function isNumber(value) {
  var numberTag = '[object Number]';
  return typeof value === 'number' || isObjectLike(value) && objectToString.call(value) === numberTag;
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
/**
* Detect Element Resize.
* Forked in order to guard against unsafe 'window' and 'document' references.
*
* https://github.com/sdecima/javascript-detect-element-resize
* Sebastian Decima
*
* version: 0.5.3
**/

// Reliable `window` and `document` detection
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// Check `document` and `window` in case of server-side rendering
var _window;
if (canUseDOM) {
  _window = window;
} else if (typeof self !== 'undefined') {
  _window = self;
} else {
  _window = undefined;
}

var attachEvent = typeof document !== 'undefined' && document.attachEvent;
var stylesCreated = false;

if (canUseDOM && !attachEvent) {
  var requestFrame = function () {
    var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
      return _window.setTimeout(fn, 20);
    };
    return function (fn) {
      return raf(fn);
    };
  }();

  var cancelFrame = function () {
    var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
    return function (id) {
      return cancel(id);
    };
  }();

  var resetTriggers = function resetTriggers(element) {
    var triggers = element.__resizeTriggers__,
        expand = triggers.firstElementChild,
        contract = triggers.lastElementChild,
        expandChild = expand.firstElementChild;
    contract.scrollLeft = contract.scrollWidth;
    contract.scrollTop = contract.scrollHeight;
    expandChild.style.width = expand.offsetWidth + 1 + 'px';
    expandChild.style.height = expand.offsetHeight + 1 + 'px';
    expand.scrollLeft = expand.scrollWidth;
    expand.scrollTop = expand.scrollHeight;
  };

  var checkTriggers = function checkTriggers(element) {
    return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
  };

  var scrollListener = function scrollListener(e) {
    var element = this;
    resetTriggers(this);
    if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
    this.__resizeRAF__ = requestFrame(function () {
      if (checkTriggers(element)) {
        element.__resizeLast__.width = element.offsetWidth;
        element.__resizeLast__.height = element.offsetHeight;
        element.__resizeListeners__.forEach(function (fn) {
          fn.call(element, e);
        });
      }
    });
  };

  /* Detect CSS Animations support to detect element display/re-attach */
  var animation = false,
      animationstring = 'animation',
      keyframeprefix = '',
      animationstartevent = 'animationstart',
      domPrefixes = 'Webkit Moz O ms'.split(' '),
      startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
      pfx = '';

  if (canUseDOM) {
    var elm = document.createElement('fakeelement');
    if (elm.style.animationName !== undefined) {
      animation = true;
    }

    if (animation === false) {
      for (var i = 0; i < domPrefixes.length; i++) {
        if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
          pfx = domPrefixes[i];
          animationstring = pfx + 'Animation';
          keyframeprefix = '-' + pfx.toLowerCase() + '-';
          animationstartevent = startEvents[i];
          animation = true;
          break;
        }
      }
    }
  }

  var animationName = 'resizeanim';
  var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
  var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
}

var createStyles = function createStyles() {
  if (!stylesCreated) {
    //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
    var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
    stylesCreated = true;
  }
};

var addResizeListener = function addResizeListener(element, fn) {
  if (element.parentNode === undefined) {
    var tempParentDiv = document.createElement('div');
    element.parentNode = tempParentDiv;
  }
  element = element.parentNode;
  if (attachEvent) element.attachEvent('onresize', fn);else {
    if (!element.__resizeTriggers__) {
      if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
      createStyles();
      element.__resizeLast__ = {};
      element.__resizeListeners__ = [];
      (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
      element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
      element.appendChild(element.__resizeTriggers__);
      resetTriggers(element);
      element.addEventListener('scroll', scrollListener, true);

      /* Listen for a css animation to detect element display/re-attach */
      animationstartevent && element.__resizeTriggers__.addEventListener(animationstartevent, function (e) {
        if (e.animationName == animationName) resetTriggers(element);
      });
    }
    element.__resizeListeners__.push(fn);
  }
};

var removeResizeListener = function removeResizeListener(element, fn) {
  element = element.parentNode;
  if (attachEvent) element.detachEvent('onresize', fn);else {
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
      element.removeEventListener('scroll', scrollListener);
      element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
    }
  }
};

module.exports = {
  addResizeListener: addResizeListener,
  removeResizeListener: removeResizeListener
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Marker = function (props) {
        return react_1.createElement("div", { className: "widget-google-maps-marker" });
    };
    exports.Marker.displayName = "Marker";
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(6), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, react_1, Map_1, Alert_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GoogleMapContainer = (function (_super) {
        __extends(GoogleMapContainer, _super);
        function GoogleMapContainer(props) {
            var _this = _super.call(this, props) || this;
            var alertMessage = GoogleMapContainer.validateProps(props);
            _this.subscriptionHandles = [];
            _this.state = { alertMessage: alertMessage, locations: [] };
            _this.subscribe(_this.props.mxObject);
            return _this;
        }
        GoogleMapContainer.prototype.render = function () {
            if (this.state.alertMessage) {
                return react_1.createElement(Alert_1.Alert, {
                    bootstrapStyle: "danger",
                    className: "widget-google-maps-alert",
                    message: this.state.alertMessage
                });
            }
            else {
                return react_1.createElement(Map_1.Map, {
                    apiKey: this.props.apiKey,
                    autoZoom: this.props.autoZoom,
                    className: this.props.class,
                    defaultCenterAddress: this.props.defaultCenterAddress,
                    height: this.props.height,
                    heightUnit: this.props.heightUnit,
                    locations: this.state.locations,
                    optionDrag: this.props.optionDrag,
                    optionMapControl: this.props.optionMapControl,
                    optionScroll: this.props.optionScroll,
                    optionStreetView: this.props.optionStreetView,
                    optionZoomControl: this.props.optionZoomControl,
                    style: GoogleMapContainer.parseStyle(this.props.style),
                    width: this.props.width,
                    widthUnit: this.props.widthUnit,
                    zoomLevel: this.props.zoomLevel
                });
            }
        };
        GoogleMapContainer.prototype.componentWillReceiveProps = function (nextProps) {
            this.subscribe(nextProps.mxObject);
            this.fetchData(nextProps.mxObject);
        };
        GoogleMapContainer.prototype.componentDidMount = function () {
            if (!this.state.alertMessage)
                this.fetchData(this.props.mxObject);
        };
        GoogleMapContainer.prototype.componentWillUnmount = function () {
            this.subscriptionHandles.forEach(window.mx.data.unsubscribe);
        };
        GoogleMapContainer.validateProps = function (props) {
            var message = "";
            if (props.dataSource === "static" && !props.staticLocations.length) {
                message = "At least one static location is required for 'Data source 'Static'";
            }
            if (props.dataSource === "static") {
                var invalidLocations = props.staticLocations.filter(function (location) {
                    return !location.address && !(location.latitude && location.longitude);
                });
                if (invalidLocations.length > 0) {
                    message = "The 'Address' or 'Latitude' and 'Longitude' "
                        + "is required for this 'Static' data source";
                }
            }
            if (props.dataSource === "XPath" && !props.locationsEntity) {
                message = "The 'Locations entity' is required for 'Data source' 'XPath'";
            }
            if (props.dataSource === "microflow" && !props.dataSourceMicroflow) {
                message = "A 'Microflow' is required for 'Data source' 'Microflow'";
            }
            if (props.dataSource !== "static" && (!props.addressAttribute &&
                !(props.longitudeAttribute && props.latitudeAttribute))) {
                message = "The 'Address attribute' or 'Latitude Attribute' and 'Longitude attribute' "
                    + "is required for this data source";
            }
            if (!props.autoZoom && props.zoomLevel < 2) {
                message = "Zoom level must be greater than 1";
            }
            return message;
        };
        GoogleMapContainer.parseStaticLocations = function (locations) {
            return locations.map(function (location) { return ({
                address: location.address,
                latitude: location.latitude.trim() !== "" ? Number(location.latitude) : undefined,
                longitude: location.longitude.trim() !== "" ? Number(location.longitude) : undefined
            }); });
        };
        GoogleMapContainer.prototype.subscribe = function (contextObject) {
            var _this = this;
            this.subscriptionHandles.forEach(window.mx.data.unsubscribe);
            this.subscriptionHandles = [];
            if (contextObject) {
                this.subscriptionHandles.push(window.mx.data.subscribe({
                    callback: function () { return _this.fetchData(contextObject); },
                    guid: contextObject.getGuid()
                }));
                [
                    this.props.addressAttribute,
                    this.props.latitudeAttribute,
                    this.props.longitudeAttribute
                ].forEach(function (attr) { return _this.subscriptionHandles.push(window.mx.data.subscribe({
                    attr: attr,
                    callback: function () { return _this.fetchData(contextObject); }, guid: contextObject.getGuid()
                })); });
            }
        };
        GoogleMapContainer.prototype.fetchData = function (contextObject) {
            if (this.props.dataSource === "static") {
                this.setState({ locations: GoogleMapContainer.parseStaticLocations(this.props.staticLocations) });
            }
            else if (this.props.dataSource === "context") {
                this.fetchLocationsByContext(contextObject);
            }
            else if (this.props.dataSource === "XPath" && this.props.locationsEntity) {
                var guid = contextObject ? contextObject.getGuid() : "";
                this.fetchLocationsByXPath(guid);
            }
            else if (this.props.dataSource === "microflow" && this.props.dataSourceMicroflow) {
                this.fetchLocationsByMicroflow(this.props.dataSourceMicroflow, contextObject);
            }
        };
        GoogleMapContainer.prototype.fetchLocationsByContext = function (contextObject) {
            if (contextObject) {
                this.setLocationsFromMxObjects([contextObject]);
            }
        };
        GoogleMapContainer.prototype.fetchLocationsByXPath = function (contextGuid) {
            var _this = this;
            var entityConstraint = this.props.entityConstraint;
            var requiresContext = entityConstraint && entityConstraint.indexOf("[%CurrentObject%]") > -1;
            if (!contextGuid && requiresContext) {
                this.setState({ locations: [] });
                return;
            }
            var constraint = entityConstraint ? entityConstraint.replace("[%CurrentObject%]", contextGuid) : "";
            var xpath = "//" + this.props.locationsEntity + constraint;
            window.mx.data.get({
                callback: function (mxObjects) { return _this.setLocationsFromMxObjects(mxObjects); },
                error: function (error) {
                    return _this.setState({
                        alertMessage: "An error occurred while retrieving locations: " + error + " constraint " + xpath,
                        locations: []
                    });
                },
                xpath: xpath
            });
        };
        GoogleMapContainer.prototype.fetchLocationsByMicroflow = function (microflow, contextObject) {
            var _this = this;
            if (microflow) {
                window.mx.ui.action(microflow, {
                    callback: function (mxObjects) { return _this.setLocationsFromMxObjects(mxObjects); },
                    error: function (error) { return _this.setState({
                        alertMessage: "An error occurred while retrieving locations: " + error.message + " in " + microflow,
                        locations: []
                    }); },
                    params: {
                        applyto: "selection",
                        guids: contextObject ? [contextObject.getGuid()] : []
                    }
                });
            }
        };
        GoogleMapContainer.prototype.setLocationsFromMxObjects = function (mxObjects) {
            var _this = this;
            var locations = mxObjects.map(function (mxObject) {
                var lat = mxObject.get(_this.props.latitudeAttribute);
                var lon = mxObject.get(_this.props.longitudeAttribute);
                return {
                    address: mxObject.get(_this.props.addressAttribute),
                    latitude: lat ? Number(lat) : undefined,
                    longitude: lon ? Number(lon) : undefined
                };
            });
            this.setState({ locations: locations });
        };
        GoogleMapContainer.parseStyle = function (style) {
            if (style === void 0) { style = ""; }
            try {
                return style.split(";").reduce(function (styleObject, line) {
                    var pair = line.split(":");
                    if (pair.length === 2) {
                        var name_1 = pair[0].trim().replace(/(-.)/g, function (match) { return match[1].toUpperCase(); });
                        styleObject[name_1] = pair[1].trim();
                    }
                    return styleObject;
                }, {});
            }
            catch (error) {
                window.console.log("Failed to parse style", style, error);
            }
            return {};
        };
        return GoogleMapContainer;
    }(react_1.Component));
    exports.default = GoogleMapContainer;
    exports.GoogleMapContainer = GoogleMapContainer;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODdmNjM5YWNjMDQ4NGUxMDhmNzAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FsZXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hcC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvc2hhbGxvd0VxdWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi9nb29nbGVfbWFwX21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL29taXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BvaW50LWdlb21ldHJ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9saWJfZ2VvL2xhdF9sbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2xpYl9nZW8vd3JhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvR29vZ2xlTWFwcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dvb2dsZU1hcHMud2VibW9kZWxlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL2dvb2dsZV9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi9tYXJrZXJfZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRlbWl0dGVyMy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvZ29vZ2xlX21hcF9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL2dvb2dsZV9tYXBfbWFya2Vyc19wcmVyZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2xvYWRlcnMvZ29vZ2xlX21hcF9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjcmlwdGpzL2Rpc3Qvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2dlby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvbGliX2dlby90cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2FycmF5X2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvaXNfcGxhaW5fb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9waWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9yYWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL21hdGgvbG9nMi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvaXNOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2RldGVjdEVsZW1lbnRSZXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFya2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dvb2dsZU1hcENvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsa0M7Ozs7OztBQ0FBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIscUJBQXFCO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7OztBQUdBOzs7QUFHQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsaUVBQWlFLHFDQUFxQztBQUN0RztBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsNEI7Ozs7Ozs7O0FDdGhDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHNCQUFzQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRztBQUNoRztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDekRBLHNDOzs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQsbUM7Ozs7Ozs7QUMxREE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE1BQU07QUFDakIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBELE9BQU87QUFDakU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxlQUFlLFlBQVk7QUFDM0I7O0FBRUE7QUFDQSwyREFBMkQ7QUFDM0QsK0RBQStEO0FBQy9ELG1FQUFtRTtBQUNuRTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLE1BQU07QUFDakIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdEQUFnRCxZQUFZO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaFNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQjs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosaURBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywwQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQsbUNBQW1DO0FBQ3RGO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQsK0I7Ozs7Ozs7QUN4REE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7QUFDQTtBQUNBO0FBQ0EsS0FBSyxlQUFlO0FBQ3BCLDJFQUEyRSxVQUFVLGtCQUFrQjtBQUN2RztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7OytDQ25DQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHVDQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxDOzs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkVBQTZFLHNCQUFzQjtBQUNuRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssaUNBQWlDLGlCQUFpQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7O0FDMUhEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7O0FDakRBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQLGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpREFBaUQsYUFBYTs7QUFFOUQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRCxzQjs7Ozs7OztBQ3pKQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFLEdBQUc7OztBQUdwakI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQsNEI7Ozs7Ozs7QUMvS0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxvR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsSUFBSTtBQUNmLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7QUNoQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1AsQzs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7QUNkQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQSx1Qjs7Ozs7OztBQ1RBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG9HQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDbEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0ZBQW9GLE9BQU8sWUFBWSxFQUFFLEtBQUssWUFBWSxFQUFFLEVBQUU7QUFDOUgsOEVBQThFO0FBQzlFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRixrRUFBa0UsWUFBWSxFQUFFLDBFQUEwRSxjQUFjLGdCQUFnQixvQkFBb0IsUUFBUSxTQUFTLGNBQWMsYUFBYSxrQkFBa0IsRUFBRSx5QkFBeUIsa0JBQWtCLGdCQUFnQixFQUFFLDJCQUEyQixhQUFhLGNBQWMsRUFBRTtBQUNuZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7SUNyS2EsY0FBTSxHQUFvQyxVQUFDLEtBQUs7UUFDekQsNEJBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsMkJBQTJCLEVBQUUsQ0FBQztJQUFoRSxDQUFnRSxDQUFDO0lBRXJFLGNBQU0sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDZ0M5QjtRQUFpQyxzQ0FBb0Y7UUFHakgsNEJBQVksS0FBOEI7WUFBMUMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FNZjtZQUpHLElBQU0sWUFBWSxHQUFHLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3RCxLQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxZQUFZLGdCQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUM3QyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7O1FBQ3hDLENBQUM7UUFFRCxtQ0FBTSxHQUFOO1lBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixNQUFNLENBQUMscUJBQWEsQ0FBQyxhQUFLLEVBQUU7b0JBQ3hCLGNBQWMsRUFBRSxRQUFRO29CQUN4QixTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO2lCQUNuQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLHFCQUFhLENBQUMsU0FBRyxFQUFFO29CQUN0QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO29CQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO29CQUM3QixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO29CQUMzQixvQkFBb0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQjtvQkFDckQsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtvQkFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtvQkFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztvQkFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtvQkFDakMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0I7b0JBQzdDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVk7b0JBQ3JDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCO29CQUM3QyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtvQkFDL0MsS0FBSyxFQUFFLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztvQkFDdEQsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztvQkFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztvQkFDL0IsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztpQkFDbEMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUM7UUFFRCxzREFBeUIsR0FBekIsVUFBMEIsU0FBa0M7WUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELDhDQUFpQixHQUFqQjtZQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7Z0JBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFFRCxpREFBb0IsR0FBcEI7WUFDSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFFYSxnQ0FBYSxHQUEzQixVQUE0QixLQUE4QjtZQUN0RCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDakIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLE9BQU8sR0FBRyxvRUFBb0UsQ0FBQztZQUNuRixDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLGtCQUFRO29CQUMxRCxRQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQztnQkFBL0QsQ0FBK0QsQ0FDbEUsQ0FBQztnQkFDRixFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUIsT0FBTyxHQUFHLDhDQUE4QzswQkFDbEQsMkNBQTJDLENBQUM7Z0JBQ3RELENBQUM7WUFDTCxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDekQsT0FBTyxHQUFHLDhEQUE4RCxDQUFDO1lBQzdFLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLE9BQU8sR0FBRyx5REFBeUQsQ0FBQztZQUN4RSxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0I7Z0JBQ3pELENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELE9BQU8sR0FBRyw0RUFBNEU7c0JBQ2hGLGtDQUFrQyxDQUFDO1lBQzdDLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxPQUFPLEdBQUcsbUNBQW1DLENBQUM7WUFDbEQsQ0FBQztZQUVELE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbkIsQ0FBQztRQUdhLHVDQUFvQixHQUFsQyxVQUFtQyxTQUEyQjtZQUMxRCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxJQUFJLFFBQUM7Z0JBQzlCLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTztnQkFDekIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUztnQkFDakYsU0FBUyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsU0FBUzthQUN2RixDQUFDLEVBSitCLENBSS9CLENBQUMsQ0FBQztRQUNSLENBQUM7UUFFTyxzQ0FBUyxHQUFqQixVQUFrQixhQUFtQztZQUFyRCxpQkFrQkM7WUFqQkcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1lBRTlCLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNuRCxRQUFRLEVBQUUsY0FBTSxZQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUE3QixDQUE2QjtvQkFDN0MsSUFBSSxFQUFFLGFBQWEsQ0FBQyxPQUFPLEVBQUU7aUJBQ2hDLENBQUMsQ0FBQyxDQUFDO2dCQUNKO29CQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCO29CQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtvQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0I7aUJBQ2hDLENBQUMsT0FBTyxDQUFDLGNBQUksSUFBSSxZQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDckUsSUFBSTtvQkFDSixRQUFRLEVBQUUsY0FBTSxZQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUE3QixDQUE2QixFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsT0FBTyxFQUFFO2lCQUMvRSxDQUFDLENBQUMsRUFIZSxDQUdmLENBQUMsQ0FBQztZQUNULENBQUM7UUFDTCxDQUFDO1FBRU8sc0NBQVMsR0FBakIsVUFBa0IsYUFBbUM7WUFDakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0RyxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pFLElBQU0sSUFBSSxHQUFHLGFBQWEsR0FBRyxhQUFhLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUMxRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pGLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ2xGLENBQUM7UUFDTCxDQUFDO1FBRU8sb0RBQXVCLEdBQS9CLFVBQWdDLGFBQW1DO1lBQy9ELEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFFLGFBQWEsQ0FBRSxDQUFDLENBQUM7WUFDdEQsQ0FBQztRQUNMLENBQUM7UUFFTyxrREFBcUIsR0FBN0IsVUFBOEIsV0FBbUI7WUFBakQsaUJBb0JDO1lBbkJXLGtEQUFnQixDQUFnQjtZQUN4QyxJQUFNLGVBQWUsR0FBRyxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMvRixFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ2pDLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFFRCxJQUFNLFVBQVUsR0FBRyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3RHLElBQU0sS0FBSyxHQUFHLE9BQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsVUFBWSxDQUFDO1lBRTdELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDZixRQUFRLEVBQUUsbUJBQVMsSUFBSSxZQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLEVBQXpDLENBQXlDO2dCQUNoRSxLQUFLLEVBQUUsZUFBSztvQkFDUixZQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNWLFlBQVksRUFBRSxtREFBaUQsS0FBSyxpQkFBYyxHQUFHLEtBQUs7d0JBQzFGLFNBQVMsRUFBRSxFQUFFO3FCQUNoQixDQUFDO2dCQUhGLENBR0U7Z0JBQ04sS0FBSzthQUNSLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFTyxzREFBeUIsR0FBakMsVUFBa0MsU0FBaUIsRUFBRSxhQUFtQztZQUF4RixpQkFjQztZQWJHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtvQkFDM0IsUUFBUSxFQUFFLFVBQUMsU0FBZ0MsSUFBSyxZQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLEVBQXpDLENBQXlDO29CQUN6RixLQUFLLEVBQUUsZUFBSyxJQUFJLFlBQUksQ0FBQyxRQUFRLENBQUM7d0JBQzFCLFlBQVksRUFBRSxtREFBaUQsS0FBSyxDQUFDLE9BQU8sU0FBTSxHQUFHLFNBQVM7d0JBQzlGLFNBQVMsRUFBRSxFQUFFO3FCQUNoQixDQUFDLEVBSGMsQ0FHZDtvQkFDRixNQUFNLEVBQUU7d0JBQ0osT0FBTyxFQUFFLFdBQVc7d0JBQ3BCLEtBQUssRUFBRSxhQUFhLEdBQUcsQ0FBRSxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUUsR0FBRyxFQUFFO3FCQUMxRDtpQkFDSixDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQztRQUVPLHNEQUF5QixHQUFqQyxVQUFrQyxTQUFnQztZQUFsRSxpQkFZQztZQVhHLElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQVE7Z0JBQ3BDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUN2RCxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDeEQsTUFBTSxDQUFDO29CQUNILE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQVc7b0JBQzVELFFBQVEsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVM7b0JBQ3ZDLFNBQVMsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVM7aUJBQzNDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLGFBQUUsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFYyw2QkFBVSxHQUFHLFVBQUMsS0FBVTtZQUFWLGtDQUFVO1lBQ25DLElBQUksQ0FBQztnQkFDRCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQTBCLFVBQUMsV0FBVyxFQUFFLElBQUk7b0JBQ3RFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEIsSUFBTSxNQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsZUFBSyxJQUFJLFlBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO3dCQUM5RSxXQUFXLENBQUMsTUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QyxDQUFDO29CQUNELE1BQU0sQ0FBQyxXQUFXLENBQUM7Z0JBQ3ZCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNYLENBQUM7WUFBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUViLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFDTCx5QkFBQztLQUFBLENBM01nQyxpQkFBUyxHQTJNekM7SUFFOEIscUNBQU87SUFBMkIsZ0RBQWtCIiwiZmlsZSI6InNyYy9Hb29nbGVNYXBzLndlYm1vZGVsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODdmNjM5YWNjMDQ4NGUxMDhmNzAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTRkMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBbGVydFByb3BzIHtcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBib290c3RyYXBTdHlsZTogXCJkZWZhdWx0XCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJpbmZvXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCI7XG59XG5cbmV4cG9ydCBjb25zdCBBbGVydDogU0ZDPEFsZXJ0UHJvcHM+ID0gKHsgY2xhc3NOYW1lLCBib290c3RyYXBTdHlsZSwgbWVzc2FnZSB9KSA9PlxuICAgIG1lc3NhZ2VcbiAgICAgICAgPyBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGBhbGVydCBhbGVydC0ke2Jvb3RzdHJhcFN0eWxlfWAsIGNsYXNzTmFtZSkgfSwgbWVzc2FnZSlcbiAgICAgICAgOiBudWxsO1xuXG5BbGVydC5kaXNwbGF5TmFtZSA9IFwiQWxlcnRcIjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FsZXJ0LnRzIiwiaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgQ29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0ICogYXMgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IEdvb2dsZU1hcCwgeyBHb29nbGVNYXBMb2FkZXIsIExhdExuZyB9IGZyb20gXCJnb29nbGUtbWFwLXJlYWN0XCI7XG5cbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcIi4vQWxlcnRcIjtcbmltcG9ydCB7IE1hcmtlciwgTWFya2VyUHJvcHMgfSBmcm9tIFwiLi9NYXJrZXJcIjtcblxuaW1wb3J0IFwiLi4vdWkvR29vZ2xlTWFwcy5jc3NcIjtcblxuZXhwb3J0IHR5cGUgd2lkdGhVbml0VHlwZSA9IFwicGVyY2VudGFnZVwiIHwgXCJwaXhlbHNcIjtcbmV4cG9ydCB0eXBlIGhlaWdodFVuaXRUeXBlID0gXCJwZXJjZW50YWdlT2ZXaWR0aFwiIHwgXCJwZXJjZW50YWdlT2ZQYXJlbnRcIiB8IFwicGl4ZWxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb24ge1xuICAgIGFkZHJlc3M/OiBzdHJpbmc7XG4gICAgbGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgbG9uZ2l0dWRlPzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBNYXBQcm9wcyB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIGFwaUtleT86IHN0cmluZztcbiAgICBhdXRvWm9vbTogYm9vbGVhbjtcbiAgICBkZWZhdWx0Q2VudGVyQWRkcmVzczogc3RyaW5nO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIGhlaWdodFVuaXQ6IGhlaWdodFVuaXRUeXBlO1xuICAgIGxvY2F0aW9uczogTG9jYXRpb25bXTtcbiAgICBvcHRpb25EcmFnOiBib29sZWFuO1xuICAgIG9wdGlvbk1hcENvbnRyb2w6IGJvb2xlYW47XG4gICAgb3B0aW9uU2Nyb2xsOiBib29sZWFuO1xuICAgIG9wdGlvblN0cmVldFZpZXc6IGJvb2xlYW47XG4gICAgb3B0aW9uWm9vbUNvbnRyb2w6IGJvb2xlYW47XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICB3aWR0aFVuaXQ6IHdpZHRoVW5pdFR5cGU7XG4gICAgem9vbUxldmVsOiBudW1iZXI7XG4gICAgc3R5bGU6IG9iamVjdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXBTdGF0ZSB7XG4gICAgYWxlcnRNZXNzYWdlPzogc3RyaW5nO1xuICAgIGNlbnRlcj86IExhdExuZztcbiAgICBpc0xvYWRlZD86IGJvb2xlYW47XG4gICAgbG9jYXRpb25zPzogTG9jYXRpb25bXTtcbn1cblxuZXhwb3J0IGNsYXNzIE1hcCBleHRlbmRzIENvbXBvbmVudDxNYXBQcm9wcywgTWFwU3RhdGU+IHtcbiAgICAvLyBMb2NhdGlvbiBvZiBNZW5kaXggTmV0aGVybGFuZHMgb2ZmaWNlXG4gICAgcHJpdmF0ZSBkZWZhdWx0Q2VudGVyTG9jYXRpb246IExhdExuZyA9IHsgbGF0OiA1MS45MTA3OTYzLCBsbmc6IDQuNDc4OTg3OCB9O1xuICAgIHByaXZhdGUgbWFwTG9hZGVyPzogR29vZ2xlTWFwTG9hZGVyO1xuICAgIHByaXZhdGUgYm91bmRzOiBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogTWFwUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjZW50ZXI6IHRoaXMuZGVmYXVsdENlbnRlckxvY2F0aW9uLFxuICAgICAgICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbG9jYXRpb25zOiBwcm9wcy5sb2NhdGlvbnNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVPbkdvb2dsZUFwaUxvYWRlZCA9IHRoaXMuaGFuZGxlT25Hb29nbGVBcGlMb2FkZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJlc2l6ZUlmcmFtZSA9IHRoaXMub25SZXNpemVJZnJhbWUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwid2lkZ2V0LWdvb2dsZS1tYXBzLXdyYXBwZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLmdldFN0eWxlKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndpZGdldC1nb29nbGUtbWFwc1wiIH0sXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudChBbGVydCwge1xuICAgICAgICAgICAgICAgICAgICBib290c3RyYXBTdHlsZTogXCJkYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIndpZGdldC1nb29nbGUtbWFwcy1hbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnN0YXRlLmFsZXJ0TWVzc2FnZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoR29vZ2xlTWFwLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib290c3RyYXBVUkxLZXlzOiB7IGtleTogdGhpcy5wcm9wcy5hcGlLZXkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjogdGhpcy5zdGF0ZS5jZW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Wm9vbTogdGhpcy5wcm9wcy56b29tTGV2ZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkdvb2dsZUFwaUxvYWRlZDogdGhpcy5oYW5kbGVPbkdvb2dsZUFwaUxvYWRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRoaXMucHJvcHMub3B0aW9uRHJhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsc2NyZWVuQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IHRoaXMucHJvcHMub3B0aW9uTWFwQ29udHJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhab29tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5ab29tOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblpvb21PdmVycmlkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldEJvdW5kc09uUmVzaXplOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbHdoZWVsOiB0aGlzLnByb3BzLm9wdGlvblNjcm9sbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogdGhpcy5wcm9wcy5vcHRpb25TdHJlZXRWaWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb21Db250cm9sOiB0aGlzLnByb3BzLm9wdGlvblpvb21Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRCb3VuZHNPblJlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHllc0lXYW50VG9Vc2VHb29nbGVNYXBBcGlJbnRlcm5hbHM6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNYWtlcnMoKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRVcEV2ZW50cygpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBNYXBQcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9jYXRpb25zOiBuZXh0UHJvcHMubG9jYXRpb25zIH0pO1xuICAgICAgICB0aGlzLnJlc29sdmVBZGRyZXNzZXMobmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0SWZyYW1lKCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemVJZnJhbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRVcEV2ZW50cygpIHtcbiAgICAgICAgLy8gQSB3b3JrYXJvdW5kIGZvciBhdHRhY2hpbmcgdGhlIHJlc2l6ZSBldmVudCB0byB0aGUgSWZyYW1lIHdpbmRvdyBiZWNhdXNlIHRoZSBnb29nbGUtbWFwLXJlYWN0XG4gICAgICAgIC8vIGxpYnJhcnkgZG9lcyBub3Qgc3VwcG9ydCBpdC4gVGhpcyBmaXggd2lsbCBiZSBkb25lIGluIHRoZSB3ZWIgbW9kZWxlciBwcmV2aWV3IGNsYXNzIHdoZW4gdGhlXG4gICAgICAgIC8vIGdvb2dsZS1tYXAtcmVhY3QgbGlicmFyeSBzdGFydHMgc3VwcG9ydGluZyBsaXN0ZW5pbmcgdG8gSWZyYW1lIGV2ZW50cy5cbiAgICAgICAgY29uc3QgaUZyYW1lID0gdGhpcy5nZXRJZnJhbWUoKTtcbiAgICAgICAgaWYgKGlGcmFtZSkge1xuICAgICAgICAgICAgaUZyYW1lLmNvbnRlbnRXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplSWZyYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SWZyYW1lKCk6IEhUTUxJRnJhbWVFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0LXBhZ2UtZWRpdG9yLWlmcmFtZVwiKVswXSBhcyBIVE1MSUZyYW1lRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUmVzaXplSWZyYW1lKGV2ZW50OiBDdXN0b21FdmVudCkge1xuICAgICAgICBpZiAodGhpcy5tYXBMb2FkZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ2VudGVyID0gdGhpcy5tYXBMb2FkZXIubWFwLmdldENlbnRlcigpO1xuICAgICAgICAgICAgdGhpcy5tYXBMb2FkZXIubWFwcy5ldmVudC50cmlnZ2VyKHRoaXMubWFwTG9hZGVyLm1hcCwgXCJyZXNpemVcIik7XG4gICAgICAgICAgICB0aGlzLm1hcExvYWRlci5tYXAuc2V0Q2VudGVyKG9yaWdpbmFsQ2VudGVyKTtcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInJlc2l6ZVwiKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFN0eWxlKCk6IG9iamVjdCB7XG4gICAgICAgIGNvbnN0IHN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGhVbml0ID09PSBcInBlcmNlbnRhZ2VcIiA/IGAke3RoaXMucHJvcHMud2lkdGh9JWAgOiBgJHt0aGlzLnByb3BzLndpZHRofXB4YFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5oZWlnaHRVbml0ID09PSBcInBlcmNlbnRhZ2VPZldpZHRoXCIpIHtcbiAgICAgICAgICAgIHN0eWxlLnBhZGRpbmdCb3R0b20gPSBgJHt0aGlzLnByb3BzLmhlaWdodH0lYDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmhlaWdodFVuaXQgPT09IFwicGl4ZWxzXCIpIHtcbiAgICAgICAgICAgIHN0eWxlLnBhZGRpbmdCb3R0b20gPSBgJHt0aGlzLnByb3BzLmhlaWdodH1weGA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5oZWlnaHRVbml0ID09PSBcInBlcmNlbnRhZ2VPZlBhcmVudFwiKSB7XG4gICAgICAgICAgICBzdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnByb3BzLmhlaWdodH0lYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IC4uLnN0eWxlLCAuLi4gdGhpcy5wcm9wcy5zdHlsZSB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlT25Hb29nbGVBcGlMb2FkZWQobWFwTG9hZGVyOiBHb29nbGVNYXBMb2FkZXIpIHtcbiAgICAgICAgdGhpcy5tYXBMb2FkZXIgPSBtYXBMb2FkZXI7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRlZDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5yZXNvbHZlQWRkcmVzc2VzKHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQm91bmRzKHByb3BzOiBNYXBQcm9wcywgbG9jYXRpb246IExvY2F0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcExvYWRlcikge1xuICAgICAgICAgICAgdGhpcy5ib3VuZHMuZXh0ZW5kKG5ldyBnb29nbGUubWFwcy5MYXRMbmcobG9jYXRpb24ubGF0aXR1ZGUgYXMgbnVtYmVyLCBsb2NhdGlvbi5sb25naXR1ZGUgYXMgbnVtYmVyKSk7XG4gICAgICAgICAgICB0aGlzLm1hcExvYWRlci5tYXAuZml0Qm91bmRzKHRoaXMuYm91bmRzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Wm9vbShwcm9wcyk7XG4gICAgICAgICAgICBpZiAoIXByb3BzLmRlZmF1bHRDZW50ZXJBZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNlbnRlcjogeyBsYXQ6IHRoaXMuYm91bmRzLmdldENlbnRlcigpLmxhdCgpLCBsbmc6IHRoaXMuYm91bmRzLmdldENlbnRlcigpLmxuZygpIH0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFpvb20ocHJvcHM6IE1hcFByb3BzKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm1hcExvYWRlcikge1xuICAgICAgICAgICAgbGV0IHpvb20gPSB0aGlzLm1hcExvYWRlci5tYXAuZ2V0Wm9vbSgpO1xuICAgICAgICAgICAgaWYgKHByb3BzLmF1dG9ab29tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdEJvdW5kWm9vbSA9IDY7XG4gICAgICAgICAgICAgICAgaWYgKHpvb20gJiYgKHpvb20gPiBkZWZhdWx0Qm91bmRab29tKSB8fCAhem9vbSkge1xuICAgICAgICAgICAgICAgICAgICB6b29tID0gZGVmYXVsdEJvdW5kWm9vbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHpvb20gPSBwcm9wcy56b29tTGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1hcExvYWRlci5tYXAuc2V0Wm9vbSh6b29tKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVzb2x2ZUFkZHJlc3Nlcyhwcm9wczogTWFwUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMubWFwTG9hZGVyKSB7XG4gICAgICAgICAgICB0aGlzLmJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFpvb20ocHJvcHMpO1xuICAgICAgICBpZiAocHJvcHMubG9jYXRpb25zICYmIHByb3BzLmxvY2F0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHByb3BzLmxvY2F0aW9ucy5mb3JFYWNoKGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRMb2NhdGlvbihsb2NhdGlvbikgJiYgbG9jYXRpb24uYWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldExvY2F0aW9uKGxvY2F0aW9uLmFkZHJlc3MsIGxvY2F0aW9uTG9va3VwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbkxvb2t1cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmxhdGl0dWRlID0gTnVtYmVyKGxvY2F0aW9uTG9va3VwLmxhdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ubG9uZ2l0dWRlID0gTnVtYmVyKGxvY2F0aW9uTG9va3VwLmxuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uczogcHJvcHMubG9jYXRpb25zIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQm91bmRzKHByb3BzLCBsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy52YWxpZExvY2F0aW9uKGxvY2F0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJvdW5kcyhwcm9wcywgbG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5kZWZhdWx0Q2VudGVyQWRkcmVzcykge1xuICAgICAgICAgICAgdGhpcy5nZXRMb2NhdGlvbihwcm9wcy5kZWZhdWx0Q2VudGVyQWRkcmVzcywgbG9jYXRpb24gPT5cbiAgICAgICAgICAgICAgICBsb2NhdGlvbiA/IHRoaXMuc2V0U3RhdGUoeyBjZW50ZXI6IGxvY2F0aW9uIH0pIDogdGhpcy5zZXRTdGF0ZSh7IGNlbnRlcjogdGhpcy5kZWZhdWx0Q2VudGVyTG9jYXRpb24gfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWxpZExvY2F0aW9uKGxvY2F0aW9uOiBMb2NhdGlvbik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB7IGxhdGl0dWRlOiBsYXQsIGxvbmdpdHVkZTogbG5nIH0gPSBsb2NhdGlvbjtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBsYXQgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGxuZyA9PT0gXCJudW1iZXJcIlxuICAgICAgICAgICAgJiYgbGF0IDw9IDkwICYmIGxhdCA+PSAtOTBcbiAgICAgICAgICAgICYmIGxuZyA8PSAxODAgJiYgbG5nID49IC0xODBcbiAgICAgICAgICAgICYmICEobGF0ID09PSAwICYmIGxuZyA9PT0gMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMb2NhdGlvbihhZGRyZXNzOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzdWx0PzogTGF0TG5nKSA9PiB2b2lkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzTG9hZGVkKSB7XG4gICAgICAgICAgICBjb25zdCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICAgICAgICAgICAgZ2VvY29kZXIuZ2VvY29kZSh7IGFkZHJlc3MgfSwgKHJlc3VsdHMsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGVydE1lc3NhZ2U6IFwiXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogcmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogcmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT1ZFUl9RVUVSWV9MSU1JVCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxlcnRNZXNzYWdlOiBgR29vZ2xlIGZyZWUgcXVvdGEgcmVxdWVzdCBleGNlZWRlZC5gIH0pO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGVydE1lc3NhZ2U6IGBDYW4gbm90IGZpbmQgYWRkcmVzcyAke2FkZHJlc3N9YCB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZU1ha2VycygpOiBBcnJheTxSZWFjdEVsZW1lbnQ8TWFya2VyUHJvcHM+PiB7XG4gICAgICAgIGNvbnN0IG1hcmtlckVsZW1lbnRzOiBBcnJheTxSZWFjdEVsZW1lbnQ8TWFya2VyUHJvcHM+PiA9IFtdO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2NhdGlvbnMgJiYgdGhpcy5zdGF0ZS5sb2NhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxvY2F0aW9ucy5tYXAoKGxvY2F0aW9uT2JqZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gbG9jYXRpb25PYmplY3Q7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRMb2NhdGlvbihsb2NhdGlvbk9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyRWxlbWVudHMucHVzaChjcmVhdGVFbGVtZW50KE1hcmtlciwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogbGF0aXR1ZGUgYXMgbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBsb25naXR1ZGUgYXMgbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFya2VyRWxlbWVudHM7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWFwLnRzIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAdHlwZWNoZWNrc1xuICogXG4gKi9cblxuLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgaWYgKHggPT09IHkpIHtcbiAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgIC8vIEFkZGVkIHRoZSBub256ZXJvIHkgY2hlY2sgdG8gbWFrZSBGbG93IGhhcHB5LCBidXQgaXQgaXMgcmVkdW5kYW50XG4gICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5cbi8qKlxuICogUGVyZm9ybXMgZXF1YWxpdHkgYnkgaXRlcmF0aW5nIHRocm91Z2gga2V5cyBvbiBhbiBvYmplY3QgYW5kIHJldHVybmluZyBmYWxzZVxuICogd2hlbiBhbnkga2V5IGhhcyB2YWx1ZXMgd2hpY2ggYXJlIG5vdCBzdHJpY3RseSBlcXVhbCBiZXR3ZWVuIHRoZSBhcmd1bWVudHMuXG4gKiBSZXR1cm5zIHRydWUgd2hlbiB0aGUgdmFsdWVzIG9mIGFsbCBrZXlzIGFyZSBzdHJpY3RseSBlcXVhbC5cbiAqL1xuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGFsbG93RXF1YWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvc2hhbGxvd0VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnZmJqcy9saWIvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfb21pdCA9IHJlcXVpcmUoJy4vdXRpbHMvb21pdCcpO1xuXG52YXIgX29taXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb21pdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cblxudmFyIG1haW5TdHlsZSA9IHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIGxlZnQ6IDAsXG4gIHRvcDogMCxcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nOiAwLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xufTtcblxudmFyIHN0eWxlID0ge1xuICB3aWR0aDogMCxcbiAgaGVpZ2h0OiAwLFxuICBsZWZ0OiAwLFxuICB0b3A6IDAsXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbn07XG5cbnZhciBHb29nbGVNYXBNYXJrZXJzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEdvb2dsZU1hcE1hcmtlcnMsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdvb2dsZU1hcE1hcmtlcnMocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR29vZ2xlTWFwTWFya2Vycyk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoR29vZ2xlTWFwTWFya2Vycy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdvb2dsZU1hcE1hcmtlcnMpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5fZ2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaGlsZHJlbjogX3RoaXMucHJvcHMuZGlzcGF0Y2hlci5nZXRDaGlsZHJlbigpLFxuICAgICAgICB1cGRhdGVDb3VudGVyOiBfdGhpcy5wcm9wcy5kaXNwYXRjaGVyLmdldFVwZGF0ZUNvdW50ZXIoKVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uQ2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuZGltZXNpb25zQ2FjaGVfKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZDaGlsZENvdW50ID0gKF90aGlzLnN0YXRlLmNoaWxkcmVuIHx8IFtdKS5sZW5ndGg7XG4gICAgICB2YXIgc3RhdGUgPSBfdGhpcy5fZ2V0U3RhdGUoKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoc3RhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChzdGF0ZS5jaGlsZHJlbiB8fCBbXSkubGVuZ3RoICE9PSBwcmV2Q2hpbGRDb3VudCAmJiBfdGhpcy5fb25Nb3VzZUNoYW5nZUhhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25DaGlsZENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hpbGRDbGljaykge1xuICAgICAgICBpZiAoX3RoaXMuaG92ZXJDaGlsZFByb3BzXykge1xuICAgICAgICAgIHZhciBob3ZlcktleSA9IF90aGlzLmhvdmVyS2V5XztcbiAgICAgICAgICB2YXIgY2hpbGRQcm9wcyA9IF90aGlzLmhvdmVyQ2hpbGRQcm9wc187XG4gICAgICAgICAgLy8gY2xpY2sgd29ya3Mgb25seSBvbiBob3ZlcmVkIGl0ZW1cbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNoaWxkQ2xpY2soaG92ZXJLZXksIGNoaWxkUHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoaWxkTW91c2VEb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hpbGRNb3VzZURvd24pIHtcbiAgICAgICAgaWYgKF90aGlzLmhvdmVyQ2hpbGRQcm9wc18pIHtcbiAgICAgICAgICB2YXIgaG92ZXJLZXkgPSBfdGhpcy5ob3ZlcktleV87XG4gICAgICAgICAgdmFyIGNoaWxkUHJvcHMgPSBfdGhpcy5ob3ZlckNoaWxkUHJvcHNfO1xuICAgICAgICAgIC8vIHdvcmtzIG9ubHkgb24gaG92ZXJlZCBpdGVtXG4gICAgICAgICAgX3RoaXMucHJvcHMub25DaGlsZE1vdXNlRG93bihob3ZlcktleSwgY2hpbGRQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX29uQ2hpbGRNb3VzZUVudGVyID0gZnVuY3Rpb24gKGhvdmVyS2V5LCBjaGlsZFByb3BzKSB7XG4gICAgICBpZiAoIV90aGlzLmRpbWVzaW9uc0NhY2hlXykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VFbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VFbnRlcihob3ZlcktleSwgY2hpbGRQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmhvdmVyQ2hpbGRQcm9wc18gPSBjaGlsZFByb3BzO1xuICAgICAgX3RoaXMuaG92ZXJLZXlfID0gaG92ZXJLZXk7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyS2V5OiBob3ZlcktleSB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uQ2hpbGRNb3VzZUxlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5kaW1lc2lvbnNDYWNoZV8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaG92ZXJLZXkgPSBfdGhpcy5ob3ZlcktleV87XG4gICAgICB2YXIgY2hpbGRQcm9wcyA9IF90aGlzLmhvdmVyQ2hpbGRQcm9wc187XG5cbiAgICAgIGlmIChob3ZlcktleSAhPT0gdW5kZWZpbmVkICYmIGhvdmVyS2V5ICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VMZWF2ZSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hpbGRNb3VzZUxlYXZlKGhvdmVyS2V5LCBjaGlsZFByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmhvdmVyS2V5XyA9IG51bGw7XG4gICAgICAgIF90aGlzLmhvdmVyQ2hpbGRQcm9wc18gPSBudWxsO1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyS2V5OiBudWxsIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25Nb3VzZUFsbG93ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIF90aGlzLl9vbkNoaWxkTW91c2VMZWF2ZSgpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5hbGxvd01vdXNlXyA9IHZhbHVlO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25Nb3VzZUNoYW5nZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuYWxsb3dNb3VzZV8pIHtcbiAgICAgICAgX3RoaXMuX29uTW91c2VDaGFuZ2VIYW5kbGVyUmFmKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9vbk1vdXNlQ2hhbmdlSGFuZGxlclJhZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuZGltZXNpb25zQ2FjaGVfKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG1wID0gX3RoaXMucHJvcHMuZGlzcGF0Y2hlci5nZXRNb3VzZVBvc2l0aW9uKCk7XG5cbiAgICAgIGlmIChtcCkge1xuICAgICAgICB2YXIgZGlzdGFuY2VzID0gW107XG4gICAgICAgIHZhciBob3ZlckRpc3RhbmNlID0gX3RoaXMucHJvcHMuZ2V0SG92ZXJEaXN0YW5jZSgpO1xuXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKF90aGlzLnN0YXRlLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGNoaWxkSW5kZXgpIHtcbiAgICAgICAgICBpZiAoIWNoaWxkKSByZXR1cm47XG4gICAgICAgICAgLy8gbGF5ZXJzXG4gICAgICAgICAgaWYgKGNoaWxkLnByb3BzLmxhdExuZyA9PT0gdW5kZWZpbmVkICYmIGNoaWxkLnByb3BzLmxhdCA9PT0gdW5kZWZpbmVkICYmIGNoaWxkLnByb3BzLmxuZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGNoaWxkS2V5ID0gY2hpbGQua2V5ICE9PSB1bmRlZmluZWQgJiYgY2hpbGQua2V5ICE9PSBudWxsID8gY2hpbGQua2V5IDogY2hpbGRJbmRleDtcbiAgICAgICAgICB2YXIgZGlzdCA9IF90aGlzLnByb3BzLmRpc3RhbmNlVG9Nb3VzZShfdGhpcy5kaW1lc2lvbnNDYWNoZV9bY2hpbGRLZXldLCBtcCwgY2hpbGQucHJvcHMpO1xuICAgICAgICAgIGlmIChkaXN0IDwgaG92ZXJEaXN0YW5jZSkge1xuICAgICAgICAgICAgZGlzdGFuY2VzLnB1c2goe1xuICAgICAgICAgICAgICBrZXk6IGNoaWxkS2V5LFxuICAgICAgICAgICAgICBkaXN0OiBkaXN0LFxuICAgICAgICAgICAgICBwcm9wczogY2hpbGQucHJvcHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGRpc3RhbmNlcy5sZW5ndGgpIHtcbiAgICAgICAgICBkaXN0YW5jZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEuZGlzdCAtIGIuZGlzdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgaG92ZXJLZXkgPSBkaXN0YW5jZXNbMF0ua2V5O1xuICAgICAgICAgIHZhciBjaGlsZFByb3BzID0gZGlzdGFuY2VzWzBdLnByb3BzO1xuXG4gICAgICAgICAgaWYgKF90aGlzLmhvdmVyS2V5XyAhPT0gaG92ZXJLZXkpIHtcbiAgICAgICAgICAgIF90aGlzLl9vbkNoaWxkTW91c2VMZWF2ZSgpO1xuXG4gICAgICAgICAgICBfdGhpcy5fb25DaGlsZE1vdXNlRW50ZXIoaG92ZXJLZXksIGNoaWxkUHJvcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5fb25DaGlsZE1vdXNlTGVhdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuX29uQ2hpbGRNb3VzZUxlYXZlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9nZXREaW1lbnNpb25zID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIGNoaWxkS2V5ID0ga2V5O1xuICAgICAgcmV0dXJuIF90aGlzLmRpbWVzaW9uc0NhY2hlX1tjaGlsZEtleV07XG4gICAgfTtcblxuICAgIF90aGlzLnByb3BzLmRpc3BhdGNoZXIub24oJ2tPTl9DSEFOR0UnLCBfdGhpcy5fb25DaGFuZ2VIYW5kbGVyKTtcbiAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaGVyLm9uKCdrT05fTU9VU0VfUE9TSVRJT05fQ0hBTkdFJywgX3RoaXMuX29uTW91c2VDaGFuZ2VIYW5kbGVyKTtcbiAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaGVyLm9uKCdrT05fQ0xJQ0snLCBfdGhpcy5fb25DaGlsZENsaWNrKTtcbiAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaGVyLm9uKCdrT05fTURPV04nLCBfdGhpcy5fb25DaGlsZE1vdXNlRG93bik7XG5cbiAgICBfdGhpcy5kaW1lc2lvbnNDYWNoZV8gPSB7fTtcbiAgICBfdGhpcy5ob3ZlcktleV8gPSBudWxsO1xuICAgIF90aGlzLmhvdmVyQ2hpbGRQcm9wc18gPSBudWxsO1xuICAgIF90aGlzLmFsbG93TW91c2VfID0gdHJ1ZTtcblxuICAgIF90aGlzLnN0YXRlID0gX2V4dGVuZHMoe30sIF90aGlzLl9nZXRTdGF0ZSgpLCB7IGhvdmVyS2V5OiBudWxsIH0pO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHb29nbGVNYXBNYXJrZXJzLCBbe1xuICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZXhwZXJpbWVudGFsID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSgoMCwgX29taXQyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIFsnaG92ZXJLZXknXSksICgwLCBfb21pdDIuZGVmYXVsdCkobmV4dFN0YXRlLCBbJ2hvdmVyS2V5J10pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hlci5yZW1vdmVMaXN0ZW5lcigna09OX0NIQU5HRScsIHRoaXMuX29uQ2hhbmdlSGFuZGxlcik7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoZXIucmVtb3ZlTGlzdGVuZXIoJ2tPTl9NT1VTRV9QT1NJVElPTl9DSEFOR0UnLCB0aGlzLl9vbk1vdXNlQ2hhbmdlSGFuZGxlcik7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoZXIucmVtb3ZlTGlzdGVuZXIoJ2tPTl9DTElDSycsIHRoaXMuX29uQ2hpbGRDbGljayk7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoZXIucmVtb3ZlTGlzdGVuZXIoJ2tPTl9NRE9XTicsIHRoaXMuX29uQ2hpbGRNb3VzZURvd24pO1xuXG4gICAgICB0aGlzLmRpbWVzaW9uc0NhY2hlXyA9IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBtYWluRWxlbWVudFN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZSB8fCBtYWluU3R5bGU7XG4gICAgICB0aGlzLmRpbWVzaW9uc0NhY2hlXyA9IHt9O1xuXG4gICAgICB2YXIgbWFya2VycyA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5tYXAodGhpcy5zdGF0ZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBjaGlsZEluZGV4KSB7XG4gICAgICAgIGlmICghY2hpbGQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcy5sYXRMbmcgPT09IHVuZGVmaW5lZCAmJiBjaGlsZC5wcm9wcy5sYXQgPT09IHVuZGVmaW5lZCAmJiBjaGlsZC5wcm9wcy5sbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICAkZ2VvU2VydmljZTogX3RoaXMyLnByb3BzLmdlb1NlcnZpY2UsXG4gICAgICAgICAgICAkb25Nb3VzZUFsbG93OiBfdGhpczIuX29uTW91c2VBbGxvdyxcbiAgICAgICAgICAgICRwcmVyZW5kZXI6IF90aGlzMi5wcm9wcy5wcmVyZW5kZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsYXRMbmcgPSBjaGlsZC5wcm9wcy5sYXRMbmcgIT09IHVuZGVmaW5lZCA/IGNoaWxkLnByb3BzLmxhdExuZyA6IHsgbGF0OiBjaGlsZC5wcm9wcy5sYXQsIGxuZzogY2hpbGQucHJvcHMubG5nIH07XG5cbiAgICAgICAgdmFyIHB0ID0gX3RoaXMyLnByb3BzLmdlb1NlcnZpY2UucHJvamVjdChsYXRMbmcsIF90aGlzMi5wcm9wcy5wcm9qZWN0RnJvbUxlZnRUb3ApO1xuXG4gICAgICAgIHZhciBzdHlsZVB0UG9zID0ge1xuICAgICAgICAgIGxlZnQ6IHB0LngsXG4gICAgICAgICAgdG9wOiBwdC55XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGR4ID0gMDtcbiAgICAgICAgdmFyIGR5ID0gMDtcblxuICAgICAgICBpZiAoIV90aGlzMi5wcm9wcy5wcm9qZWN0RnJvbUxlZnRUb3ApIHtcbiAgICAgICAgICAvLyBjZW50ZXIgcHJvamVjdGlvblxuICAgICAgICAgIGlmIChfdGhpczIucHJvcHMuZ2VvU2VydmljZS5oYXNTaXplKCkpIHtcbiAgICAgICAgICAgIGR4ID0gX3RoaXMyLnByb3BzLmdlb1NlcnZpY2UuZ2V0V2lkdGgoKSAvIDI7XG4gICAgICAgICAgICBkeSA9IF90aGlzMi5wcm9wcy5nZW9TZXJ2aWNlLmdldEhlaWdodCgpIC8gMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0byBwcmV2ZW50IHJlcmVuZGVyIG9uIGNoaWxkIGVsZW1lbnQgaSBuZWVkIHRvIHBhc3NcbiAgICAgICAgLy8gY29uc3QgcGFyYW1zICRnZXREaW1lbnNpb25zIGFuZCAkZGltZW5zaW9uS2V5IGluc3RlYWQgb2YgZGltZW5zaW9uIG9iamVjdFxuICAgICAgICB2YXIgY2hpbGRLZXkgPSBjaGlsZC5rZXkgIT09IHVuZGVmaW5lZCAmJiBjaGlsZC5rZXkgIT09IG51bGwgPyBjaGlsZC5rZXkgOiBjaGlsZEluZGV4O1xuXG4gICAgICAgIF90aGlzMi5kaW1lc2lvbnNDYWNoZV9bY2hpbGRLZXldID0gX2V4dGVuZHMoe1xuICAgICAgICAgIHg6IHB0LnggKyBkeCxcbiAgICAgICAgICB5OiBwdC55ICsgZHlcbiAgICAgICAgfSwgbGF0TG5nKTtcblxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBjaGlsZEtleSxcbiAgICAgICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgc3R5bGUsIHN0eWxlUHRQb3MpLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjaGlsZC5wcm9wcy4kbWFya2VySG9sZGVyQ2xhc3NOYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICAkaG92ZXI6IGNoaWxkS2V5ID09PSBfdGhpczIuc3RhdGUuaG92ZXJLZXksXG4gICAgICAgICAgICAkZ2V0RGltZW5zaW9uczogX3RoaXMyLl9nZXREaW1lbnNpb25zLFxuICAgICAgICAgICAgJGRpbWVuc2lvbktleTogY2hpbGRLZXksXG4gICAgICAgICAgICAkZ2VvU2VydmljZTogX3RoaXMyLnByb3BzLmdlb1NlcnZpY2UsXG4gICAgICAgICAgICAkb25Nb3VzZUFsbG93OiBfdGhpczIuX29uTW91c2VBbGxvdyxcbiAgICAgICAgICAgICRwcmVyZW5kZXI6IF90aGlzMi5wcm9wcy5wcmVyZW5kZXJcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IG1haW5FbGVtZW50U3R5bGUgfSxcbiAgICAgICAgbWFya2Vyc1xuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR29vZ2xlTWFwTWFya2Vycztcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkdvb2dsZU1hcE1hcmtlcnMucHJvcFR5cGVzID0ge1xuICBnZW9TZXJ2aWNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICBkaXN0YW5jZVRvTW91c2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgZGlzcGF0Y2hlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIG9uQ2hpbGRDbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoaWxkTW91c2VEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hpbGRNb3VzZUxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hpbGRNb3VzZUVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGdldEhvdmVyRGlzdGFuY2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgcHJvamVjdEZyb21MZWZ0VG9wOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHByZXJlbmRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sXG59O1xuR29vZ2xlTWFwTWFya2Vycy5kZWZhdWx0UHJvcHMgPSB7XG4gIHByb2plY3RGcm9tTGVmdFRvcDogZmFsc2UsXG4gIHByZXJlbmRlcjogZmFsc2Vcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBHb29nbGVNYXBNYXJrZXJzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL2dvb2dsZV9tYXBfbWFya2Vycy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FjZGxpdGUvcmVjb21wb3NlL2Jsb2IvbWFzdGVyL3NyYy9wYWNrYWdlcy9yZWNvbXBvc2UvdXRpbHMvb21pdC5qc1xudmFyIG9taXQgPSBmdW5jdGlvbiBvbWl0KG9iaiwga2V5cykge1xuICB2YXIgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIFtdKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5IGluIHJlc3QpIHtcbiAgICAgIGRlbGV0ZSByZXN0W2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN0O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gb21pdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9vbWl0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnQ7XG5cbmZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG59XG5cblBvaW50LnByb3RvdHlwZSA9IHtcbiAgICBjbG9uZTogZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpOyB9LFxuXG4gICAgYWRkOiAgICAgZnVuY3Rpb24ocCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9hZGQocCk7ICAgICB9LFxuICAgIHN1YjogICAgIGZ1bmN0aW9uKHApIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fc3ViKHApOyAgICAgfSxcbiAgICBtdWx0OiAgICBmdW5jdGlvbihrKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX211bHQoayk7ICAgIH0sXG4gICAgZGl2OiAgICAgZnVuY3Rpb24oaykgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9kaXYoayk7ICAgICB9LFxuICAgIHJvdGF0ZTogIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcm90YXRlKGEpOyAgfSxcbiAgICBtYXRNdWx0OiBmdW5jdGlvbihtKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX21hdE11bHQobSk7IH0sXG4gICAgdW5pdDogICAgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3VuaXQoKTsgfSxcbiAgICBwZXJwOiAgICBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcGVycCgpOyB9LFxuICAgIHJvdW5kOiAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9yb3VuZCgpOyB9LFxuXG4gICAgbWFnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICBlcXVhbHM6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gcC54ICYmXG4gICAgICAgICAgICAgICB0aGlzLnkgPT09IHAueTtcbiAgICB9LFxuXG4gICAgZGlzdDogZnVuY3Rpb24ocCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdFNxcihwKSk7XG4gICAgfSxcblxuICAgIGRpc3RTcXI6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgdmFyIGR4ID0gcC54IC0gdGhpcy54LFxuICAgICAgICAgICAgZHkgPSBwLnkgLSB0aGlzLnk7XG4gICAgICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICB9LFxuXG4gICAgYW5nbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gICAgfSxcblxuICAgIGFuZ2xlVG86IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55IC0gYi55LCB0aGlzLnggLSBiLngpO1xuICAgIH0sXG5cbiAgICBhbmdsZVdpdGg6IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGVXaXRoU2VwKGIueCwgYi55KTtcbiAgICB9LFxuXG4gICAgLy8gRmluZCB0aGUgYW5nbGUgb2YgdGhlIHR3byB2ZWN0b3JzLCBzb2x2aW5nIHRoZSBmb3JtdWxhIGZvciB0aGUgY3Jvc3MgcHJvZHVjdCBhIHggYiA9IHxhfHxifHNpbijOuCkgZm9yIM64LlxuICAgIGFuZ2xlV2l0aFNlcDogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihcbiAgICAgICAgICAgIHRoaXMueCAqIHkgLSB0aGlzLnkgKiB4LFxuICAgICAgICAgICAgdGhpcy54ICogeCArIHRoaXMueSAqIHkpO1xuICAgIH0sXG5cbiAgICBfbWF0TXVsdDogZnVuY3Rpb24obSkge1xuICAgICAgICB2YXIgeCA9IG1bMF0gKiB0aGlzLnggKyBtWzFdICogdGhpcy55LFxuICAgICAgICAgICAgeSA9IG1bMl0gKiB0aGlzLnggKyBtWzNdICogdGhpcy55O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2FkZDogZnVuY3Rpb24ocCkge1xuICAgICAgICB0aGlzLnggKz0gcC54O1xuICAgICAgICB0aGlzLnkgKz0gcC55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3N1YjogZnVuY3Rpb24ocCkge1xuICAgICAgICB0aGlzLnggLT0gcC54O1xuICAgICAgICB0aGlzLnkgLT0gcC55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX211bHQ6IGZ1bmN0aW9uKGspIHtcbiAgICAgICAgdGhpcy54ICo9IGs7XG4gICAgICAgIHRoaXMueSAqPSBrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2RpdjogZnVuY3Rpb24oaykge1xuICAgICAgICB0aGlzLnggLz0gaztcbiAgICAgICAgdGhpcy55IC89IGs7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfdW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX2Rpdih0aGlzLm1hZygpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9wZXJwOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueDtcbiAgICAgICAgdGhpcy54ID0gLXk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfcm90YXRlOiBmdW5jdGlvbihhbmdsZSkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgICAgeCA9IGNvcyAqIHRoaXMueCAtIHNpbiAqIHRoaXMueSxcbiAgICAgICAgICAgIHkgPSBzaW4gKiB0aGlzLnggKyBjb3MgKiB0aGlzLnk7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfcm91bmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxuLy8gY29uc3RydWN0cyBQb2ludCBmcm9tIGFuIGFycmF5IGlmIG5lY2Vzc2FyeVxuUG9pbnQuY29udmVydCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgaWYgKGEgaW5zdGFuY2VvZiBQb2ludCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludChhWzBdLCBhWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcG9pbnQtZ2VvbWV0cnkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF93cmFwMiA9IHJlcXVpcmUoJy4vd3JhcCcpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTGF0TG5nID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMYXRMbmcobGF0LCBsbmcpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGF0TG5nKTtcblxuICAgIGlmIChpc05hTihsYXQpIHx8IGlzTmFOKGxuZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBMYXRMbmcgb2JqZWN0OiAoJyArIGxhdCArICcsICcgKyBsbmcgKyAnKScpO1xuICAgIH1cbiAgICB0aGlzLmxhdCA9ICtsYXQ7XG4gICAgdGhpcy5sbmcgPSArbG5nO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExhdExuZywgW3tcbiAgICBrZXk6ICd3cmFwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd3JhcCgpIHtcbiAgICAgIHJldHVybiBuZXcgTGF0TG5nKHRoaXMubGF0LCAoMCwgX3dyYXAyLndyYXApKHRoaXMubG5nLCAtMTgwLCAxODApKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGF0TG5nO1xufSgpO1xuXG5MYXRMbmcuY29udmVydCA9IGZ1bmN0aW9uIChhKSB7XG4gIGlmIChhIGluc3RhbmNlb2YgTGF0TG5nKSB7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgIHJldHVybiBuZXcgTGF0TG5nKGFbMF0sIGFbMV0pO1xuICB9XG5cbiAgaWYgKCdsbmcnIGluIGEgJiYgJ2xhdCcgaW4gYSkge1xuICAgIHJldHVybiBuZXcgTGF0TG5nKGEubGF0LCBhLmxuZyk7XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExhdExuZztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9saWJfZ2VvL2xhdF9sbmcuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy53cmFwID0gd3JhcDtcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuZnVuY3Rpb24gd3JhcChuLCBtaW4sIG1heCkge1xuICB2YXIgZCA9IG1heCAtIG1pbjtcbiAgcmV0dXJuIG4gPT09IG1heCA/IG4gOiAoKG4gLSBtaW4pICUgZCArIGQpICUgZCArIG1pbjtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9saWJfZ2VvL3dyYXAuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIud2lkZ2V0LWdvb2dsZS1tYXBzLXdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi53aWRnZXQtZ29vZ2xlLW1hcHMtd3JhcHBlciA+IGRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwOyBib3R0b206IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwO1xcbn1cXG5cXG4ud2lkZ2V0LWdvb2dsZS1tYXBzLW1hcmtlcntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBTjF3QUFEZGNCUWlpYmVBQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQWNjU1VSQlZHaUJ0WmxkYkJ4WEZjZC81ODZzdmJOT25NYUo0MTFIeGFsYWtOdW1xRktiVW44a0RSSVNVajVRVlJKRUgxQ3BlQUFKRUFJSlVWNHFFd1JxaEVJYlNBc3ZVVnJ4QUtwTGl1eTZMYlNsVHZ6VmtqcFVEVVJGY3B1R1NMYnpJWnRZdG5lek96T0hCOXZwZWozcm1mM3dYOXFIUGZlZWMvNy91WGZPbkRzalZBa0tNdm53N2haY2R4ZndFTWc5b051QStzVXBNeUNmZ0o0RFR1SGFwNU92OTE4VTBHcmtsMG9Edkhqd29MVnJidUorMytpUGdkMkNiSXJvZWczb0IvblZnSk1jL1ZwM3QxY0pqNHFFVE85cGI4a1lPU3pJVnhYc01zTzRLblRINFltRzNzSC9sc3VsTENFS2NubGY1ejZGWThCbnlrMitQS2hlRkNQZmErb2Q3Q3RudTVVc1JMc3dFKysxZjBzd1J3R25WUDhRcEVYMSswMDdoazVJRjM0cGpxYVV5UW95ZnFiamNjSDhsdXFMQUhCVTVObkpmM1ErVnFwalNTc3l2cmRqcDRpOHdxZVZLQkJaejJNdTU1SnhYVHgvWVpkWVJvamJOblV4bXhyTFdwMlV5SFZQMkx1MVoyQW9LcmZJUWk1OXVhM0JpbGtqQXA4ck5pZmp1bHlienpDZnl4WGQ1Q0tRc0dOc1RzU0oyNnZWQi8wd3E5TGUwamM0SFlWZjVLMFZpMWsvWEUzRVZEckRwWmxaNWxZUkFhQUtjN2tjbDJabW1VcG5WcGtwclRYQ0Q2THlpN1FpRXc4L3VFMWQrNHpBNWhYRWdHdno2UkJTeGRIZ3hObWNjSUtKaUY2cFJYWkVLY3VSYXIrNDFxTUVpQUM0ZnVNRzB5dEZxTUs0UUIvS2gvN0NCV3NWWVk5QU0za1hjRHFkb2NZeWJLaXRYUmxjWlV0YWVSUTRITW94YklKMllTYlBkSjVEdUt0d3pQVjlMdnh2Qmwvek41T2tWZjNEam1hZmZ2RGRzWm44K2U5ODRZNzZ0TVIvSktJL0FlSkxka3VFYmJmVVk1dUFuUzZjUzk0M2VHOVlPUTRWTXJsLzEyMnEva2RCYzY4V2Jpa2xpOUh2OUErZmY2R0w0TVJkWUw3WWR0YzNGZmtkVUxOa2IzRGlOQ1lDSzdxcTc5L1cvT3J3eGRWNFJyalovYllnRWI0cXM5bmM4b3pDSHg4YVB2OThWeEVSQUYzZzd4bzVmd0w0VTc1OU5wc3JXTm1iRUJYYXdsaUdDdkdWTzRQc09jOG42eTNyOHpLZUw3K08wbDRJcVBIbENIQnpPWE9lUjg0TDFtL0V0SWJGREJWaWtHU1FQZXNYTnFzeTFyakJmQlFXYndtZW94K0RqQzM5MThDWWk1R0ZWRGpQRUNpNkxwQ0l2K0xDVDMzK2J4L01oOFZid3U3K2Y4OEJVOHRpQm04dFVBSTU1Q05VaUNDQmwwbWs4TFpSNS96ZGQ4ZkM0aTFoWWE0dXU3dE5rZHFqRUhwV0NiL1poYXRCNXBxVnBmTDJhd2xwQ28yM2lQR05KQVZ1ejdmRnJDSjBoQ3RoOGNLM2x1cFlrRDFtR1N5ejdBbzJxS1VId3VJdHdmYjFvRUxEemYvR0VBdDZqZ0NxRXNnaEh4SEtyM2Nta0lneEpPeUNuU1Q4OU8zMk83ZUhSVHpWMW5xUCtQSkV2czJKMmNFUFJBRFZRQTc1Q0JVeTVjeThEMXdPR3R2bzFCYnU2a2JVdlB4VzIvYjJyb0RZWFdCT3RXMXZWNnlUeUtjdGp3QWI0d0V0eWdJbVUxdlRINFR4ak5RMGp1L3QrTDJJZkRzd3krd2MxMjlrQzgyenFIU0xlaStaV00wWVFDNmIvYXd4NWdEQ0FWaGVoVGJFYTBuV0pZS1RLOCtsK2dhL0c4WXhXdE5vOURncTN3QldaR3VzUzVEMWZOS3VtMjllaCtqamlubk04eFlHakRFMnNuS1ZFakc3V0dzQ3lKeXFmeUlLeDBqbmtXUjg2MWxWZlQxb3pCS2hlWDBkVHRBaGFZRjREVkJUVEVScVhSM1dpbEsrQ05YWEJ1dWEveG1GWStRVDR2ait0bFpSOHk1STRERlhWWm5LM0dBNmt3bDZXQzZEWllTTjhUZ044ZHFBNTlGU1FLNWJsbjMvbHA3KzBJb0ZKWndRVTcwai94SGtOeFRwcFVTRVRVNmNsZzMxTkNZY0hOdkdpQ0NMUHlPQ1l5OXNvNWI2ZWpZNThlSWlRRUdQTnZiMFIyNTVJcjlVRTlCTE9lOXBPMmErRG5KSHNYa3hZMmh3NGpRNGNSVHcvWVZHMEpoaXorMlZVQmhMSU0rVThuNnJwTmRCdC81MVpNcERmczRxYlhvK0JMQ013U3BCQk9DamN1aVdpQzhkbGxDU0VJQ3RtKzBYZ2RPbCtrV0ZxcDY2TVdlOVZLcGZXYTlNTDM5bFo0ZnY2NXZrSFZlcmhMUlI3MHROZlNQRHBUcVd2Q0lBVFQwRFE2cGE4bFdMZ081eVJFQ1pRZ0JjWDd1aWRLVWw0TEpSZmxhdWM5bENibjF0K0dQajY3RnkvUXVoY0t5cGIvQkN1ZjVsQ3hGUXoyU09vRVN1OWNXaFl5bkhPMElGWDYvS0ZnTFEzRHM2cjRZbmlYQ0NXd1dlNzh1VDBqMlNyb1JMUlVJQTV0ejFmeGJsNytYNkMvcld2SzQvV1NtUGlyOGhBa3pzMi9rQStBTWdOZUd6ODZGWk5YUTA5d3k5VnltSGlsY0VJUG5Ld0JsVi9sQ3FueUF2cEhxR1JxdkJvU3BDQk5RWTZ4Y2lURVIyVWliVWRuOVpyYy9UVlJFQ2tPdzlmVUY5amtaMkVIa205WmQzUHFsVy9xb0pBYkFTOXJPZy93cWRLSnl6SE91NWF1YXVxcEF0M2YyenFCd0MzRldtdWFnYzJ0TGRQMXZOM0ZVVkFwQk1wRTZxOG1heGNVWGZHSENTTDFjN2IxWEtieUVtOXJmdlFNM2JRRjNCMEp6NnVydjUxY3JMYlNHcXZpSUF5ZnVHUjRIblY0N0lpZFFEUTJmWEl1ZWFyQWpBMVVkMnB0eXN2ZzlzV1RSZHNXdmszc2FUQTlGTGRBbFlreFVCYUR3NU1LRytQclgwWDBXZldpc1JzSVpDQUdyVlBhNXdGaGl0ZGQzamE1bHJ6VEc1djNQZjVKN09mV3VkNS8rN2QzVTBpYnBUY1FBQUFBQkpSVTVFcmtKZ2dnPT0pO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxlZnQ6IC0yNXB4O1xcbiAgICB0b3A6IC01MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvR29vZ2xlTWFwcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYXAsIE1hcFByb3BzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9NYXBcIjtcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9BbGVydFwiO1xuaW1wb3J0IEdvb2dsZU1hcENvbnRhaW5lciwgeyBHb29nbGVNYXBDb250YWluZXJQcm9wcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvR29vZ2xlTWFwQ29udGFpbmVyXCI7XG5cbmRlY2xhcmUgZnVuY3Rpb24gcmVxdWlyZShuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG50eXBlIFZpc2liaWxpdHlNYXAgPSB7XG4gICAgW1AgaW4ga2V5b2YgR29vZ2xlTWFwQ29udGFpbmVyUHJvcHNdOiBib29sZWFuO1xufTtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW5hbWVcbmV4cG9ydCBjbGFzcyBwcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50PEdvb2dsZU1hcENvbnRhaW5lclByb3BzLCB7fT4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgd2FybmluZ3MgPSBHb29nbGVNYXBDb250YWluZXIudmFsaWRhdGVQcm9wcyh0aGlzLnByb3BzKTtcbiAgICAgICAgbGV0IHJlYWN0RWxlbWVudDogUmVhY3RFbGVtZW50PHt9PjtcbiAgICAgICAgaWYgKCF3YXJuaW5ncykge1xuICAgICAgICAgICAgcmVhY3RFbGVtZW50ID0gY3JlYXRlRWxlbWVudChNYXAsIHByZXZpZXcudHJhbnNmb3JtUHJvcHModGhpcy5wcm9wcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVhY3RFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7fSxcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KEFsZXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcFN0eWxlOiBcImRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwid2lkZ2V0LWdvb2dsZS1tYXBzLWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHdhcm5pbmdzXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudChNYXAsIHByZXZpZXcudHJhbnNmb3JtUHJvcHModGhpcy5wcm9wcykpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHt9LCByZWFjdEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHRyYW5zZm9ybVByb3BzKHByb3BzOiBHb29nbGVNYXBDb250YWluZXJQcm9wcyk6IE1hcFByb3BzIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb25zID0gcHJvcHMuZGF0YVNvdXJjZSA9PT0gXCJzdGF0aWNcIlxuICAgICAgICAgICAgPyBHb29nbGVNYXBDb250YWluZXIucGFyc2VTdGF0aWNMb2NhdGlvbnMocHJvcHMuc3RhdGljTG9jYXRpb25zKVxuICAgICAgICAgICAgOiBbXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFwaUtleTogcHJvcHMuYXBpS2V5LFxuICAgICAgICAgICAgYXV0b1pvb206IHByb3BzLmF1dG9ab29tLFxuICAgICAgICAgICAgZGVmYXVsdENlbnRlckFkZHJlc3M6IHByb3BzLmRlZmF1bHRDZW50ZXJBZGRyZXNzLFxuICAgICAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgICAgICBoZWlnaHRVbml0OiBwcm9wcy5oZWlnaHRVbml0LFxuICAgICAgICAgICAgbG9jYXRpb25zLFxuICAgICAgICAgICAgb3B0aW9uRHJhZzogcHJvcHMub3B0aW9uRHJhZyxcbiAgICAgICAgICAgIG9wdGlvbk1hcENvbnRyb2w6IHByb3BzLm9wdGlvbk1hcENvbnRyb2wsXG4gICAgICAgICAgICBvcHRpb25TY3JvbGw6IHByb3BzLm9wdGlvblNjcm9sbCxcbiAgICAgICAgICAgIG9wdGlvblN0cmVldFZpZXc6IHByb3BzLm9wdGlvblN0cmVldFZpZXcsXG4gICAgICAgICAgICBvcHRpb25ab29tQ29udHJvbDogcHJvcHMub3B0aW9uWm9vbUNvbnRyb2wsXG4gICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgICAgICB3aWR0aFVuaXQ6IHByb3BzLndpZHRoVW5pdCxcbiAgICAgICAgICAgIHpvb21MZXZlbDogcHJvcHMuem9vbUxldmVsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmlzaWJsZVByb3BlcnRpZXModmFsdWVNYXA6IEdvb2dsZU1hcENvbnRhaW5lclByb3BzLCB2aXNpYmlsaXR5TWFwOiBWaXNpYmlsaXR5TWFwKSB7XG4gICAgaWYgKHZhbHVlTWFwLmRhdGFTb3VyY2UgPT09IFwic3RhdGljXCIpIHtcbiAgICAgICAgdmlzaWJpbGl0eU1hcC5hZGRyZXNzQXR0cmlidXRlID0gZmFsc2U7XG4gICAgICAgIHZpc2liaWxpdHlNYXAuZGF0YVNvdXJjZU1pY3JvZmxvdyA9IGZhbHNlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmVudGl0eUNvbnN0cmFpbnQgPSBmYWxzZTtcbiAgICAgICAgdmlzaWJpbGl0eU1hcC5sb2NhdGlvbnNFbnRpdHkgPSBmYWxzZTtcbiAgICAgICAgdmlzaWJpbGl0eU1hcC5sYXRpdHVkZUF0dHJpYnV0ZSA9IGZhbHNlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmxvbmdpdHVkZUF0dHJpYnV0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWVNYXAuZGF0YVNvdXJjZSA9PT0gXCJYUGF0aFwiKSB7XG4gICAgICAgIHZpc2liaWxpdHlNYXAuYWRkcmVzc0F0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgIHZpc2liaWxpdHlNYXAuZGF0YVNvdXJjZU1pY3JvZmxvdyA9IGZhbHNlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmVudGl0eUNvbnN0cmFpbnQgPSB0cnVlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmxvY2F0aW9uc0VudGl0eSA9IHRydWU7XG4gICAgICAgIHZpc2liaWxpdHlNYXAubGF0aXR1ZGVBdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmxvbmdpdHVkZUF0dHJpYnV0ZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZU1hcC5kYXRhU291cmNlID09PSBcImNvbnRleHRcIikge1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmFkZHJlc3NBdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmRhdGFTb3VyY2VNaWNyb2Zsb3cgPSBmYWxzZTtcbiAgICAgICAgdmlzaWJpbGl0eU1hcC5lbnRpdHlDb25zdHJhaW50ID0gZmFsc2U7XG4gICAgICAgIHZpc2liaWxpdHlNYXAubG9jYXRpb25zRW50aXR5ID0gZmFsc2U7XG4gICAgICAgIHZpc2liaWxpdHlNYXAubGF0aXR1ZGVBdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmxvbmdpdHVkZUF0dHJpYnV0ZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZU1hcC5kYXRhU291cmNlID09PSBcIm1pY3JvZmxvd1wiKSB7XG4gICAgICAgIHZpc2liaWxpdHlNYXAuYWRkcmVzc0F0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgIHZpc2liaWxpdHlNYXAuZGF0YVNvdXJjZU1pY3JvZmxvdyA9IHRydWU7XG4gICAgICAgIHZpc2liaWxpdHlNYXAuZW50aXR5Q29uc3RyYWludCA9IGZhbHNlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmxvY2F0aW9uc0VudGl0eSA9IHRydWU7XG4gICAgICAgIHZpc2liaWxpdHlNYXAubGF0aXR1ZGVBdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmxvbmdpdHVkZUF0dHJpYnV0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2liaWxpdHlNYXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmV2aWV3Q3NzKCkge1xuICAgIHJldHVybiByZXF1aXJlKFwiLi91aS9Hb29nbGVNYXBzLmNzc1wiKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Hb29nbGVNYXBzLndlYm1vZGVsZXIudHMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZ29vZ2xlX21hcCA9IHJlcXVpcmUoJy4vZ29vZ2xlX21hcCcpO1xuXG52YXIgX2dvb2dsZV9tYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZ2xlX21hcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9nb29nbGVfbWFwMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnZmJqcy9saWIvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfbWFya2VyX2Rpc3BhdGNoZXIgPSByZXF1aXJlKCcuL21hcmtlcl9kaXNwYXRjaGVyJyk7XG5cbnZhciBfbWFya2VyX2Rpc3BhdGNoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFya2VyX2Rpc3BhdGNoZXIpO1xuXG52YXIgX2dvb2dsZV9tYXBfbWFwID0gcmVxdWlyZSgnLi9nb29nbGVfbWFwX21hcCcpO1xuXG52YXIgX2dvb2dsZV9tYXBfbWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dvb2dsZV9tYXBfbWFwKTtcblxudmFyIF9nb29nbGVfbWFwX21hcmtlcnMgPSByZXF1aXJlKCcuL2dvb2dsZV9tYXBfbWFya2VycycpO1xuXG52YXIgX2dvb2dsZV9tYXBfbWFya2VyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nb29nbGVfbWFwX21hcmtlcnMpO1xuXG52YXIgX2dvb2dsZV9tYXBfbWFya2Vyc19wcmVyZW5kZXIgPSByZXF1aXJlKCcuL2dvb2dsZV9tYXBfbWFya2Vyc19wcmVyZW5kZXInKTtcblxudmFyIF9nb29nbGVfbWFwX21hcmtlcnNfcHJlcmVuZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dvb2dsZV9tYXBfbWFya2Vyc19wcmVyZW5kZXIpO1xuXG52YXIgX2dvb2dsZV9tYXBfbG9hZGVyID0gcmVxdWlyZSgnLi91dGlscy9sb2FkZXJzL2dvb2dsZV9tYXBfbG9hZGVyJyk7XG5cbnZhciBfZ29vZ2xlX21hcF9sb2FkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZ2xlX21hcF9sb2FkZXIpO1xuXG52YXIgX2RldGVjdCA9IHJlcXVpcmUoJy4vdXRpbHMvZGV0ZWN0Jyk7XG5cbnZhciBfZGV0ZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RldGVjdCk7XG5cbnZhciBfZ2VvID0gcmVxdWlyZSgnLi91dGlscy9nZW8nKTtcblxudmFyIF9nZW8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VvKTtcblxudmFyIF9hcnJheV9oZWxwZXIgPSByZXF1aXJlKCcuL3V0aWxzL2FycmF5X2hlbHBlcicpO1xuXG52YXIgX2FycmF5X2hlbHBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcnJheV9oZWxwZXIpO1xuXG52YXIgX2lzX3BsYWluX29iamVjdCA9IHJlcXVpcmUoJy4vdXRpbHMvaXNfcGxhaW5fb2JqZWN0Jyk7XG5cbnZhciBfaXNfcGxhaW5fb2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzX3BsYWluX29iamVjdCk7XG5cbnZhciBfcGljayA9IHJlcXVpcmUoJy4vdXRpbHMvcGljaycpO1xuXG52YXIgX3BpY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGljayk7XG5cbnZhciBfcmFmID0gcmVxdWlyZSgnLi91dGlscy9yYWYnKTtcblxudmFyIF9yYWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFmKTtcblxudmFyIF9sb2cgPSByZXF1aXJlKCcuL3V0aWxzL21hdGgvbG9nMicpO1xuXG52YXIgX2xvZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2cpO1xuXG52YXIgX2lzTnVtYmVyID0gcmVxdWlyZSgnLi91dGlscy9pc051bWJlcicpO1xuXG52YXIgX2lzTnVtYmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzTnVtYmVyKTtcblxudmFyIF9vbWl0ID0gcmVxdWlyZSgnLi91dGlscy9vbWl0Jyk7XG5cbnZhciBfb21pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vbWl0KTtcblxudmFyIF9kZXRlY3RFbGVtZW50UmVzaXplID0gcmVxdWlyZSgnLi91dGlscy9kZXRlY3RFbGVtZW50UmVzaXplJyk7XG5cbnZhciBfZGV0ZWN0RWxlbWVudFJlc2l6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXRlY3RFbGVtZW50UmVzaXplKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzLCByZWFjdC9mb3JiaWQtcHJvcC10eXBlcywgcmVhY3Qvbm8tZmluZC1kb20tbm9kZSwgbm8tY29uc29sZSAqL1xuXG5cbnZhciBrRVBTID0gMC4wMDAwMTtcbnZhciBLX0dPT0dMRV9USUxFX1NJWkUgPSAyNTY7XG4vLyByZWFsIG1pblpvb20gY2FsY3VsYXRlZCBoZXJlIF9nZXRNaW5ab29tXG52YXIgS19JRExFX1RJTUVPVVQgPSAxMDA7XG52YXIgS19JRExFX0NMSUNLX1RJTUVPVVQgPSAzMDA7XG52YXIgREVGQVVMVF9NSU5fWk9PTSA9IDM7XG5cbmZ1bmN0aW9uIGRlZmF1bHRPcHRpb25zXygpIC8qIG1hcHMgKi97XG4gIHJldHVybiB7XG4gICAgb3ZlcnZpZXdNYXBDb250cm9sOiBmYWxzZSxcbiAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgcm90YXRlQ29udHJvbDogdHJ1ZSxcbiAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXG4gICAgLy8gZGlzYWJsZSBwb2lcbiAgICBzdHlsZXM6IFt7XG4gICAgICBmZWF0dXJlVHlwZTogJ3BvaScsXG4gICAgICBlbGVtZW50VHlwZTogJ2xhYmVscycsXG4gICAgICBzdHlsZXJzOiBbeyB2aXNpYmlsaXR5OiAnb2ZmJyB9XVxuICAgIH1dLFxuICAgIG1pblpvb206IERFRkFVTFRfTUlOX1pPT00gfTtcbn1cblxudmFyIGxhdExuZzJPYmogPSBmdW5jdGlvbiBsYXRMbmcyT2JqKGxhdExuZykge1xuICByZXR1cm4gKDAsIF9pc19wbGFpbl9vYmplY3QyLmRlZmF1bHQpKGxhdExuZykgPyBsYXRMbmcgOiB7IGxhdDogbGF0TG5nWzBdLCBsbmc6IGxhdExuZ1sxXSB9O1xufTtcblxudmFyIF9jaGVja01pblpvb20gPSBmdW5jdGlvbiBfY2hlY2tNaW5ab29tKHpvb20sIG1pblpvb20pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoem9vbSA8IG1pblpvb20pIHtcbiAgICAgIGNvbnNvbGUud2FybignR29vZ2xlTWFwOiAnICsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgJ21pblpvb20gb3B0aW9uIGlzIGxlc3MgdGhhbiByZWNvbW1lbmRlZCAnICsgJ21pblpvb20gb3B0aW9uIGZvciB5b3VyIG1hcCBzaXplcy5cXG4nICsgJ292ZXJyaWRlZCB0byB2YWx1ZSAnICsgbWluWm9vbSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1pblpvb20gPCB6b29tKSB7XG4gICAgcmV0dXJuIHpvb207XG4gIH1cbiAgcmV0dXJuIG1pblpvb207XG59O1xuXG52YXIgR29vZ2xlTWFwID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEdvb2dsZU1hcCwgX0NvbXBvbmVudCk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZ1bmN0aW9uIEdvb2dsZU1hcChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHb29nbGVNYXApO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEdvb2dsZU1hcC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdvb2dsZU1hcCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLl9nZXRNaW5ab29tID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmdlb1NlcnZpY2VfLmdldFdpZHRoKCkgPiAwIHx8IF90aGlzLmdlb1NlcnZpY2VfLmdldEhlaWdodCgpID4gMCkge1xuICAgICAgICB2YXIgdGlsZXNQZXJXaWR0aCA9IE1hdGguY2VpbChfdGhpcy5nZW9TZXJ2aWNlXy5nZXRXaWR0aCgpIC8gS19HT09HTEVfVElMRV9TSVpFKSArIDI7XG4gICAgICAgIHZhciB0aWxlc1BlckhlaWdodCA9IE1hdGguY2VpbChfdGhpcy5nZW9TZXJ2aWNlXy5nZXRIZWlnaHQoKSAvIEtfR09PR0xFX1RJTEVfU0laRSkgKyAyO1xuICAgICAgICB2YXIgbWF4VGlsZXNQZXJEaW0gPSBNYXRoLm1heCh0aWxlc1BlcldpZHRoLCB0aWxlc1BlckhlaWdodCk7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoKDAsIF9sb2cyLmRlZmF1bHQpKG1heFRpbGVzUGVyRGltKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gREVGQVVMVF9NSU5fWk9PTTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX2NvbXB1dGVNaW5ab29tID0gZnVuY3Rpb24gKG1pblpvb21PdmVycmlkZSwgbWluWm9vbSkge1xuICAgICAgaWYgKG1pblpvb21PdmVycmlkZSkge1xuICAgICAgICByZXR1cm4gbWluWm9vbSB8fCBERUZBVUxUX01JTl9aT09NO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90aGlzLl9nZXRNaW5ab29tKCk7XG4gICAgfTtcblxuICAgIF90aGlzLl9tYXBEb21SZXNpemVDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnJlc2V0U2l6ZU9uSWRsZV8gPSB0cnVlO1xuICAgICAgaWYgKF90aGlzLm1hcHNfKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbENlbnRlciA9IF90aGlzLm1hcF8uZ2V0Q2VudGVyKCk7XG4gICAgICAgIF90aGlzLm1hcHNfLmV2ZW50LnRyaWdnZXIoX3RoaXMubWFwXywgJ3Jlc2l6ZScpO1xuICAgICAgICBfdGhpcy5tYXBfLnNldENlbnRlcihvcmlnaW5hbENlbnRlcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9zZXRMYXllcnMgPSBmdW5jdGlvbiAobGF5ZXJUeXBlcykge1xuICAgICAgbGF5ZXJUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChsYXllclR5cGUpIHtcbiAgICAgICAgX3RoaXMubGF5ZXJzX1tsYXllclR5cGVdID0gbmV3IF90aGlzLm1hcHNfW2xheWVyVHlwZV0oKTtcbiAgICAgICAgX3RoaXMubGF5ZXJzX1tsYXllclR5cGVdLnNldE1hcChfdGhpcy5tYXBfKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5faW5pdE1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIG9ubHkgaW5pdGlhbGl6ZSB0aGUgbWFwIG9uY2VcbiAgICAgIGlmIChfdGhpcy5pbml0aWFsaXplZF8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgX3RoaXMuaW5pdGlhbGl6ZWRfID0gdHJ1ZTtcblxuICAgICAgdmFyIHByb3BzQ2VudGVyID0gbGF0TG5nMk9iaihfdGhpcy5wcm9wcy5jZW50ZXIgfHwgX3RoaXMucHJvcHMuZGVmYXVsdENlbnRlcik7XG4gICAgICBfdGhpcy5nZW9TZXJ2aWNlXy5zZXRWaWV3KHByb3BzQ2VudGVyLCBfdGhpcy5wcm9wcy56b29tIHx8IF90aGlzLnByb3BzLmRlZmF1bHRab29tLCAwKTtcblxuICAgICAgX3RoaXMuX29uQm91bmRzQ2hhbmdlZCgpOyAvLyBub3cgd2UgY2FuIGNhbGN1bGF0ZSBtYXAgYm91bmRzIGNlbnRlciBldGMuLi5cblxuICAgICAgdmFyIGJvb3RzdHJhcFVSTEtleXMgPSBfZXh0ZW5kcyh7fSwgX3RoaXMucHJvcHMuYXBpS2V5ICYmIHsga2V5OiBfdGhpcy5wcm9wcy5hcGlLZXkgfSwgX3RoaXMucHJvcHMuYm9vdHN0cmFwVVJMS2V5cyk7XG5cbiAgICAgIF90aGlzLnByb3BzLmdvb2dsZU1hcExvYWRlcihib290c3RyYXBVUkxLZXlzKS50aGVuKGZ1bmN0aW9uIChtYXBzKSB7XG4gICAgICAgIGlmICghX3RoaXMubW91bnRlZF8pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2VudGVyTGF0TG5nID0gX3RoaXMuZ2VvU2VydmljZV8uZ2V0Q2VudGVyKCk7XG5cbiAgICAgICAgdmFyIHByb3BzT3B0aW9ucyA9IHtcbiAgICAgICAgICB6b29tOiBfdGhpcy5wcm9wcy56b29tIHx8IF90aGlzLnByb3BzLmRlZmF1bHRab29tLFxuICAgICAgICAgIGNlbnRlcjogbmV3IG1hcHMuTGF0TG5nKGNlbnRlckxhdExuZy5sYXQsIGNlbnRlckxhdExuZy5sbmcpXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gcHJldmVudCB0byBleGFwb3NlIGZ1bGwgYXBpXG4gICAgICAgIC8vIG5leHQgcHJvcHMgbXVzdCBiZSBleHBvc2VkIChjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhwaWNrKG1hcHMsIGlzUGxhaW5PYmplY3QpKSkpXG4gICAgICAgIC8vIFwiQW5pbWF0aW9uXCIsIFwiQ29udHJvbFBvc2l0aW9uXCIsIFwiTWFwVHlwZUNvbnRyb2xTdHlsZVwiLCBcIk1hcFR5cGVJZFwiLFxuICAgICAgICAvLyBcIk5hdmlnYXRpb25Db250cm9sU3R5bGVcIiwgXCJTY2FsZUNvbnRyb2xTdHlsZVwiLCBcIlN0cm9rZVBvc2l0aW9uXCIsXG4gICAgICAgIC8vIFwiU3ltYm9sUGF0aFwiLCBcIlpvb21Db250cm9sU3R5bGVcIixcbiAgICAgICAgLy8gXCJldmVudFwiLCBcIkRpcmVjdGlvbnNTdGF0dXNcIiwgXCJEaXJlY3Rpb25zVHJhdmVsTW9kZVwiLCBcIkRpcmVjdGlvbnNVbml0U3lzdGVtXCIsXG4gICAgICAgIC8vIFwiRGlzdGFuY2VNYXRyaXhTdGF0dXNcIixcbiAgICAgICAgLy8gXCJEaXN0YW5jZU1hdHJpeEVsZW1lbnRTdGF0dXNcIiwgXCJFbGV2YXRpb25TdGF0dXNcIiwgXCJHZW9jb2RlckxvY2F0aW9uVHlwZVwiLFxuICAgICAgICAvLyBcIkdlb2NvZGVyU3RhdHVzXCIsIFwiS21sTGF5ZXJTdGF0dXNcIixcbiAgICAgICAgLy8gXCJNYXhab29tU3RhdHVzXCIsIFwiU3RyZWV0Vmlld1N0YXR1c1wiLCBcIlRyYW5zaXRNb2RlXCIsIFwiVHJhbnNpdFJvdXRlUHJlZmVyZW5jZVwiLFxuICAgICAgICAvLyBcIlRyYXZlbE1vZGVcIiwgXCJVbml0U3lzdGVtXCJcbiAgICAgICAgdmFyIG1hcFBsYWluT2JqZWN0cyA9ICgwLCBfcGljazIuZGVmYXVsdCkobWFwcywgX2lzX3BsYWluX29iamVjdDIuZGVmYXVsdCk7XG4gICAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIF90aGlzLnByb3BzLm9wdGlvbnMgPT09ICdmdW5jdGlvbicgPyBfdGhpcy5wcm9wcy5vcHRpb25zKG1hcFBsYWluT2JqZWN0cykgOiBfdGhpcy5wcm9wcy5vcHRpb25zO1xuICAgICAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9uc18obWFwUGxhaW5PYmplY3RzKTtcblxuICAgICAgICB2YXIgZHJhZ2dhYmxlT3B0aW9ucyA9IF90aGlzLnByb3BzLmRyYWdnYWJsZSAhPT0gdW5kZWZpbmVkICYmIHtcbiAgICAgICAgICBkcmFnZ2FibGU6IF90aGlzLnByb3BzLmRyYWdnYWJsZVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBtaW5ab29tID0gX3RoaXMuX2NvbXB1dGVNaW5ab29tKG9wdGlvbnMubWluWm9vbU92ZXJyaWRlLCBvcHRpb25zLm1pblpvb20pO1xuICAgICAgICBfdGhpcy5taW5ab29tXyA9IG1pblpvb207XG5cbiAgICAgICAgdmFyIHByZU1hcE9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIHtcbiAgICAgICAgICBtaW5ab29tOiBtaW5ab29tXG4gICAgICAgIH0sIG9wdGlvbnMsIHByb3BzT3B0aW9ucyk7XG5cbiAgICAgICAgX3RoaXMuZGVmYXVsdERyYWdnYWJsZU9wdGlvbl8gPSBwcmVNYXBPcHRpb25zLmRyYWdnYWJsZSAhPT0gdW5kZWZpbmVkID8gcHJlTWFwT3B0aW9ucy5kcmFnZ2FibGUgOiBfdGhpcy5kZWZhdWx0RHJhZ2dhYmxlT3B0aW9uXztcblxuICAgICAgICB2YXIgbWFwT3B0aW9ucyA9IF9leHRlbmRzKHt9LCBwcmVNYXBPcHRpb25zLCBkcmFnZ2FibGVPcHRpb25zKTtcblxuICAgICAgICBtYXBPcHRpb25zLm1pblpvb20gPSBfY2hlY2tNaW5ab29tKG1hcE9wdGlvbnMubWluWm9vbSwgbWluWm9vbSk7XG5cbiAgICAgICAgdmFyIG1hcCA9IG5ldyBtYXBzLk1hcChfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMuZ29vZ2xlTWFwRG9tXyksIG1hcE9wdGlvbnMpO1xuXG4gICAgICAgIF90aGlzLm1hcF8gPSBtYXA7XG4gICAgICAgIF90aGlzLm1hcHNfID0gbWFwcztcblxuICAgICAgICBfdGhpcy5fc2V0TGF5ZXJzKF90aGlzLnByb3BzLmxheWVyVHlwZXMpO1xuXG4gICAgICAgIC8vIHJlbmRlciBpbiBvdmVybGF5XG4gICAgICAgIHZhciB0aGlzXyA9IF90aGlzO1xuICAgICAgICB2YXIgb3ZlcmxheSA9IE9iamVjdC5hc3NpZ24obmV3IG1hcHMuT3ZlcmxheVZpZXcoKSwge1xuICAgICAgICAgIG9uQWRkOiBmdW5jdGlvbiBvbkFkZCgpIHtcbiAgICAgICAgICAgIHZhciBLX01BWF9XSURUSCA9IHR5cGVvZiBzY3JlZW4gIT09ICd1bmRlZmluZWQnID8gc2NyZWVuLndpZHRoICsgJ3B4JyA6ICcyMDAwcHgnO1xuICAgICAgICAgICAgdmFyIEtfTUFYX0hFSUdIVCA9IHR5cGVvZiBzY3JlZW4gIT09ICd1bmRlZmluZWQnID8gc2NyZWVuLmhlaWdodCArICdweCcgOiAnMjAwMHB4JztcblxuICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGhpcy5kaXYgPSBkaXY7XG4gICAgICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICBkaXYuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICAgICAgZGl2LnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICAgICAgZGl2LnN0eWxlLndpZHRoID0gS19NQVhfV0lEVEg7IC8vIHByZXZlbnRzIHNvbWUgY2hyb21lIGRyYXcgZGVmZWN0c1xuICAgICAgICAgICAgZGl2LnN0eWxlLmhlaWdodCA9IEtfTUFYX0hFSUdIVDtcblxuICAgICAgICAgICAgdmFyIHBhbmVzID0gdGhpcy5nZXRQYW5lcygpO1xuICAgICAgICAgICAgcGFuZXMub3ZlcmxheU1vdXNlVGFyZ2V0LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgICAgICAgIF9yZWFjdERvbTIuZGVmYXVsdC51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcih0aGlzXywgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2dvb2dsZV9tYXBfbWFya2VyczIuZGVmYXVsdCwge1xuICAgICAgICAgICAgICBleHBlcmltZW50YWw6IHRoaXNfLnByb3BzLmV4cGVyaW1lbnRhbCxcbiAgICAgICAgICAgICAgb25DaGlsZENsaWNrOiB0aGlzXy5fb25DaGlsZENsaWNrLFxuICAgICAgICAgICAgICBvbkNoaWxkTW91c2VEb3duOiB0aGlzXy5fb25DaGlsZE1vdXNlRG93bixcbiAgICAgICAgICAgICAgb25DaGlsZE1vdXNlRW50ZXI6IHRoaXNfLl9vbkNoaWxkTW91c2VFbnRlcixcbiAgICAgICAgICAgICAgb25DaGlsZE1vdXNlTGVhdmU6IHRoaXNfLl9vbkNoaWxkTW91c2VMZWF2ZSxcbiAgICAgICAgICAgICAgZ2VvU2VydmljZTogdGhpc18uZ2VvU2VydmljZV8sXG4gICAgICAgICAgICAgIHByb2plY3RGcm9tTGVmdFRvcDogdHJ1ZSxcbiAgICAgICAgICAgICAgZGlzdGFuY2VUb01vdXNlOiB0aGlzXy5wcm9wcy5kaXN0YW5jZVRvTW91c2UsXG4gICAgICAgICAgICAgIGdldEhvdmVyRGlzdGFuY2U6IHRoaXNfLl9nZXRIb3ZlckRpc3RhbmNlLFxuICAgICAgICAgICAgICBkaXNwYXRjaGVyOiB0aGlzXy5tYXJrZXJzRGlzcGF0Y2hlcl9cbiAgICAgICAgICAgIH0pLCBkaXYsXG4gICAgICAgICAgICAvLyByZW1vdmUgcHJlcmVuZGVyZWQgbWFya2Vyc1xuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpc18uc2V0U3RhdGUoeyBvdmVybGF5Q3JlYXRlZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25SZW1vdmU6IGZ1bmN0aW9uIG9uUmVtb3ZlKCkge1xuICAgICAgICAgICAgX3JlYWN0RG9tMi5kZWZhdWx0LnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5kaXYpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZHJhdzogZnVuY3Rpb24gZHJhdygpIHtcbiAgICAgICAgICAgIHZhciBkaXYgPSBvdmVybGF5LmRpdjtcbiAgICAgICAgICAgIHZhciBvdmVybGF5UHJvamVjdGlvbiA9IG92ZXJsYXkuZ2V0UHJvamVjdGlvbigpO1xuICAgICAgICAgICAgdmFyIGJvdW5kcyA9IG1hcC5nZXRCb3VuZHMoKTtcbiAgICAgICAgICAgIHZhciBuZSA9IGJvdW5kcy5nZXROb3J0aEVhc3QoKTtcbiAgICAgICAgICAgIHZhciBzdyA9IGJvdW5kcy5nZXRTb3V0aFdlc3QoKTtcbiAgICAgICAgICAgIHZhciBwdHggPSBvdmVybGF5UHJvamVjdGlvbi5mcm9tTGF0TG5nVG9EaXZQaXhlbChuZXcgbWFwcy5MYXRMbmcobmUubGF0KCksIHN3LmxuZygpKSk7XG5cbiAgICAgICAgICAgIC8vIG5lZWQgcm91bmQgZm9yIHNhZmFyaSBzdGlsbCBjYW4ndCBmaW5kIHdoYXQgbmVlZCBmb3IgZmlyZWZveFxuICAgICAgICAgICAgdmFyIHB0eFJvdW5kZWQgPSAoMCwgX2RldGVjdDIuZGVmYXVsdCkoKS5pc1NhZmFyaSA/IHsgeDogTWF0aC5yb3VuZChwdHgueCksIHk6IE1hdGgucm91bmQocHR4LnkpIH0gOiB7IHg6IHB0eC54LCB5OiBwdHgueSB9O1xuXG4gICAgICAgICAgICB0aGlzXy51cGRhdGVDb3VudGVyXysrO1xuICAgICAgICAgICAgdGhpc18uX29uQm91bmRzQ2hhbmdlZChtYXAsIG1hcHMsICF0aGlzXy5wcm9wcy5kZWJvdW5jZWQpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXNfLmdvb2dsZUFwaUxvYWRlZENhbGxlZF8pIHtcbiAgICAgICAgICAgICAgdGhpc18uX29uR29vZ2xlQXBpTG9hZGVkKHsgbWFwOiBtYXAsIG1hcHM6IG1hcHMgfSk7XG4gICAgICAgICAgICAgIHRoaXNfLmdvb2dsZUFwaUxvYWRlZENhbGxlZF8gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXYuc3R5bGUubGVmdCA9IHB0eFJvdW5kZWQueCArICdweCc7XG4gICAgICAgICAgICBkaXYuc3R5bGUudG9wID0gcHR4Um91bmRlZC55ICsgJ3B4JztcbiAgICAgICAgICAgIGlmICh0aGlzXy5tYXJrZXJzRGlzcGF0Y2hlcl8pIHtcbiAgICAgICAgICAgICAgdGhpc18ubWFya2Vyc0Rpc3BhdGNoZXJfLmVtaXQoJ2tPTl9DSEFOR0UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLm92ZXJsYXlfID0gb3ZlcmxheTtcblxuICAgICAgICBvdmVybGF5LnNldE1hcChtYXApO1xuXG4gICAgICAgIG1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCAnem9vbV9jaGFuZ2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIHJlY2FsYyBwb3NpdGlvbiBhdCB6b29tIHN0YXJ0XG4gICAgICAgICAgaWYgKHRoaXNfLmdlb1NlcnZpY2VfLmdldFpvb20oKSAhPT0gbWFwLmdldFpvb20oKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzXy56b29tQW5pbWF0aW9uSW5Qcm9ncmVzc18pIHtcbiAgICAgICAgICAgICAgdGhpc18uem9vbUFuaW1hdGlvbkluUHJvZ3Jlc3NfID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpc18uX29uWm9vbUFuaW1hdGlvblN0YXJ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBUSU1FT1VUX1pPT00gPSAzMDA7XG5cbiAgICAgICAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIF90aGlzLnpvb21Db250cm9sQ2xpY2tUaW1lXyA8IFRJTUVPVVRfWk9PTSkge1xuICAgICAgICAgICAgICAvLyB0aGVyZSBpcyBzdHJhbmdlIEdvb2dsZSBNYXAgQXBpIGJlaGF2aW9yIGluIGNocm9tZSB3aGVuIHpvb20gYW5pbWF0aW9uIG9mIG1hcFxuICAgICAgICAgICAgICAvLyBpcyBzdGFydGVkIG9ubHkgb24gc2Vjb25kIHJhZiBjYWxsLCBpZiB3YXMgY2xpY2sgb24gem9vbSBjb250cm9sXG4gICAgICAgICAgICAgIC8vIG9yICstIGtleXMgcHJlc3NlZCwgc28gaSB3YWl0IGZvciB0d28gcmFmcyBiZWZvcmUgY2hhbmdlIHN0YXRlXG5cbiAgICAgICAgICAgICAgLy8gdGhpcyBkb2VzIG5vdCBmdWxseSBwcmV2ZW50IGFuaW1hdGlvbiBqdW1wXG4gICAgICAgICAgICAgIC8vIGJ1dCByZWR1Y2UgaXQncyBvY2N1cmVuY2UgcHJvYmFiaWxpdHlcbiAgICAgICAgICAgICAgKDAsIF9yYWYyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAsIF9yYWYyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXNfLnVwZGF0ZUNvdW50ZXJfKys7XG4gICAgICAgICAgICAgICAgICB0aGlzXy5fb25Cb3VuZHNDaGFuZ2VkKG1hcCwgbWFwcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpc18udXBkYXRlQ291bnRlcl8rKztcbiAgICAgICAgICAgICAgdGhpc18uX29uQm91bmRzQ2hhbmdlZChtYXAsIG1hcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsICdpZGxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChfdGhpcy5yZXNldFNpemVPbklkbGVfKSB7XG4gICAgICAgICAgICBfdGhpcy5fc2V0Vmlld1NpemUoKTtcbiAgICAgICAgICAgIHZhciBjdXJyTWluWm9vbSA9IF90aGlzLl9jb21wdXRlTWluWm9vbShfdGhpcy5wcm9wcy5vcHRpb25zLm1pblpvb21PdmVycmlkZSwgX3RoaXMucHJvcHMub3B0aW9ucy5taW5ab29tKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJNaW5ab29tICE9PSBfdGhpcy5taW5ab29tXykge1xuICAgICAgICAgICAgICBfdGhpcy5taW5ab29tXyA9IGN1cnJNaW5ab29tO1xuICAgICAgICAgICAgICBtYXAuc2V0T3B0aW9ucyh7IG1pblpvb206IGN1cnJNaW5ab29tIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5yZXNldFNpemVPbklkbGVfID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXNfLnpvb21BbmltYXRpb25JblByb2dyZXNzXykge1xuICAgICAgICAgICAgdGhpc18uem9vbUFuaW1hdGlvbkluUHJvZ3Jlc3NfID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzXy5fb25ab29tQW5pbWF0aW9uRW5kKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGRpdiA9IG92ZXJsYXkuZGl2O1xuICAgICAgICAgIHZhciBvdmVybGF5UHJvamVjdGlvbiA9IG92ZXJsYXkuZ2V0UHJvamVjdGlvbigpO1xuICAgICAgICAgIHZhciBib3VuZHMgPSBtYXAuZ2V0Qm91bmRzKCk7XG4gICAgICAgICAgdmFyIG5lID0gYm91bmRzLmdldE5vcnRoRWFzdCgpO1xuICAgICAgICAgIHZhciBzdyA9IGJvdW5kcy5nZXRTb3V0aFdlc3QoKTtcbiAgICAgICAgICB2YXIgcHR4ID0gb3ZlcmxheVByb2plY3Rpb24uZnJvbUxhdExuZ1RvRGl2UGl4ZWwobmV3IG1hcHMuTGF0TG5nKG5lLmxhdCgpLCBzdy5sbmcoKSkpO1xuICAgICAgICAgIC8vIG5lZWQgcm91bmQgZm9yIHNhZmFyaSBzdGlsbCBjYW4ndCBmaW5kIHdoYXQgbmVlZCBmb3IgZmlyZWZveFxuICAgICAgICAgIHZhciBwdHhSb3VuZGVkID0gKDAsIF9kZXRlY3QyLmRlZmF1bHQpKCkuaXNTYWZhcmkgPyB7IHg6IE1hdGgucm91bmQocHR4LngpLCB5OiBNYXRoLnJvdW5kKHB0eC55KSB9IDogeyB4OiBwdHgueCwgeTogcHR4LnkgfTtcblxuICAgICAgICAgIHRoaXNfLnVwZGF0ZUNvdW50ZXJfKys7XG4gICAgICAgICAgdGhpc18uX29uQm91bmRzQ2hhbmdlZChtYXAsIG1hcHMpO1xuXG4gICAgICAgICAgaWYgKF90aGlzLm1vdXNlXykge1xuICAgICAgICAgICAgdmFyIGxhdExuZyA9IF90aGlzLmdlb1NlcnZpY2VfLnVucHJvamVjdChfdGhpcy5tb3VzZV8sIHRydWUpO1xuICAgICAgICAgICAgX3RoaXMubW91c2VfLmxhdCA9IGxhdExuZy5sYXQ7XG4gICAgICAgICAgICBfdGhpcy5tb3VzZV8ubG5nID0gbGF0TG5nLmxuZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy5fb25DaGlsZE1vdXNlTW92ZSgpO1xuXG4gICAgICAgICAgdGhpc18uZHJhZ1RpbWVfID0gMDtcbiAgICAgICAgICBkaXYuc3R5bGUubGVmdCA9IHB0eFJvdW5kZWQueCArICdweCc7XG4gICAgICAgICAgZGl2LnN0eWxlLnRvcCA9IHB0eFJvdW5kZWQueSArICdweCc7XG4gICAgICAgICAgaWYgKHRoaXNfLm1hcmtlcnNEaXNwYXRjaGVyXykge1xuICAgICAgICAgICAgdGhpc18ubWFya2Vyc0Rpc3BhdGNoZXJfLmVtaXQoJ2tPTl9DSEFOR0UnKTtcbiAgICAgICAgICAgIGlmICh0aGlzXy5maXJlTW91c2VFdmVudE9uSWRsZV8pIHtcbiAgICAgICAgICAgICAgdGhpc18ubWFya2Vyc0Rpc3BhdGNoZXJfLmVtaXQoJ2tPTl9NT1VTRV9QT1NJVElPTl9DSEFOR0UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCAnbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIGhhcyBhZHZhbnRhZ2Ugb3ZlciBkaXYgTW91c2VMZWF2ZVxuICAgICAgICAgIHRoaXNfLm1vdXNlSW5NYXBfID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYW4gYWx0ZXJuYXRpdmUgd2F5IHRvIGtub3cgdGhlIG1vdXNlIGlzIGJhY2sgd2l0aGluIHRoZSBtYXBcbiAgICAgICAgLy8gVGhpcyB3b3VsZCBub3QgZmlyZSB3aGVuIGNsaWNraW5nL2ludGVyYWN0aW5nIHdpdGggZ29vZ2xlIG1hcHNcbiAgICAgICAgLy8gb3duIG9uLW1hcCBjb3VudHJvbHMrbWFya2Vycy4gVGhpcyBoYW5kbGVzIGFuIGVkZ2UgY2FzZSBmb3IgdG91Y2ggZGV2aWNlc1xuICAgICAgICAvLyArICdkcmFnZ2FibGU6ZmFsc2UnIGN1c3RvbSBvcHRpb24uIFNlZSAjMzMyIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICAgIG1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpc18ubW91c2VJbk1hcF8gPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBtYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIGhhcyBhZHZhbnRhZ2Ugb3ZlciBkaXYgTW91c2VMZWF2ZVxuICAgICAgICAgIHRoaXNfLm1vdXNlSW5NYXBfID0gZmFsc2U7XG4gICAgICAgICAgdGhpc18ubW91c2VfID0gbnVsbDtcbiAgICAgICAgICB0aGlzXy5tYXJrZXJzRGlzcGF0Y2hlcl8uZW1pdCgna09OX01PVVNFX1BPU0lUSU9OX0NIQU5HRScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ2RyYWcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpc18uZHJhZ1RpbWVfID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgdGhpc18uX29uRHJhZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdXNlciBjaG9vc2luZyBzYXRlbGxpdGUgdnMgcm9hZHMsIGV0Y1xuICAgICAgICBtYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ21hcHR5cGVpZF9jaGFuZ2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXNfLl9vbk1hcFR5cGVJZENoYW5nZShtYXAuZ2V0TWFwVHlwZUlkKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB0aHJvdyBlO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkdvb2dsZUFwaUxvYWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkdvb2dsZUFwaUxvYWRlZCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgX3RoaXMucHJvcHMueWVzSVdhbnRUb1VzZUdvb2dsZU1hcEFwaUludGVybmFscyAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignR29vZ2xlTWFwOiAnICsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICdVc2FnZSBvZiBpbnRlcm5hbCBhcGkgb2JqZWN0cyBpcyBkYW5nZXJvdXMgJyArICdhbmQgY2FuIGNhdXNlIGEgbG90IG9mIGlzc3Vlcy5cXG4nICsgJ1RvIGhpZGUgdGhpcyB3YXJuaW5nIGFkZCB5ZXNJV2FudFRvVXNlR29vZ2xlTWFwQXBpSW50ZXJuYWxzPXt0cnVlfSAnICsgJ3RvIDxHb29nbGVNYXAgaW5zdGFuY2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIChfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzKS5vbkdvb2dsZUFwaUxvYWRlZC5hcHBseShfdGhpcyRwcm9wcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2dldEhvdmVyRGlzdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMuaG92ZXJEaXN0YW5jZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uRHJhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczI7XG5cbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vbkRyYWcgJiYgKF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzKS5vbkRyYWcuYXBwbHkoX3RoaXMkcHJvcHMyLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25NYXBUeXBlSWRDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzO1xuXG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMub25NYXBUeXBlSWRDaGFuZ2UgJiYgKF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzKS5vbk1hcFR5cGVJZENoYW5nZS5hcHBseShfdGhpcyRwcm9wczMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vblpvb21BbmltYXRpb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQ7XG5cbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vblpvb21BbmltYXRpb25TdGFydCAmJiAoX3RoaXMkcHJvcHM0ID0gX3RoaXMucHJvcHMpLm9uWm9vbUFuaW1hdGlvblN0YXJ0LmFwcGx5KF90aGlzJHByb3BzNCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uWm9vbUFuaW1hdGlvbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczU7XG5cbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vblpvb21BbmltYXRpb25FbmQgJiYgKF90aGlzJHByb3BzNSA9IF90aGlzLnByb3BzKS5vblpvb21BbmltYXRpb25FbmQuYXBwbHkoX3RoaXMkcHJvcHM1LCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25DaGlsZENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hpbGRDbGljaykge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM2O1xuXG4gICAgICAgIHJldHVybiAoX3RoaXMkcHJvcHM2ID0gX3RoaXMucHJvcHMpLm9uQ2hpbGRDbGljay5hcHBseShfdGhpcyRwcm9wczYsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25DaGlsZE1vdXNlRG93biA9IGZ1bmN0aW9uIChob3ZlcktleSwgY2hpbGRQcm9wcykge1xuICAgICAgX3RoaXMuY2hpbGRNb3VzZURvd25BcmdzXyA9IFtob3ZlcktleSwgY2hpbGRQcm9wc107XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DaGlsZE1vdXNlRG93bikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VEb3duKGhvdmVyS2V5LCBjaGlsZFByb3BzLCBfZXh0ZW5kcyh7fSwgX3RoaXMubW91c2VfKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoaWxkTW91c2VVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5jaGlsZE1vdXNlRG93bkFyZ3NfKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VVcCkge1xuICAgICAgICAgIHZhciBfdGhpcyRwcm9wczc7XG5cbiAgICAgICAgICAoX3RoaXMkcHJvcHM3ID0gX3RoaXMucHJvcHMpLm9uQ2hpbGRNb3VzZVVwLmFwcGx5KF90aGlzJHByb3BzNywgX3RvQ29uc3VtYWJsZUFycmF5KF90aGlzLmNoaWxkTW91c2VEb3duQXJnc18pLmNvbmNhdChbX2V4dGVuZHMoe30sIF90aGlzLm1vdXNlXyldKSk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuY2hpbGRNb3VzZURvd25BcmdzXyA9IG51bGw7XG4gICAgICAgIF90aGlzLmNoaWxkTW91c2VVcFRpbWVfID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoaWxkTW91c2VNb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmNoaWxkTW91c2VEb3duQXJnc18pIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hpbGRNb3VzZU1vdmUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMkcHJvcHM4O1xuXG4gICAgICAgICAgKF90aGlzJHByb3BzOCA9IF90aGlzLnByb3BzKS5vbkNoaWxkTW91c2VNb3ZlLmFwcGx5KF90aGlzJHByb3BzOCwgX3RvQ29uc3VtYWJsZUFycmF5KF90aGlzLmNoaWxkTW91c2VEb3duQXJnc18pLmNvbmNhdChbX2V4dGVuZHMoe30sIF90aGlzLm1vdXNlXyldKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX29uQ2hpbGRNb3VzZUVudGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hpbGRNb3VzZUVudGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczk7XG5cbiAgICAgICAgcmV0dXJuIChfdGhpcyRwcm9wczkgPSBfdGhpcy5wcm9wcykub25DaGlsZE1vdXNlRW50ZXIuYXBwbHkoX3RoaXMkcHJvcHM5LCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uQ2hpbGRNb3VzZUxlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hpbGRNb3VzZUxlYXZlKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczEwO1xuXG4gICAgICAgIHJldHVybiAoX3RoaXMkcHJvcHMxMCA9IF90aGlzLnByb3BzKS5vbkNoaWxkTW91c2VMZWF2ZS5hcHBseShfdGhpcyRwcm9wczEwLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgX3RoaXMuX3NldFZpZXdTaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5tb3VudGVkXykgcmV0dXJuO1xuXG4gICAgICB2YXIgbWFwRG9tID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzLmdvb2dsZU1hcERvbV8pO1xuICAgICAgX3RoaXMuZ2VvU2VydmljZV8uc2V0Vmlld1NpemUobWFwRG9tLmNsaWVudFdpZHRoLCBtYXBEb20uY2xpZW50SGVpZ2h0KTtcbiAgICAgIF90aGlzLl9vbkJvdW5kc0NoYW5nZWQoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uV2luZG93UmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucmVzZXRTaXplT25JZGxlXyA9IHRydWU7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbk1hcE1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIV90aGlzLm1vdXNlSW5NYXBfKSByZXR1cm47XG5cbiAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdmFyIEtfUkVDQUxDX0NMSUVOVF9SRUNUX01TID0gNTA7XG5cbiAgICAgIGlmIChjdXJyVGltZSAtIF90aGlzLm1vdXNlTW92ZVRpbWVfID4gS19SRUNBTENfQ0xJRU5UX1JFQ1RfTVMpIHtcbiAgICAgICAgX3RoaXMuYm91bmRpbmdSZWN0XyA9IGUuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLm1vdXNlTW92ZVRpbWVfID0gY3VyclRpbWU7XG5cbiAgICAgIHZhciBtb3VzZVBvc1ggPSBlLmNsaWVudFggLSBfdGhpcy5ib3VuZGluZ1JlY3RfLmxlZnQ7XG4gICAgICB2YXIgbW91c2VQb3NZID0gZS5jbGllbnRZIC0gX3RoaXMuYm91bmRpbmdSZWN0Xy50b3A7XG5cbiAgICAgIGlmICghX3RoaXMubW91c2VfKSB7XG4gICAgICAgIF90aGlzLm1vdXNlXyA9IHsgeDogMCwgeTogMCwgbGF0OiAwLCBsbmc6IDAgfTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMubW91c2VfLnggPSBtb3VzZVBvc1g7XG4gICAgICBfdGhpcy5tb3VzZV8ueSA9IG1vdXNlUG9zWTtcblxuICAgICAgdmFyIGxhdExuZyA9IF90aGlzLmdlb1NlcnZpY2VfLnVucHJvamVjdChfdGhpcy5tb3VzZV8sIHRydWUpO1xuICAgICAgX3RoaXMubW91c2VfLmxhdCA9IGxhdExuZy5sYXQ7XG4gICAgICBfdGhpcy5tb3VzZV8ubG5nID0gbGF0TG5nLmxuZztcblxuICAgICAgX3RoaXMuX29uQ2hpbGRNb3VzZU1vdmUoKTtcblxuICAgICAgaWYgKGN1cnJUaW1lIC0gX3RoaXMuZHJhZ1RpbWVfIDwgS19JRExFX1RJTUVPVVQpIHtcbiAgICAgICAgX3RoaXMuZmlyZU1vdXNlRXZlbnRPbklkbGVfID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLm1hcmtlcnNEaXNwYXRjaGVyXy5lbWl0KCdrT05fTU9VU0VfUE9TSVRJT05fQ0hBTkdFJyk7XG4gICAgICAgIF90aGlzLmZpcmVNb3VzZUV2ZW50T25JZGxlXyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczExO1xuXG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMub25DbGljayAmJiAhX3RoaXMuY2hpbGRNb3VzZURvd25BcmdzXyAmJiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIF90aGlzLmNoaWxkTW91c2VVcFRpbWVfID4gS19JRExFX0NMSUNLX1RJTUVPVVQgJiYgX3RoaXMuZHJhZ1RpbWVfID09PSAwICYmIChfdGhpcyRwcm9wczExID0gX3RoaXMucHJvcHMpLm9uQ2xpY2suYXBwbHkoX3RoaXMkcHJvcHMxMSwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uTWFwQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5tYXJrZXJzRGlzcGF0Y2hlcl8pIHtcbiAgICAgICAgLy8gc3VwcG9ydCB0b3VjaCBldmVudHMgYW5kIHJlY2FsY3VsYXRlIG1vdXNlIHBvc2l0aW9uIG9uIGNsaWNrXG4gICAgICAgIF90aGlzLl9vbk1hcE1vdXNlTW92ZShldmVudCk7XG4gICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAoY3VyclRpbWUgLSBfdGhpcy5kcmFnVGltZV8gPiBLX0lETEVfVElNRU9VVCkge1xuICAgICAgICAgIGlmIChfdGhpcy5tb3VzZV8pIHtcbiAgICAgICAgICAgIF90aGlzLl9vbkNsaWNrKF9leHRlbmRzKHt9LCBfdGhpcy5tb3VzZV8sIHtcbiAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMubWFya2Vyc0Rpc3BhdGNoZXJfLmVtaXQoJ2tPTl9DTElDSycsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25NYXBNb3VzZURvd25OYXRpdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMubW91c2VJbk1hcF8pIHJldHVybjtcblxuICAgICAgX3RoaXMuX29uTWFwTW91c2VEb3duKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uTWFwTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMubWFya2Vyc0Rpc3BhdGNoZXJfKSB7XG4gICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAoY3VyclRpbWUgLSBfdGhpcy5kcmFnVGltZV8gPiBLX0lETEVfVElNRU9VVCkge1xuICAgICAgICAgIC8vIEhvdmVyZWQgbWFya2VyIGRldGVjdGVkIGF0IG1vdXNlIG1vdmUgY291bGQgYmUgZGVsZXRlZCBhdCBtb3VzZSBkb3duIHRpbWVcbiAgICAgICAgICAvLyBzbyBpdCB3aWxsIGJlIGdvb2QgdG8gZm9yY2UgaG92ZXJlZCBtYXJrZXIgcmVjYWxjdWxhdGlvblxuICAgICAgICAgIF90aGlzLl9vbk1hcE1vdXNlTW92ZShldmVudCk7XG4gICAgICAgICAgX3RoaXMubWFya2Vyc0Rpc3BhdGNoZXJfLmVtaXQoJ2tPTl9NRE9XTicsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25NYXBNb3VzZURvd25DYXB0dXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCgwLCBfZGV0ZWN0Mi5kZWZhdWx0KSgpLmlzQ2hyb21lKSB7XG4gICAgICAgIC8vIHRvIGZpeCBzdHJhbmdlIHpvb20gaW4gY2hyb21lXG4gICAgICAgIGlmICghX3RoaXMubW91c2VfKSB7XG4gICAgICAgICAgX3RoaXMuem9vbUNvbnRyb2xDbGlja1RpbWVfID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX29uS2V5RG93bkNhcHR1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoKDAsIF9kZXRlY3QyLmRlZmF1bHQpKCkuaXNDaHJvbWUpIHtcbiAgICAgICAgX3RoaXMuem9vbUNvbnRyb2xDbGlja1RpbWVfID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9pc0NlbnRlckRlZmluZWQgPSBmdW5jdGlvbiAoY2VudGVyKSB7XG4gICAgICByZXR1cm4gY2VudGVyICYmICgoMCwgX2lzX3BsYWluX29iamVjdDIuZGVmYXVsdCkoY2VudGVyKSAmJiAoMCwgX2lzTnVtYmVyMi5kZWZhdWx0KShjZW50ZXIubGF0KSAmJiAoMCwgX2lzTnVtYmVyMi5kZWZhdWx0KShjZW50ZXIubG5nKSB8fCBjZW50ZXIubGVuZ3RoID09PSAyICYmICgwLCBfaXNOdW1iZXIyLmRlZmF1bHQpKGNlbnRlclswXSkgJiYgKDAsIF9pc051bWJlcjIuZGVmYXVsdCkoY2VudGVyWzFdKSk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkJvdW5kc0NoYW5nZWQgPSBmdW5jdGlvbiAobWFwLCBtYXBzLCBjYWxsRXh0Qm91bmRzQ2hhbmdlKSB7XG4gICAgICBpZiAobWFwKSB7XG4gICAgICAgIHZhciBnbUMgPSBtYXAuZ2V0Q2VudGVyKCk7XG4gICAgICAgIF90aGlzLmdlb1NlcnZpY2VfLnNldFZpZXcoW2dtQy5sYXQoKSwgZ21DLmxuZygpXSwgbWFwLmdldFpvb20oKSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoX3RoaXMucHJvcHMub25DaGFuZ2UgfHwgX3RoaXMucHJvcHMub25Cb3VuZHNDaGFuZ2UpICYmIF90aGlzLmdlb1NlcnZpY2VfLmNhblByb2plY3QoKSkge1xuICAgICAgICB2YXIgem9vbSA9IF90aGlzLmdlb1NlcnZpY2VfLmdldFpvb20oKTtcbiAgICAgICAgdmFyIGJvdW5kcyA9IF90aGlzLmdlb1NlcnZpY2VfLmdldEJvdW5kcygpO1xuICAgICAgICB2YXIgY2VudGVyTGF0TG5nID0gX3RoaXMuZ2VvU2VydmljZV8uZ2V0Q2VudGVyKCk7XG5cbiAgICAgICAgaWYgKCEoMCwgX2FycmF5X2hlbHBlcjIuZGVmYXVsdCkoYm91bmRzLCBfdGhpcy5wcmV2Qm91bmRzXywga0VQUykpIHtcbiAgICAgICAgICBpZiAoY2FsbEV4dEJvdW5kc0NoYW5nZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciBtYXJnaW5Cb3VuZHMgPSBfdGhpcy5nZW9TZXJ2aWNlXy5nZXRCb3VuZHMoX3RoaXMucHJvcHMubWFyZ2luKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkJvdW5kc0NoYW5nZSkge1xuICAgICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkJvdW5kc0NoYW5nZShfdGhpcy5jZW50ZXJJc09iamVjdF8gPyBfZXh0ZW5kcyh7fSwgY2VudGVyTGF0TG5nKSA6IFtjZW50ZXJMYXRMbmcubGF0LCBjZW50ZXJMYXRMbmcubG5nXSwgem9vbSwgYm91bmRzLCBtYXJnaW5Cb3VuZHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIGNlbnRlcjogX2V4dGVuZHMoe30sIGNlbnRlckxhdExuZyksXG4gICAgICAgICAgICAgICAgem9vbTogem9vbSxcbiAgICAgICAgICAgICAgICBib3VuZHM6IHtcbiAgICAgICAgICAgICAgICAgIG53OiB7XG4gICAgICAgICAgICAgICAgICAgIGxhdDogYm91bmRzWzBdLFxuICAgICAgICAgICAgICAgICAgICBsbmc6IGJvdW5kc1sxXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhdDogYm91bmRzWzJdLFxuICAgICAgICAgICAgICAgICAgICBsbmc6IGJvdW5kc1szXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHN3OiB7XG4gICAgICAgICAgICAgICAgICAgIGxhdDogYm91bmRzWzRdLFxuICAgICAgICAgICAgICAgICAgICBsbmc6IGJvdW5kc1s1XVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG5lOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhdDogYm91bmRzWzZdLFxuICAgICAgICAgICAgICAgICAgICBsbmc6IGJvdW5kc1s3XVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFyZ2luQm91bmRzOiB7XG4gICAgICAgICAgICAgICAgICBudzoge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IG1hcmdpbkJvdW5kc1swXSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBtYXJnaW5Cb3VuZHNbMV1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzZToge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IG1hcmdpbkJvdW5kc1syXSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBtYXJnaW5Cb3VuZHNbM11cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzdzoge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IG1hcmdpbkJvdW5kc1s0XSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBtYXJnaW5Cb3VuZHNbNV1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBuZToge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IG1hcmdpbkJvdW5kc1s2XSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBtYXJnaW5Cb3VuZHNbN11cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2l6ZTogX3RoaXMuZ2VvU2VydmljZV8uaGFzU2l6ZSgpID8ge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IF90aGlzLmdlb1NlcnZpY2VfLmdldFdpZHRoKCksXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IF90aGlzLmdlb1NlcnZpY2VfLmdldEhlaWdodCgpXG4gICAgICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMucHJldkJvdW5kc18gPSBib3VuZHM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9yZWdpc3RlckNoaWxkID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuZ29vZ2xlTWFwRG9tXyA9IHJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMubW91bnRlZF8gPSBmYWxzZTtcbiAgICBfdGhpcy5pbml0aWFsaXplZF8gPSBmYWxzZTtcbiAgICBfdGhpcy5nb29nbGVBcGlMb2FkZWRDYWxsZWRfID0gZmFsc2U7XG5cbiAgICBfdGhpcy5tYXBfID0gbnVsbDtcbiAgICBfdGhpcy5tYXBzXyA9IG51bGw7XG4gICAgX3RoaXMucHJldkJvdW5kc18gPSBudWxsO1xuXG4gICAgX3RoaXMubGF5ZXJzXyA9IHt9O1xuXG4gICAgX3RoaXMubW91c2VfID0gbnVsbDtcbiAgICBfdGhpcy5tb3VzZU1vdmVUaW1lXyA9IDA7XG4gICAgX3RoaXMuYm91bmRpbmdSZWN0XyA9IG51bGw7XG4gICAgX3RoaXMubW91c2VJbk1hcF8gPSB0cnVlO1xuXG4gICAgX3RoaXMuZHJhZ1RpbWVfID0gMDtcbiAgICBfdGhpcy5maXJlTW91c2VFdmVudE9uSWRsZV8gPSBmYWxzZTtcbiAgICBfdGhpcy51cGRhdGVDb3VudGVyXyA9IDA7XG5cbiAgICBfdGhpcy5tYXJrZXJzRGlzcGF0Y2hlcl8gPSBuZXcgX21hcmtlcl9kaXNwYXRjaGVyMi5kZWZhdWx0KF90aGlzKTtcbiAgICBfdGhpcy5nZW9TZXJ2aWNlXyA9IG5ldyBfZ2VvMi5kZWZhdWx0KEtfR09PR0xFX1RJTEVfU0laRSk7XG4gICAgX3RoaXMuY2VudGVySXNPYmplY3RfID0gKDAsIF9pc19wbGFpbl9vYmplY3QyLmRlZmF1bHQpKF90aGlzLnByb3BzLmNlbnRlcik7XG5cbiAgICBfdGhpcy5taW5ab29tXyA9IERFRkFVTFRfTUlOX1pPT007XG4gICAgX3RoaXMuZGVmYXVsdERyYWdnYWJsZU9wdGlvbl8gPSB0cnVlO1xuXG4gICAgX3RoaXMuem9vbUNvbnRyb2xDbGlja1RpbWVfID0gMDtcblxuICAgIF90aGlzLmNoaWxkTW91c2VEb3duQXJnc18gPSBudWxsO1xuICAgIF90aGlzLmNoaWxkTW91c2VVcFRpbWVfID0gMDtcblxuICAgIF90aGlzLmdvb2dsZU1hcERvbV8gPSBudWxsO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5hcGlLZXkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdHb29nbGVNYXA6ICcgKyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgJ2FwaUtleSBpcyBkZXByZWNhdGVkLCB1c2UgJyArICdib290c3RyYXBVUkxLZXlzPXt7a2V5OiBZT1VSX0FQSV9LRVl9fSBpbnN0ZWFkLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Cb3VuZHNDaGFuZ2UpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdHb29nbGVNYXA6ICcgKyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgJ29uQm91bmRzQ2hhbmdlIGlzIGRlcHJlY2F0ZWQsIHVzZSAnICsgJ29uQ2hhbmdlKHtjZW50ZXIsIHpvb20sIGJvdW5kcywgLi4ub3RoZXJ9KSBpbnN0ZWFkLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuY2VudGVyID09PSB1bmRlZmluZWQgJiYgX3RoaXMucHJvcHMuZGVmYXVsdENlbnRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignR29vZ2xlTWFwOiBjZW50ZXIgb3IgZGVmYXVsdENlbnRlciBwcm9wZXJ0eSBtdXN0IGJlIGRlZmluZWQnIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuem9vbSA9PT0gdW5kZWZpbmVkICYmIF90aGlzLnByb3BzLmRlZmF1bHRab29tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdHb29nbGVNYXA6IHpvb20gb3IgZGVmYXVsdFpvb20gcHJvcGVydHkgbXVzdCBiZSBkZWZpbmVkJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoX3RoaXMuX2lzQ2VudGVyRGVmaW5lZChfdGhpcy5wcm9wcy5jZW50ZXIgfHwgX3RoaXMucHJvcHMuZGVmYXVsdENlbnRlcikpIHtcbiAgICAgIHZhciBwcm9wc0NlbnRlciA9IGxhdExuZzJPYmooX3RoaXMucHJvcHMuY2VudGVyIHx8IF90aGlzLnByb3BzLmRlZmF1bHRDZW50ZXIpO1xuICAgICAgX3RoaXMuZ2VvU2VydmljZV8uc2V0Vmlldyhwcm9wc0NlbnRlciwgX3RoaXMucHJvcHMuem9vbSB8fCBfdGhpcy5wcm9wcy5kZWZhdWx0Wm9vbSwgMCk7XG4gICAgfVxuXG4gICAgX3RoaXMuem9vbUFuaW1hdGlvbkluUHJvZ3Jlc3NfID0gZmFsc2U7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG92ZXJsYXlDcmVhdGVkOiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdvb2dsZU1hcCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMubW91bnRlZF8gPSB0cnVlO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uV2luZG93UmVzaXplKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duQ2FwdHVyZSwgdHJ1ZSk7XG4gICAgICB2YXIgbWFwRG9tID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMuZ29vZ2xlTWFwRG9tXyk7XG4gICAgICAvLyBnbWFwIGNhbid0IHByZXZlbnQgbWFwIGRyYWcgaWYgbW91c2Vkb3duIGV2ZW50IGFscmVhZHkgb2NjdXJlZFxuICAgICAgLy8gdGhlIG9ubHkgd29ya2Fyb3VuZCBJIGZpbmQgaXMgcHJldmVudCBtb3VzZWRvd24gbmF0aXZlIGJyb3dzZXIgZXZlbnRcbiAgICAgIF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLmdvb2dsZU1hcERvbV8pLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX29uTWFwTW91c2VEb3duTmF0aXZlLCB0cnVlKTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9vbkNoaWxkTW91c2VVcCwgZmFsc2UpO1xuXG4gICAgICB2YXIgYm9vdHN0cmFwVVJMS2V5cyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLmFwaUtleSAmJiB7IGtleTogdGhpcy5wcm9wcy5hcGlLZXkgfSwgdGhpcy5wcm9wcy5ib290c3RyYXBVUkxLZXlzKTtcblxuICAgICAgdGhpcy5wcm9wcy5nb29nbGVNYXBMb2FkZXIoYm9vdHN0cmFwVVJMS2V5cyk7IC8vIHdlIGNhbiBzdGFydCBsb2FkIGltbWVkaWF0bHlcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHRvIGRldGVjdCBzaXplXG4gICAgICAgIF90aGlzMi5fc2V0Vmlld1NpemUoKTtcbiAgICAgICAgaWYgKF90aGlzMi5faXNDZW50ZXJEZWZpbmVkKF90aGlzMi5wcm9wcy5jZW50ZXIgfHwgX3RoaXMyLnByb3BzLmRlZmF1bHRDZW50ZXIpKSB7XG4gICAgICAgICAgX3RoaXMyLl9pbml0TWFwKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDAsIHRoaXMpO1xuICAgICAgaWYgKHRoaXMucHJvcHMucmVzZXRCb3VuZHNPblJlc2l6ZSkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIF9kZXRlY3RFbGVtZW50UmVzaXplMi5kZWZhdWx0LmFkZFJlc2l6ZUxpc3RlbmVyKG1hcERvbSwgdGhhdC5fbWFwRG9tUmVzaXplQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRDZW50ZXIgIT09IG5leHRQcm9wcy5kZWZhdWx0Q2VudGVyKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdHb29nbGVNYXA6IGRlZmF1bHRDZW50ZXIgcHJvcCBjaGFuZ2VkLiAnICsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgIFwiWW91IGNhbid0IGNoYW5nZSBkZWZhdWx0IHByb3BzLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRab29tICE9PSBuZXh0UHJvcHMuZGVmYXVsdFpvb20pIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0dvb2dsZU1hcDogZGVmYXVsdFpvb20gcHJvcCBjaGFuZ2VkLiAnICsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgIFwiWW91IGNhbid0IGNoYW5nZSBkZWZhdWx0IHByb3BzLlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2lzQ2VudGVyRGVmaW5lZCh0aGlzLnByb3BzLmNlbnRlcikgJiYgdGhpcy5faXNDZW50ZXJEZWZpbmVkKG5leHRQcm9wcy5jZW50ZXIpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuX2luaXRNYXAoKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm1hcF8pIHtcbiAgICAgICAgdmFyIGNlbnRlckxhdExuZyA9IHRoaXMuZ2VvU2VydmljZV8uZ2V0Q2VudGVyKCk7XG4gICAgICAgIGlmICh0aGlzLl9pc0NlbnRlckRlZmluZWQobmV4dFByb3BzLmNlbnRlcikpIHtcbiAgICAgICAgICB2YXIgbmV4dFByb3BzQ2VudGVyID0gbGF0TG5nMk9iaihuZXh0UHJvcHMuY2VudGVyKTtcbiAgICAgICAgICB2YXIgY3VyckNlbnRlciA9IHRoaXMuX2lzQ2VudGVyRGVmaW5lZCh0aGlzLnByb3BzLmNlbnRlcikgPyBsYXRMbmcyT2JqKHRoaXMucHJvcHMuY2VudGVyKSA6IG51bGw7XG5cbiAgICAgICAgICBpZiAoIWN1cnJDZW50ZXIgfHwgTWF0aC5hYnMobmV4dFByb3BzQ2VudGVyLmxhdCAtIGN1cnJDZW50ZXIubGF0KSArIE1hdGguYWJzKG5leHRQcm9wc0NlbnRlci5sbmcgLSBjdXJyQ2VudGVyLmxuZykgPiBrRVBTKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMobmV4dFByb3BzQ2VudGVyLmxhdCAtIGNlbnRlckxhdExuZy5sYXQpICsgTWF0aC5hYnMobmV4dFByb3BzQ2VudGVyLmxuZyAtIGNlbnRlckxhdExuZy5sbmcpID4ga0VQUykge1xuICAgICAgICAgICAgICB0aGlzLm1hcF8ucGFuVG8oe1xuICAgICAgICAgICAgICAgIGxhdDogbmV4dFByb3BzQ2VudGVyLmxhdCxcbiAgICAgICAgICAgICAgICBsbmc6IG5leHRQcm9wc0NlbnRlci5sbmdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRQcm9wcy56b29tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBpZiB6b29tIGNoYWdlZCBieSB1c2VyXG4gICAgICAgICAgaWYgKE1hdGguYWJzKG5leHRQcm9wcy56b29tIC0gdGhpcy5wcm9wcy56b29tKSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubWFwXy5zZXRab29tKG5leHRQcm9wcy56b29tKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kcmFnZ2FibGUgIT09IHVuZGVmaW5lZCAmJiBuZXh0UHJvcHMuZHJhZ2dhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyByZXNldCB0byBkZWZhdWx0XG4gICAgICAgICAgdGhpcy5tYXBfLnNldE9wdGlvbnMoeyBkcmFnZ2FibGU6IHRoaXMuZGVmYXVsdERyYWdnYWJsZU9wdGlvbl8gfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5kcmFnZ2FibGUgIT09IG5leHRQcm9wcy5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAvLyBhbHNvIHByZXZlbnQgdGhpcyBvbiB3aW5kb3cgJ21vdXNlZG93bicgZXZlbnQgdG8gcHJldmVudCBtYXAgbW92ZVxuICAgICAgICAgIHRoaXMubWFwXy5zZXRPcHRpb25zKHsgZHJhZ2dhYmxlOiBuZXh0UHJvcHMuZHJhZ2dhYmxlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXNlIHNoYWxsb3dFcXVhbCB0byB0cnkgYXZvaWQgY2FsbGluZyBtYXAuX3NldE9wdGlvbnMgaWYgb25seSB0aGUgcmVmIGNoYW5nZXNcbiAgICAgICAgaWYgKG5leHRQcm9wcy5vcHRpb25zICE9PSB1bmRlZmluZWQgJiYgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLm9wdGlvbnMsIG5leHRQcm9wcy5vcHRpb25zKSkge1xuICAgICAgICAgIHZhciBtYXBQbGFpbk9iamVjdHMgPSAoMCwgX3BpY2syLmRlZmF1bHQpKHRoaXMubWFwc18sIF9pc19wbGFpbl9vYmplY3QyLmRlZmF1bHQpO1xuICAgICAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIG5leHRQcm9wcy5vcHRpb25zID09PSAnZnVuY3Rpb24nID8gbmV4dFByb3BzLm9wdGlvbnMobWFwUGxhaW5PYmplY3RzKSA6IG5leHRQcm9wcy5vcHRpb25zO1xuICAgICAgICAgIC8vIHJlbW92ZSB6b29tLCBjZW50ZXIgYW5kIGRyYWdnYWJsZSBvcHRpb25zIGFzIHRoZXNlIGFyZSBtYW5hZ2VkIGJ5IGdvb2dsZS1tYXBzLXJlYWN0XG4gICAgICAgICAgb3B0aW9ucyA9ICgwLCBfb21pdDIuZGVmYXVsdCkob3B0aW9ucywgWyd6b29tJywgJ2NlbnRlcicsICdkcmFnZ2FibGUnXSk7XG5cbiAgICAgICAgICBpZiAoJ21pblpvb20nIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBtaW5ab29tID0gdGhpcy5fY29tcHV0ZU1pblpvb20ob3B0aW9ucy5taW5ab29tT3ZlcnJpZGUsIG9wdGlvbnMubWluWm9vbSk7XG4gICAgICAgICAgICBvcHRpb25zLm1pblpvb20gPSBfY2hlY2tNaW5ab29tKG9wdGlvbnMubWluWm9vbSwgbWluWm9vbSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5tYXBfLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dFByb3BzLmxheWVyVHlwZXMgIT09IHRoaXMucHJvcHMubGF5ZXJUeXBlcykge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubGF5ZXJzXykuZm9yRWFjaChmdW5jdGlvbiAobGF5ZXJLZXkpIHtcbiAgICAgICAgICAgIF90aGlzMy5sYXllcnNfW2xheWVyS2V5XS5zZXRNYXAobnVsbCk7XG4gICAgICAgICAgICBkZWxldGUgX3RoaXMzLmxheWVyc19bbGF5ZXJLZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuX3NldExheWVycyhuZXh0UHJvcHMubGF5ZXJUeXBlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgIC8vIGRyYWdnYWJsZSBkb2VzIG5vdCBhZmZlY3QgaW5uZXIgY29tcG9uZW50c1xuICAgICAgcmV0dXJuICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkoKDAsIF9vbWl0Mi5kZWZhdWx0KSh0aGlzLnByb3BzLCBbJ2RyYWdnYWJsZSddKSwgKDAsIF9vbWl0Mi5kZWZhdWx0KShuZXh0UHJvcHMsIFsnZHJhZ2dhYmxlJ10pKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgdGhpcy5tYXJrZXJzRGlzcGF0Y2hlcl8uZW1pdCgna09OX0NIQU5HRScpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5ob3ZlckRpc3RhbmNlICE9PSBwcmV2UHJvcHMuaG92ZXJEaXN0YW5jZSkge1xuICAgICAgICB0aGlzLm1hcmtlcnNEaXNwYXRjaGVyXy5lbWl0KCdrT05fTU9VU0VfUE9TSVRJT05fQ0hBTkdFJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMubW91bnRlZF8gPSBmYWxzZTtcbiAgICAgIHZhciBtYXBEb20gPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5nb29nbGVNYXBEb21fKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbldpbmRvd1Jlc2l6ZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bkNhcHR1cmUpO1xuICAgICAgbWFwRG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX29uTWFwTW91c2VEb3duTmF0aXZlLCB0cnVlKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fb25DaGlsZE1vdXNlVXAsIGZhbHNlKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLnJlc2V0Qm91bmRzT25SZXNpemUpIHtcbiAgICAgICAgX2RldGVjdEVsZW1lbnRSZXNpemUyLmRlZmF1bHQucmVtb3ZlUmVzaXplTGlzdGVuZXIobWFwRG9tLCB0aGlzLl9tYXBEb21SZXNpemVDYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm92ZXJsYXlfKSB7XG4gICAgICAgIC8vIHRoaXMgdHJpZ2dlcnMgb3ZlcmxheV8ub25SZW1vdmUoKSwgd2hpY2ggd2lsbCB1bm1vdW50IHRoZSA8R29vZ2xlTWFwTWFya2Vycy8+XG4gICAgICAgIHRoaXMub3ZlcmxheV8uc2V0TWFwKG51bGwpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5tYXBzXyAmJiB0aGlzLm1hcF8pIHtcbiAgICAgICAgLy8gZml4IGdvb2dsZSwgYXMgb3RoZXJ3aXNlIGxpc3RlbmVycyB3b3JrcyBldmVuIHdpdGhvdXQgbWFwXG4gICAgICAgIHRoaXMubWFwXy5zZXRPcHRpb25zKHsgc2Nyb2xsd2hlZWw6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLm1hcHNfLmV2ZW50LmNsZWFySW5zdGFuY2VMaXN0ZW5lcnModGhpcy5tYXBfKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXBfID0gbnVsbDtcbiAgICAgIHRoaXMubWFwc18gPSBudWxsO1xuICAgICAgdGhpcy5tYXJrZXJzRGlzcGF0Y2hlcl8uZGlzcG9zZSgpO1xuXG4gICAgICB0aGlzLnJlc2V0U2l6ZU9uSWRsZV8gPSBmYWxzZTtcblxuICAgICAgZGVsZXRlIHRoaXMubWFwXztcbiAgICAgIGRlbGV0ZSB0aGlzLm1hcmtlcnNEaXNwYXRjaGVyXztcbiAgICB9XG4gICAgLy8gY2FsYyBtaW5ab29tIGlmIG1hcCBzaXplIGF2YWlsYWJsZVxuICAgIC8vIGl0J3MgYmV0dGVyIHRvIG5vdCBzZXQgbWluWm9vbSBsZXNzIHRoYW4gdGhpcyBjYWxjdWxhdGlvbiBnaXZlc1xuICAgIC8vIG90aGVyd2lzZSB0aGVyZSBpcyBubyBob21lb21vcnBoaXNtIGJldHdlZW4gc2NyZWVuIGNvb3JkaW5hdGVzIGFuZCBtYXBcbiAgICAvLyAob25lIG1hcCBjb29yZGluYXRlIGNhbiBoYXZlIGRpZmZlcmVudCBzY3JlZW4gY29vcmRpbmF0ZXMpXG5cblxuICAgIC8vIHRoaXMgbWV0aG9kIHdvcmtzIG9ubHkgaWYgdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VEb3duIHdhcyBjYWxsZWRcblxuXG4gICAgLy8gdGhpcyBtZXRob2Qgd29ya3Mgb25seSBpZiB0aGlzLnByb3BzLm9uQ2hpbGRNb3VzZURvd24gd2FzIGNhbGxlZFxuXG5cbiAgICAvLyBLX0lETEVfQ0xJQ0tfVElNRU9VVCAtIGxvb2tzIGxpa2UgMzAwIGlzIGVub3VnaFxuXG5cbiAgICAvLyBnbWFwIGNhbid0IHByZXZlbnQgbWFwIGRyYWcgaWYgbW91c2Vkb3duIGV2ZW50IGFscmVhZHkgb2NjdXJlZFxuICAgIC8vIHRoZSBvbmx5IHdvcmthcm91bmQgSSBmaW5kIGlzIHByZXZlbnQgbW91c2Vkb3duIG5hdGl2ZSBicm93c2VyIGV2ZW50XG5cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBtYXBNYXJrZXJQcmVyZW5kZXIgPSAhdGhpcy5zdGF0ZS5vdmVybGF5Q3JlYXRlZCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9nb29nbGVfbWFwX21hcmtlcnNfcHJlcmVuZGVyMi5kZWZhdWx0LCB7XG4gICAgICAgIGV4cGVyaW1lbnRhbDogdGhpcy5wcm9wcy5leHBlcmltZW50YWwsXG4gICAgICAgIG9uQ2hpbGRDbGljazogdGhpcy5fb25DaGlsZENsaWNrLFxuICAgICAgICBvbkNoaWxkTW91c2VEb3duOiB0aGlzLl9vbkNoaWxkTW91c2VEb3duLFxuICAgICAgICBvbkNoaWxkTW91c2VFbnRlcjogdGhpcy5fb25DaGlsZE1vdXNlRW50ZXIsXG4gICAgICAgIG9uQ2hpbGRNb3VzZUxlYXZlOiB0aGlzLl9vbkNoaWxkTW91c2VMZWF2ZSxcbiAgICAgICAgZ2VvU2VydmljZTogdGhpcy5nZW9TZXJ2aWNlXyxcbiAgICAgICAgcHJvamVjdEZyb21MZWZ0VG9wOiBmYWxzZSxcbiAgICAgICAgZGlzdGFuY2VUb01vdXNlOiB0aGlzLnByb3BzLmRpc3RhbmNlVG9Nb3VzZSxcbiAgICAgICAgZ2V0SG92ZXJEaXN0YW5jZTogdGhpcy5fZ2V0SG92ZXJEaXN0YW5jZSxcbiAgICAgICAgZGlzcGF0Y2hlcjogdGhpcy5tYXJrZXJzRGlzcGF0Y2hlcl9cbiAgICAgIH0pIDogbnVsbDtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlLFxuICAgICAgICAgIG9uTW91c2VNb3ZlOiB0aGlzLl9vbk1hcE1vdXNlTW92ZSxcbiAgICAgICAgICBvbk1vdXNlRG93bkNhcHR1cmU6IHRoaXMuX29uTWFwTW91c2VEb3duQ2FwdHVyZSxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLl9vbk1hcENsaWNrXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9nb29nbGVfbWFwX21hcDIuZGVmYXVsdCwgeyByZWdpc3RlckNoaWxkOiB0aGlzLl9yZWdpc3RlckNoaWxkIH0pLFxuICAgICAgICBtYXBNYXJrZXJQcmVyZW5kZXJcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdvb2dsZU1hcDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkdvb2dsZU1hcC5wcm9wVHlwZXMgPSB7XG4gIGFwaUtleTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGJvb3RzdHJhcFVSTEtleXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuXG4gIGRlZmF1bHRDZW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LCBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBsYXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICAgIGxuZzogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbiAgfSldKSxcbiAgY2VudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheSwgX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgbGF0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgICBsbmc6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG4gIH0pXSksXG4gIGRlZmF1bHRab29tOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgem9vbTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG9uQm91bmRzQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DaGlsZENsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hpbGRNb3VzZURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DaGlsZE1vdXNlVXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DaGlsZE1vdXNlTW92ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoaWxkTW91c2VFbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoaWxkTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblpvb21BbmltYXRpb25TdGFydDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblpvb21BbmltYXRpb25FbmQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25EcmFnOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uTWFwVHlwZUlkQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9wdGlvbnM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICBkaXN0YW5jZVRvTW91c2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgaG92ZXJEaXN0YW5jZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGRlYm91bmNlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBtYXJnaW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXksXG4gIGdvb2dsZU1hcExvYWRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIG9uR29vZ2xlQXBpTG9hZGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHllc0lXYW50VG9Vc2VHb29nbGVNYXBBcGlJbnRlcm5hbHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZHJhZ2dhYmxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgcmVzZXRCb3VuZHNPblJlc2l6ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBsYXllclR5cGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcpIH07XG5Hb29nbGVNYXAuZGVmYXVsdFByb3BzID0ge1xuICBkaXN0YW5jZVRvTW91c2U6IGZ1bmN0aW9uIGRpc3RhbmNlVG9Nb3VzZShwdCwgbW91c2VQb3MgLyogLCBtYXJrZXJQcm9wcyAqLykge1xuICAgIHJldHVybiBNYXRoLnNxcnQoKHB0LnggLSBtb3VzZVBvcy54KSAqIChwdC54IC0gbW91c2VQb3MueCkgKyAocHQueSAtIG1vdXNlUG9zLnkpICogKHB0LnkgLSBtb3VzZVBvcy55KSk7XG4gIH0sXG5cbiAgaG92ZXJEaXN0YW5jZTogMzAsXG4gIGRlYm91bmNlZDogdHJ1ZSxcbiAgb3B0aW9uczogZGVmYXVsdE9wdGlvbnNfLFxuICBnb29nbGVNYXBMb2FkZXI6IF9nb29nbGVfbWFwX2xvYWRlcjIuZGVmYXVsdCxcbiAgeWVzSVdhbnRUb1VzZUdvb2dsZU1hcEFwaUludGVybmFsczogZmFsc2UsXG4gIHN0eWxlOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICBsYXllclR5cGVzOiBbXVxufTtcbkdvb2dsZU1hcC5nb29nbGVNYXBMb2FkZXIgPSBfZ29vZ2xlX21hcF9sb2FkZXIyLmRlZmF1bHQ7XG5leHBvcnRzLmRlZmF1bHQgPSBHb29nbGVNYXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvZ29vZ2xlX21hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIGludmFyaWFudChcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG4gICAgICAgICAgICAgIHByb3BGdWxsTmFtZSxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICVzIGF0IGluZGV4ICVzLicsXG4gICAgICAgICAgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpLFxuICAgICAgICAgIGlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAndGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCVzYC4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSk7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb21cIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V2ZW50ZW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50ZW1pdHRlcjMnKTtcblxudmFyIF9ldmVudGVtaXR0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXZlbnRlbWl0dGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTWFya2VyRGlzcGF0Y2hlciA9IGZ1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gIF9pbmhlcml0cyhNYXJrZXJEaXNwYXRjaGVyLCBfRXZlbnRFbWl0dGVyKTtcblxuICBmdW5jdGlvbiBNYXJrZXJEaXNwYXRjaGVyKGdtYXBJbnN0YW5jZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXJrZXJEaXNwYXRjaGVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNYXJrZXJEaXNwYXRjaGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTWFya2VyRGlzcGF0Y2hlcikpLmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMuZ21hcEluc3RhbmNlID0gZ21hcEluc3RhbmNlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXJrZXJEaXNwYXRjaGVyLCBbe1xuICAgIGtleTogJ2dldENoaWxkcmVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRyZW4oKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbWFwSW5zdGFuY2UucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TW91c2VQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1vdXNlUG9zaXRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbWFwSW5zdGFuY2UubW91c2VfO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFVwZGF0ZUNvdW50ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRVcGRhdGVDb3VudGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ21hcEluc3RhbmNlLnVwZGF0ZUNvdW50ZXJfO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rpc3Bvc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgdGhpcy5nbWFwSW5zdGFuY2UgPSBudWxsO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFya2VyRGlzcGF0Y2hlcjtcbn0oX2V2ZW50ZW1pdHRlcjIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1hcmtlckRpc3BhdGNoZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvbWFya2VyX2Rpc3BhdGNoZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8vXG4vLyBXZSBzdG9yZSBvdXIgRUUgb2JqZWN0cyBpbiBhIHBsYWluIG9iamVjdCB3aG9zZSBwcm9wZXJ0aWVzIGFyZSBldmVudCBuYW1lcy5cbi8vIElmIGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBub3Qgc3VwcG9ydGVkIHdlIHByZWZpeCB0aGUgZXZlbnQgbmFtZXMgd2l0aCBhXG4vLyBgfmAgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGJ1aWx0LWluIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBub3Qgb3ZlcnJpZGRlbiBvclxuLy8gdXNlZCBhcyBhbiBhdHRhY2sgdmVjdG9yLlxuLy8gV2UgYWxzbyBhc3N1bWUgdGhhdCBgT2JqZWN0LmNyZWF0ZShudWxsKWAgaXMgYXZhaWxhYmxlIHdoZW4gdGhlIGV2ZW50IG5hbWVcbi8vIGlzIGFuIEVTNiBTeW1ib2wuXG4vL1xudmFyIHByZWZpeCA9IHR5cGVvZiBPYmplY3QuY3JlYXRlICE9PSAnZnVuY3Rpb24nID8gJ34nIDogZmFsc2U7XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUgRXZlbnRFbWl0dGVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEV2ZW50IGhhbmRsZXIgdG8gYmUgY2FsbGVkLlxuICogQHBhcmFtIHtNaXhlZH0gY29udGV4dCBDb250ZXh0IGZvciBmdW5jdGlvbiBleGVjdXRpb24uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvbmNlPWZhbHNlXSBPbmx5IGVtaXQgb25jZVxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBNaW5pbWFsIEV2ZW50RW1pdHRlciBpbnRlcmZhY2UgdGhhdCBpcyBtb2xkZWQgYWdhaW5zdCB0aGUgTm9kZS5qc1xuICogRXZlbnRFbWl0dGVyIGludGVyZmFjZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHsgLyogTm90aGluZyB0byBzZXQgKi8gfVxuXG4vKipcbiAqIEhvbGQgdGhlIGFzc2lnbmVkIEV2ZW50RW1pdHRlcnMgYnkgbmFtZS5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBsaXN0aW5nIHRoZSBldmVudHMgZm9yIHdoaWNoIHRoZSBlbWl0dGVyIGhhcyByZWdpc3RlcmVkXG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50c1xuICAgICwgbmFtZXMgPSBbXVxuICAgICwgbmFtZTtcblxuICBpZiAoIWV2ZW50cykgcmV0dXJuIG5hbWVzO1xuXG4gIGZvciAobmFtZSBpbiBldmVudHMpIHtcbiAgICBpZiAoaGFzLmNhbGwoZXZlbnRzLCBuYW1lKSkgbmFtZXMucHVzaChwcmVmaXggPyBuYW1lLnNsaWNlKDEpIDogbmFtZSk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHJldHVybiBuYW1lcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhldmVudHMpKTtcbiAgfVxuXG4gIHJldHVybiBuYW1lcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGEgbGlzdCBvZiBhc3NpZ25lZCBldmVudCBsaXN0ZW5lcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFRoZSBldmVudHMgdGhhdCBzaG91bGQgYmUgbGlzdGVkLlxuICogQHBhcmFtIHtCb29sZWFufSBleGlzdHMgV2Ugb25seSBuZWVkIHRvIGtub3cgaWYgdGhlcmUgYXJlIGxpc3RlbmVycy5cbiAqIEByZXR1cm5zIHtBcnJheXxCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoZXZlbnQsIGV4aXN0cykge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgYXZhaWxhYmxlID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmIChleGlzdHMpIHJldHVybiAhIWF2YWlsYWJsZTtcbiAgaWYgKCFhdmFpbGFibGUpIHJldHVybiBbXTtcbiAgaWYgKGF2YWlsYWJsZS5mbikgcmV0dXJuIFthdmFpbGFibGUuZm5dO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXZhaWxhYmxlLmxlbmd0aCwgZWUgPSBuZXcgQXJyYXkobCk7IGkgPCBsOyBpKyspIHtcbiAgICBlZVtpXSA9IGF2YWlsYWJsZVtpXS5mbjtcbiAgfVxuXG4gIHJldHVybiBlZTtcbn07XG5cbi8qKlxuICogRW1pdCBhbiBldmVudCB0byBhbGwgcmVnaXN0ZXJlZCBldmVudCBsaXN0ZW5lcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFRoZSBuYW1lIG9mIHRoZSBldmVudC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBJbmRpY2F0aW9uIGlmIHdlJ3ZlIGVtaXR0ZWQgYW4gZXZlbnQuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdXG4gICAgLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBhcmdzXG4gICAgLCBpO1xuXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgbGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgY2FzZSAxOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQpLCB0cnVlO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIpLCB0cnVlO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMpLCB0cnVlO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCwgYTUpLCB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm4uYXBwbHkobGlzdGVuZXJzLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAsIGo7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghYXJncykgZm9yIChqID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaiAtIDFdID0gYXJndW1lbnRzW2pdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpc3RlbmVyc1tpXS5mbi5hcHBseShsaXN0ZW5lcnNbaV0uY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgbmV3IEV2ZW50TGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgTmFtZSBvZiB0aGUgZXZlbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBDYWxsYmFjayBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7TWl4ZWR9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IG9mIHRoZSBmdW5jdGlvbi5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IHRoaXMpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKSB0aGlzLl9ldmVudHMgPSBwcmVmaXggPyB7fSA6IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHRoaXMuX2V2ZW50c1tldnRdID0gbGlzdGVuZXI7XG4gIGVsc2Uge1xuICAgIGlmICghdGhpcy5fZXZlbnRzW2V2dF0uZm4pIHRoaXMuX2V2ZW50c1tldnRdLnB1c2gobGlzdGVuZXIpO1xuICAgIGVsc2UgdGhpcy5fZXZlbnRzW2V2dF0gPSBbXG4gICAgICB0aGlzLl9ldmVudHNbZXZ0XSwgbGlzdGVuZXJcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZCBhbiBFdmVudExpc3RlbmVyIHRoYXQncyBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBOYW1lIG9mIHRoZSBldmVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIENhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtNaXhlZH0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgb2YgdGhlIGZ1bmN0aW9uLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IHRoaXMsIHRydWUpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKSB0aGlzLl9ldmVudHMgPSBwcmVmaXggPyB7fSA6IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHRoaXMuX2V2ZW50c1tldnRdID0gbGlzdGVuZXI7XG4gIGVsc2Uge1xuICAgIGlmICghdGhpcy5fZXZlbnRzW2V2dF0uZm4pIHRoaXMuX2V2ZW50c1tldnRdLnB1c2gobGlzdGVuZXIpO1xuICAgIGVsc2UgdGhpcy5fZXZlbnRzW2V2dF0gPSBbXG4gICAgICB0aGlzLl9ldmVudHNbZXZ0XSwgbGlzdGVuZXJcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFRoZSBldmVudCB3ZSB3YW50IHRvIHJlbW92ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciB0aGF0IHdlIG5lZWQgdG8gZmluZC5cbiAqIEBwYXJhbSB7TWl4ZWR9IGNvbnRleHQgT25seSByZW1vdmUgbGlzdGVuZXJzIG1hdGNoaW5nIHRoaXMgY29udGV4dC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBPbmx5IHJlbW92ZSBvbmNlIGxpc3RlbmVycy5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gdGhpcztcblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF1cbiAgICAsIGV2ZW50cyA9IFtdO1xuXG4gIGlmIChmbikge1xuICAgIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICAgIGlmIChcbiAgICAgICAgICAgbGlzdGVuZXJzLmZuICE9PSBmblxuICAgICAgICB8fCAob25jZSAmJiAhbGlzdGVuZXJzLm9uY2UpXG4gICAgICAgIHx8IChjb250ZXh0ICYmIGxpc3RlbmVycy5jb250ZXh0ICE9PSBjb250ZXh0KVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKGxpc3RlbmVycyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIGxpc3RlbmVyc1tpXS5mbiAhPT0gZm5cbiAgICAgICAgICB8fCAob25jZSAmJiAhbGlzdGVuZXJzW2ldLm9uY2UpXG4gICAgICAgICAgfHwgKGNvbnRleHQgJiYgbGlzdGVuZXJzW2ldLmNvbnRleHQgIT09IGNvbnRleHQpXG4gICAgICAgICkge1xuICAgICAgICAgIGV2ZW50cy5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL1xuICAvLyBSZXNldCB0aGUgYXJyYXksIG9yIHJlbW92ZSBpdCBjb21wbGV0ZWx5IGlmIHdlIGhhdmUgbm8gbW9yZSBsaXN0ZW5lcnMuXG4gIC8vXG4gIGlmIChldmVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fZXZlbnRzW2V2dF0gPSBldmVudHMubGVuZ3RoID09PSAxID8gZXZlbnRzWzBdIDogZXZlbnRzO1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbZXZ0XTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycyBvciBvbmx5IHRoZSBsaXN0ZW5lcnMgZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFRoZSBldmVudCB3YW50IHRvIHJlbW92ZSBhbGwgbGlzdGVuZXJzIGZvci5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gIGlmICghdGhpcy5fZXZlbnRzKSByZXR1cm4gdGhpcztcblxuICBpZiAoZXZlbnQpIGRlbGV0ZSB0aGlzLl9ldmVudHNbcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudF07XG4gIGVsc2UgdGhpcy5fZXZlbnRzID0gcHJlZml4ID8ge30gOiBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEFsaWFzIG1ldGhvZHMgbmFtZXMgYmVjYXVzZSBwZW9wbGUgcm9sbCBsaWtlIHRoYXQuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUub247XG5cbi8vXG4vLyBUaGlzIGZ1bmN0aW9uIGRvZXNuJ3QgYXBwbHkgYW55bW9yZS5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBwcmVmaXguXG4vL1xuRXZlbnRFbWl0dGVyLnByZWZpeGVkID0gcHJlZml4O1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBtb2R1bGUuXG4vL1xuaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgbW9kdWxlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXZlbnRlbWl0dGVyMy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHN0eWxlID0ge1xuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgbGVmdDogMCxcbiAgdG9wOiAwLFxuICBtYXJnaW46IDAsXG4gIHBhZGRpbmc6IDAsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG59O1xuXG52YXIgR29vZ2xlTWFwTWFwID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEdvb2dsZU1hcE1hcCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gR29vZ2xlTWFwTWFwKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHb29nbGVNYXBNYXApO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHb29nbGVNYXBNYXAuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHb29nbGVNYXBNYXApKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHb29nbGVNYXBNYXAsIFt7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBkaXNhYmxlIHJlYWN0IG9uIHRoaXMgZGl2XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHJlZ2lzdGVyQ2hpbGQgPSB0aGlzLnByb3BzLnJlZ2lzdGVyQ2hpbGQ7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyByZWY6IHJlZ2lzdGVyQ2hpbGQsIHN0eWxlOiBzdHlsZSB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR29vZ2xlTWFwTWFwO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gR29vZ2xlTWFwTWFwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL2dvb2dsZV9tYXBfbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgeyBzdHlsZTogc3R5bGUgfSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZ29vZ2xlX21hcF9tYXJrZXJzMi5kZWZhdWx0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgcHJlcmVuZGVyOiB0cnVlIH0pKVxuICApO1xufTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2dvb2dsZV9tYXBfbWFya2VycyA9IHJlcXVpcmUoJy4vZ29vZ2xlX21hcF9tYXJrZXJzJyk7XG5cbnZhciBfZ29vZ2xlX21hcF9tYXJrZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dvb2dsZV9tYXBfbWFya2Vycyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdHlsZSA9IHtcbiAgd2lkdGg6ICc1MCUnLFxuICBoZWlnaHQ6ICc1MCUnLFxuICBsZWZ0OiAnNTAlJyxcbiAgdG9wOiAnNTAlJyxcbiAgLy8gYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nOiAwLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi9nb29nbGVfbWFwX21hcmtlcnNfcHJlcmVuZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnb29nbGVNYXBMb2FkZXI7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG52YXIgJHNjcmlwdF8gPSBudWxsO1xuXG52YXIgbG9hZFByb21pc2VfID0gdm9pZCAwO1xuXG52YXIgcmVzb2x2ZUN1c3RvbVByb21pc2VfID0gdm9pZCAwO1xudmFyIF9jdXN0b21Qcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgcmVzb2x2ZUN1c3RvbVByb21pc2VfID0gcmVzb2x2ZTtcbn0pO1xuXG4vLyBUT0RPIGFkZCBsaWJyYXJpZXMgbGFuZ3VhZ2UgYW5kIG90aGVyIG1hcCBvcHRpb25zXG5mdW5jdGlvbiBnb29nbGVNYXBMb2FkZXIoYm9vdHN0cmFwVVJMS2V5cykge1xuICBpZiAoISRzY3JpcHRfKSB7XG4gICAgJHNjcmlwdF8gPSByZXF1aXJlKCdzY3JpcHRqcycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIH1cblxuICAvLyBjYWxsIGZyb20gb3V0c2lkZSBnb29nbGUtbWFwLXJlYWN0XG4gIC8vIHdpbGwgYmUgYXMgc29vbiBhcyBsb2FkUHJvbWlzZV8gcmVzb2x2ZWRcbiAgaWYgKCFib290c3RyYXBVUkxLZXlzKSB7XG4gICAgcmV0dXJuIF9jdXN0b21Qcm9taXNlO1xuICB9XG5cbiAgaWYgKGxvYWRQcm9taXNlXykge1xuICAgIHJldHVybiBsb2FkUHJvbWlzZV87XG4gIH1cblxuICBsb2FkUHJvbWlzZV8gPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdnb29nbGUgbWFwIGNhbm5vdCBiZSBsb2FkZWQgb3V0c2lkZSBicm93c2VyIGVudicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2luZG93Lmdvb2dsZSAmJiB3aW5kb3cuZ29vZ2xlLm1hcHMpIHtcbiAgICAgIHJlc29sdmUod2luZG93Lmdvb2dsZS5tYXBzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdy5fJF9nb29nbGVfbWFwX2luaXRpYWxpemVfJF8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdnb29nbGUgbWFwIGluaXRpYWxpemF0aW9uIGVycm9yJykpO1xuICAgIH1cblxuICAgIHdpbmRvdy5fJF9nb29nbGVfbWFwX2luaXRpYWxpemVfJF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGUgd2luZG93Ll8kX2dvb2dsZV9tYXBfaW5pdGlhbGl6ZV8kXztcbiAgICAgIHJlc29sdmUod2luZG93Lmdvb2dsZS5tYXBzKTtcbiAgICB9O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhib290c3RyYXBVUkxLZXlzKS5pbmRleE9mKCdjYWxsYmFjaycpID4gLTEpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignXCJjYWxsYmFja1wiIGtleSBpbiBib290c3RyYXBVUkxLZXlzIGlzIG5vdCBhbGxvd2VkLCAnICsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAndXNlIG9uR29vZ2xlQXBpTG9hZGVkIHByb3BlcnR5IGluc3RlYWQnKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcImNhbGxiYWNrXCIga2V5IGluIGJvb3RzdHJhcFVSTEtleXMgaXMgbm90IGFsbG93ZWQsICcgKyAndXNlIG9uR29vZ2xlQXBpTG9hZGVkIHByb3BlcnR5IGluc3RlYWQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhib290c3RyYXBVUkxLZXlzKS5yZWR1Y2UoZnVuY3Rpb24gKHIsIGtleSkge1xuICAgICAgcmV0dXJuIHIgKyAnJicgKyBrZXkgKyAnPScgKyBib290c3RyYXBVUkxLZXlzW2tleV07XG4gICAgfSwgJycpO1xuXG4gICAgJHNjcmlwdF8oJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9jYWxsYmFjaz1fJF9nb29nbGVfbWFwX2luaXRpYWxpemVfJF8nICsgcXVlcnlTdHJpbmcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93Lmdvb2dsZSA9PT0gJ3VuZGVmaW5lZCcgJiYgcmVqZWN0KG5ldyBFcnJvcignZ29vZ2xlIG1hcCBpbml0aWFsaXphdGlvbiBlcnJvciAobm90IGxvYWRlZCknKSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJlc29sdmVDdXN0b21Qcm9taXNlXyhsb2FkUHJvbWlzZV8pO1xuXG4gIHJldHVybiBsb2FkUHJvbWlzZV87XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvbG9hZGVycy9nb29nbGVfbWFwX2xvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gICogJHNjcmlwdC5qcyBKUyBsb2FkZXIgJiBkZXBlbmRlbmN5IG1hbmFnZXJcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vZGVkL3NjcmlwdC5qc1xuICAqIChjKSBEdXN0aW4gRGlheiAyMDE0IHwgTGljZW5zZSBNSVRcbiAgKi9cblxuKGZ1bmN0aW9uIChuYW1lLCBkZWZpbml0aW9uKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKGRlZmluaXRpb24pXG4gIGVsc2UgdGhpc1tuYW1lXSA9IGRlZmluaXRpb24oKVxufSkoJyRzY3JpcHQnLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBkb2MgPSBkb2N1bWVudFxuICAgICwgaGVhZCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdXG4gICAgLCBzID0gJ3N0cmluZydcbiAgICAsIGYgPSBmYWxzZVxuICAgICwgcHVzaCA9ICdwdXNoJ1xuICAgICwgcmVhZHlTdGF0ZSA9ICdyZWFkeVN0YXRlJ1xuICAgICwgb25yZWFkeXN0YXRlY2hhbmdlID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgICAsIGxpc3QgPSB7fVxuICAgICwgaWRzID0ge31cbiAgICAsIGRlbGF5ID0ge31cbiAgICAsIHNjcmlwdHMgPSB7fVxuICAgICwgc2NyaXB0cGF0aFxuICAgICwgdXJsQXJnc1xuXG4gIGZ1bmN0aW9uIGV2ZXJ5KGFyLCBmbikge1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gYXIubGVuZ3RoOyBpIDwgajsgKytpKSBpZiAoIWZuKGFyW2ldKSkgcmV0dXJuIGZcbiAgICByZXR1cm4gMVxuICB9XG4gIGZ1bmN0aW9uIGVhY2goYXIsIGZuKSB7XG4gICAgZXZlcnkoYXIsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuICFmbihlbClcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gJHNjcmlwdChwYXRocywgaWRPckRvbmUsIG9wdERvbmUpIHtcbiAgICBwYXRocyA9IHBhdGhzW3B1c2hdID8gcGF0aHMgOiBbcGF0aHNdXG4gICAgdmFyIGlkT3JEb25lSXNEb25lID0gaWRPckRvbmUgJiYgaWRPckRvbmUuY2FsbFxuICAgICAgLCBkb25lID0gaWRPckRvbmVJc0RvbmUgPyBpZE9yRG9uZSA6IG9wdERvbmVcbiAgICAgICwgaWQgPSBpZE9yRG9uZUlzRG9uZSA/IHBhdGhzLmpvaW4oJycpIDogaWRPckRvbmVcbiAgICAgICwgcXVldWUgPSBwYXRocy5sZW5ndGhcbiAgICBmdW5jdGlvbiBsb29wRm4oaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uY2FsbCA/IGl0ZW0oKSA6IGxpc3RbaXRlbV1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBpZiAoIS0tcXVldWUpIHtcbiAgICAgICAgbGlzdFtpZF0gPSAxXG4gICAgICAgIGRvbmUgJiYgZG9uZSgpXG4gICAgICAgIGZvciAodmFyIGRzZXQgaW4gZGVsYXkpIHtcbiAgICAgICAgICBldmVyeShkc2V0LnNwbGl0KCd8JyksIGxvb3BGbikgJiYgIWVhY2goZGVsYXlbZHNldF0sIGxvb3BGbikgJiYgKGRlbGF5W2RzZXRdID0gW10pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBlYWNoKHBhdGhzLCBmdW5jdGlvbiBsb2FkaW5nKHBhdGgsIGZvcmNlKSB7XG4gICAgICAgIGlmIChwYXRoID09PSBudWxsKSByZXR1cm4gY2FsbGJhY2soKVxuICAgICAgICBcbiAgICAgICAgaWYgKCFmb3JjZSAmJiAhL15odHRwcz86XFwvXFwvLy50ZXN0KHBhdGgpICYmIHNjcmlwdHBhdGgpIHtcbiAgICAgICAgICBwYXRoID0gKHBhdGguaW5kZXhPZignLmpzJykgPT09IC0xKSA/IHNjcmlwdHBhdGggKyBwYXRoICsgJy5qcycgOiBzY3JpcHRwYXRoICsgcGF0aDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHNjcmlwdHNbcGF0aF0pIHtcbiAgICAgICAgICBpZiAoaWQpIGlkc1tpZF0gPSAxXG4gICAgICAgICAgcmV0dXJuIChzY3JpcHRzW3BhdGhdID09IDIpID8gY2FsbGJhY2soKSA6IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBsb2FkaW5nKHBhdGgsIHRydWUpIH0sIDApXG4gICAgICAgIH1cblxuICAgICAgICBzY3JpcHRzW3BhdGhdID0gMVxuICAgICAgICBpZiAoaWQpIGlkc1tpZF0gPSAxXG4gICAgICAgIGNyZWF0ZShwYXRoLCBjYWxsYmFjaylcbiAgICAgIH0pXG4gICAgfSwgMClcbiAgICByZXR1cm4gJHNjcmlwdFxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlKHBhdGgsIGZuKSB7XG4gICAgdmFyIGVsID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpLCBsb2FkZWRcbiAgICBlbC5vbmxvYWQgPSBlbC5vbmVycm9yID0gZWxbb25yZWFkeXN0YXRlY2hhbmdlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgoZWxbcmVhZHlTdGF0ZV0gJiYgISgvXmN8bG9hZGUvLnRlc3QoZWxbcmVhZHlTdGF0ZV0pKSkgfHwgbG9hZGVkKSByZXR1cm47XG4gICAgICBlbC5vbmxvYWQgPSBlbFtvbnJlYWR5c3RhdGVjaGFuZ2VdID0gbnVsbFxuICAgICAgbG9hZGVkID0gMVxuICAgICAgc2NyaXB0c1twYXRoXSA9IDJcbiAgICAgIGZuKClcbiAgICB9XG4gICAgZWwuYXN5bmMgPSAxXG4gICAgZWwuc3JjID0gdXJsQXJncyA/IHBhdGggKyAocGF0aC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHVybEFyZ3MgOiBwYXRoO1xuICAgIGhlYWQuaW5zZXJ0QmVmb3JlKGVsLCBoZWFkLmxhc3RDaGlsZClcbiAgfVxuXG4gICRzY3JpcHQuZ2V0ID0gY3JlYXRlXG5cbiAgJHNjcmlwdC5vcmRlciA9IGZ1bmN0aW9uIChzY3JpcHRzLCBpZCwgZG9uZSkge1xuICAgIChmdW5jdGlvbiBjYWxsYmFjayhzKSB7XG4gICAgICBzID0gc2NyaXB0cy5zaGlmdCgpXG4gICAgICAhc2NyaXB0cy5sZW5ndGggPyAkc2NyaXB0KHMsIGlkLCBkb25lKSA6ICRzY3JpcHQocywgY2FsbGJhY2spXG4gICAgfSgpKVxuICB9XG5cbiAgJHNjcmlwdC5wYXRoID0gZnVuY3Rpb24gKHApIHtcbiAgICBzY3JpcHRwYXRoID0gcFxuICB9XG4gICRzY3JpcHQudXJsQXJncyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB1cmxBcmdzID0gc3RyO1xuICB9XG4gICRzY3JpcHQucmVhZHkgPSBmdW5jdGlvbiAoZGVwcywgcmVhZHksIHJlcSkge1xuICAgIGRlcHMgPSBkZXBzW3B1c2hdID8gZGVwcyA6IFtkZXBzXVxuICAgIHZhciBtaXNzaW5nID0gW107XG4gICAgIWVhY2goZGVwcywgZnVuY3Rpb24gKGRlcCkge1xuICAgICAgbGlzdFtkZXBdIHx8IG1pc3NpbmdbcHVzaF0oZGVwKTtcbiAgICB9KSAmJiBldmVyeShkZXBzLCBmdW5jdGlvbiAoZGVwKSB7cmV0dXJuIGxpc3RbZGVwXX0pID9cbiAgICAgIHJlYWR5KCkgOiAhZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVsYXlba2V5XSA9IGRlbGF5W2tleV0gfHwgW11cbiAgICAgIGRlbGF5W2tleV1bcHVzaF0ocmVhZHkpXG4gICAgICByZXEgJiYgcmVxKG1pc3NpbmcpXG4gICAgfShkZXBzLmpvaW4oJ3wnKSlcbiAgICByZXR1cm4gJHNjcmlwdFxuICB9XG5cbiAgJHNjcmlwdC5kb25lID0gZnVuY3Rpb24gKGlkT3JEb25lKSB7XG4gICAgJHNjcmlwdChbbnVsbF0sIGlkT3JEb25lKVxuICB9XG5cbiAgcmV0dXJuICRzY3JpcHRcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2NyaXB0anMvZGlzdC9zY3JpcHQuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRldGVjdEJyb3dzZXI7XG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU4OTk3ODMvZGV0ZWN0LXNhZmFyaS1jaHJvbWUtaWUtZmlyZWZveC1vcGVyYS13aXRoLXVzZXItYWdlbnRcbnZhciBkZXRlY3RCcm93c2VyUmVzdWx0XyA9IG51bGw7XG5cbmZ1bmN0aW9uIGRldGVjdEJyb3dzZXIoKSB7XG4gIGlmIChkZXRlY3RCcm93c2VyUmVzdWx0Xykge1xuICAgIHJldHVybiBkZXRlY3RCcm93c2VyUmVzdWx0XztcbiAgfVxuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBpc0V4cGxvcmVyID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgPiAtMTtcbiAgICB2YXIgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMTtcbiAgICB2YXIgaXNPcGVyYSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdvcCcpID4gLTE7XG5cbiAgICB2YXIgaXNDaHJvbWUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZScpID4gLTE7XG4gICAgdmFyIGlzU2FmYXJpID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdTYWZhcmknKSA+IC0xO1xuXG4gICAgaWYgKGlzQ2hyb21lICYmIGlzU2FmYXJpKSB7XG4gICAgICBpc1NhZmFyaSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc0Nocm9tZSAmJiBpc09wZXJhKSB7XG4gICAgICBpc0Nocm9tZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRldGVjdEJyb3dzZXJSZXN1bHRfID0ge1xuICAgICAgaXNFeHBsb3JlcjogaXNFeHBsb3JlcixcbiAgICAgIGlzRmlyZWZveDogaXNGaXJlZm94LFxuICAgICAgaXNPcGVyYTogaXNPcGVyYSxcbiAgICAgIGlzQ2hyb21lOiBpc0Nocm9tZSxcbiAgICAgIGlzU2FmYXJpOiBpc1NhZmFyaVxuICAgIH07XG4gICAgcmV0dXJuIGRldGVjdEJyb3dzZXJSZXN1bHRfO1xuICB9XG5cbiAgZGV0ZWN0QnJvd3NlclJlc3VsdF8gPSB7XG4gICAgaXNDaHJvbWU6IHRydWUsXG4gICAgaXNFeHBsb3JlcjogZmFsc2UsXG4gICAgaXNGaXJlZm94OiBmYWxzZSxcbiAgICBpc09wZXJhOiBmYWxzZSxcbiAgICBpc1NhZmFyaTogZmFsc2VcbiAgfTtcblxuICByZXR1cm4gZGV0ZWN0QnJvd3NlclJlc3VsdF87XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcG9pbnRHZW9tZXRyeSA9IHJlcXVpcmUoJ3BvaW50LWdlb21ldHJ5Jyk7XG5cbnZhciBfcG9pbnRHZW9tZXRyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2ludEdlb21ldHJ5KTtcblxudmFyIF9sYXRfbG5nID0gcmVxdWlyZSgnLi9saWJfZ2VvL2xhdF9sbmcnKTtcblxudmFyIF9sYXRfbG5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xhdF9sbmcpO1xuXG52YXIgX3RyYW5zZm9ybSA9IHJlcXVpcmUoJy4vbGliX2dlby90cmFuc2Zvcm0nKTtcblxudmFyIF90cmFuc2Zvcm0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEdlbyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2VvKHRpbGVTaXplKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdlbyk7XG5cbiAgICAvLyBsZWZ0X3RvcCB2aWV3INC/0L7Qu9GM0LfRg9C10YIg0LPRg9Cz0LtcbiAgICAvLyBzdXBlcigpO1xuICAgIHRoaXMuaGFzU2l6ZV8gPSBmYWxzZTtcbiAgICB0aGlzLmhhc1ZpZXdfID0gZmFsc2U7XG4gICAgdGhpcy50cmFuc2Zvcm1fID0gbmV3IF90cmFuc2Zvcm0yLmRlZmF1bHQodGlsZVNpemUgfHwgNTEyKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHZW8sIFt7XG4gICAga2V5OiAnc2V0VmlldycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZpZXcoY2VudGVyLCB6b29tLCBiZWFyaW5nKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybV8uY2VudGVyID0gX2xhdF9sbmcyLmRlZmF1bHQuY29udmVydChjZW50ZXIpO1xuICAgICAgdGhpcy50cmFuc2Zvcm1fLnpvb20gPSArem9vbTtcbiAgICAgIHRoaXMudHJhbnNmb3JtXy5iZWFyaW5nID0gK2JlYXJpbmc7XG4gICAgICB0aGlzLmhhc1ZpZXdfID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRWaWV3U2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZpZXdTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtXy53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy50cmFuc2Zvcm1fLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMuaGFzU2l6ZV8gPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhblByb2plY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5Qcm9qZWN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzU2l6ZV8gJiYgdGhpcy5oYXNWaWV3XztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYXNTaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzU2l6ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhc1NpemVfO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VucHJvamVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVucHJvamVjdChwdFhZLCB2aWV3RnJvbUxlZnRUb3ApIHtcbiAgICAgIHZhciBwdFJlcyA9IHZvaWQgMDtcbiAgICAgIGlmICh2aWV3RnJvbUxlZnRUb3ApIHtcbiAgICAgICAgdmFyIHB0eHkgPSBfZXh0ZW5kcyh7fSwgcHRYWSk7XG4gICAgICAgIHB0eHkueCAtPSB0aGlzLnRyYW5zZm9ybV8ud2lkdGggLyAyO1xuICAgICAgICBwdHh5LnkgLT0gdGhpcy50cmFuc2Zvcm1fLmhlaWdodCAvIDI7XG4gICAgICAgIHB0UmVzID0gdGhpcy50cmFuc2Zvcm1fLnBvaW50TG9jYXRpb24oX3BvaW50R2VvbWV0cnkyLmRlZmF1bHQuY29udmVydChwdHh5KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwdFJlcyA9IHRoaXMudHJhbnNmb3JtXy5wb2ludExvY2F0aW9uKF9wb2ludEdlb21ldHJ5Mi5kZWZhdWx0LmNvbnZlcnQocHRYWSkpO1xuICAgICAgfVxuXG4gICAgICBwdFJlcy5sbmcgLT0gMzYwICogTWF0aC5yb3VuZChwdFJlcy5sbmcgLyAzNjApOyAvLyBjb252ZXJ0IDIgZ29vZ2xlIGZvcm1hdFxuICAgICAgcmV0dXJuIHB0UmVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Byb2plY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9qZWN0KHB0TGF0TG5nLCB2aWV3RnJvbUxlZnRUb3ApIHtcbiAgICAgIGlmICh2aWV3RnJvbUxlZnRUb3ApIHtcbiAgICAgICAgdmFyIHB0ID0gdGhpcy50cmFuc2Zvcm1fLmxvY2F0aW9uUG9pbnQoX2xhdF9sbmcyLmRlZmF1bHQuY29udmVydChwdExhdExuZykpO1xuICAgICAgICBwdC54IC09IHRoaXMudHJhbnNmb3JtXy53b3JsZFNpemUgKiBNYXRoLnJvdW5kKHB0LnggLyB0aGlzLnRyYW5zZm9ybV8ud29ybGRTaXplKTtcblxuICAgICAgICBwdC54ICs9IHRoaXMudHJhbnNmb3JtXy53aWR0aCAvIDI7XG4gICAgICAgIHB0LnkgKz0gdGhpcy50cmFuc2Zvcm1fLmhlaWdodCAvIDI7XG5cbiAgICAgICAgcmV0dXJuIHB0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1fLmxvY2F0aW9uUG9pbnQoX2xhdF9sbmcyLmRlZmF1bHQuY29udmVydChwdExhdExuZykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFdpZHRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0V2lkdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1fLndpZHRoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEhlaWdodCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEhlaWdodCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybV8uaGVpZ2h0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFpvb20nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRab29tKCkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtXy56b29tO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENlbnRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENlbnRlcigpIHtcbiAgICAgIHZhciBwdFJlcyA9IHRoaXMudHJhbnNmb3JtXy5wb2ludExvY2F0aW9uKHsgeDogMCwgeTogMCB9KTtcblxuICAgICAgcmV0dXJuIHB0UmVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEJvdW5kcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJvdW5kcyhtYXJnaW5zLCByb3VuZEZhY3Rvcikge1xuICAgICAgdmFyIGJuZFQgPSBtYXJnaW5zICYmIG1hcmdpbnNbMF0gfHwgMDtcbiAgICAgIHZhciBibmRSID0gbWFyZ2lucyAmJiBtYXJnaW5zWzFdIHx8IDA7XG4gICAgICB2YXIgYm5kQiA9IG1hcmdpbnMgJiYgbWFyZ2luc1syXSB8fCAwO1xuICAgICAgdmFyIGJuZEwgPSBtYXJnaW5zICYmIG1hcmdpbnNbM10gfHwgMDtcblxuICAgICAgaWYgKHRoaXMuZ2V0V2lkdGgoKSAtIGJuZFIgLSBibmRMID4gMCAmJiB0aGlzLmdldEhlaWdodCgpIC0gYm5kVCAtIGJuZEIgPiAwKSB7XG4gICAgICAgIHZhciB0b3BMZWZ0Q29ybmVyID0gdGhpcy51bnByb2plY3Qoe1xuICAgICAgICAgIHg6IGJuZEwgLSB0aGlzLmdldFdpZHRoKCkgLyAyLFxuICAgICAgICAgIHk6IGJuZFQgLSB0aGlzLmdldEhlaWdodCgpIC8gMlxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGJvdHRvbVJpZ2h0Q29ybmVyID0gdGhpcy51bnByb2plY3Qoe1xuICAgICAgICAgIHg6IHRoaXMuZ2V0V2lkdGgoKSAvIDIgLSBibmRSLFxuICAgICAgICAgIHk6IHRoaXMuZ2V0SGVpZ2h0KCkgLyAyIC0gYm5kQlxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgcmVzID0gW3RvcExlZnRDb3JuZXIubGF0LCB0b3BMZWZ0Q29ybmVyLmxuZywgLy8gTldcbiAgICAgICAgYm90dG9tUmlnaHRDb3JuZXIubGF0LCBib3R0b21SaWdodENvcm5lci5sbmcsIC8vIFNFXG4gICAgICAgIGJvdHRvbVJpZ2h0Q29ybmVyLmxhdCwgdG9wTGVmdENvcm5lci5sbmcsIC8vIFNXXG4gICAgICAgIHRvcExlZnRDb3JuZXIubGF0LCBib3R0b21SaWdodENvcm5lci5sbmddO1xuXG4gICAgICAgIGlmIChyb3VuZEZhY3Rvcikge1xuICAgICAgICAgIHJlcyA9IHJlcy5tYXAoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHIgKiByb3VuZEZhY3RvcikgLyByb3VuZEZhY3RvcjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gWzAsIDAsIDAsIDBdO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHZW87XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEdlbztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9nZW8uanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTsgLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuXG5cbnZhciBfcG9pbnRHZW9tZXRyeSA9IHJlcXVpcmUoJ3BvaW50LWdlb21ldHJ5Jyk7XG5cbnZhciBfcG9pbnRHZW9tZXRyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2ludEdlb21ldHJ5KTtcblxudmFyIF9sYXRfbG5nID0gcmVxdWlyZSgnLi9sYXRfbG5nJyk7XG5cbnZhciBfbGF0X2xuZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sYXRfbG5nKTtcblxudmFyIF93cmFwID0gcmVxdWlyZSgnLi93cmFwJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIEEgc2luZ2xlIHRyYW5zZm9ybSwgZ2VuZXJhbGx5IHVzZWQgZm9yIGEgc2luZ2xlIHRpbGUgdG8gYmUgc2NhbGVkLCByb3RhdGVkLCBhbmQgem9vbWVkLlxudmFyIFRyYW5zZm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVHJhbnNmb3JtKHRpbGVTaXplLCBtaW5ab29tLCBtYXhab29tKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLnRpbGVTaXplID0gdGlsZVNpemUgfHwgNTEyOyAvLyBjb25zdGFudFxuXG4gICAgdGhpcy5fbWluWm9vbSA9IG1pblpvb20gfHwgMDtcbiAgICB0aGlzLl9tYXhab29tID0gbWF4Wm9vbSB8fCA1MjtcblxuICAgIHRoaXMubGF0UmFuZ2UgPSBbLTg1LjA1MTEzLCA4NS4wNTExM107XG5cbiAgICB0aGlzLndpZHRoID0gMDtcbiAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgdGhpcy56b29tID0gMDtcbiAgICB0aGlzLmNlbnRlciA9IG5ldyBfbGF0X2xuZzIuZGVmYXVsdCgwLCAwKTtcbiAgICB0aGlzLmFuZ2xlID0gMDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUcmFuc2Zvcm0sIFt7XG4gICAga2V5OiAnem9vbVNjYWxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gem9vbVNjYWxlKHpvb20pIHtcbiAgICAgIHJldHVybiBNYXRoLnBvdygyLCB6b29tKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzY2FsZVpvb20nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzY2FsZVpvb20oc2NhbGUpIHtcbiAgICAgIHJldHVybiBNYXRoLmxvZyhzY2FsZSkgLyBNYXRoLkxOMjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwcm9qZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvamVjdChsYXRsbmcsIHdvcmxkU2l6ZSkge1xuICAgICAgcmV0dXJuIG5ldyBfcG9pbnRHZW9tZXRyeTIuZGVmYXVsdCh0aGlzLmxuZ1gobGF0bG5nLmxuZywgd29ybGRTaXplKSwgdGhpcy5sYXRZKGxhdGxuZy5sYXQsIHdvcmxkU2l6ZSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VucHJvamVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVucHJvamVjdChwb2ludCwgd29ybGRTaXplKSB7XG4gICAgICByZXR1cm4gbmV3IF9sYXRfbG5nMi5kZWZhdWx0KHRoaXMueUxhdChwb2ludC55LCB3b3JsZFNpemUpLCB0aGlzLnhMbmcocG9pbnQueCwgd29ybGRTaXplKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbG5nWCcsXG5cblxuICAgIC8vIGxhdC9sb24gPC0+IGFic29sdXRlIHBpeGVsIGNvb3JkcyBjb252ZXJ0aW9uXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxuZ1gobG9uLCB3b3JsZFNpemUpIHtcbiAgICAgIHJldHVybiAoMTgwICsgbG9uKSAqICh3b3JsZFNpemUgfHwgdGhpcy53b3JsZFNpemUpIC8gMzYwO1xuICAgIH1cblxuICAgIC8vIGxhdGl0dWRlIHRvIGFic29sdXRlIHkgY29vcmRcblxuICB9LCB7XG4gICAga2V5OiAnbGF0WScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxhdFkobGF0LCB3b3JsZFNpemUpIHtcbiAgICAgIHZhciB5ID0gMTgwIC8gTWF0aC5QSSAqIE1hdGgubG9nKE1hdGgudGFuKE1hdGguUEkgLyA0ICsgbGF0ICogTWF0aC5QSSAvIDM2MCkpO1xuICAgICAgcmV0dXJuICgxODAgLSB5KSAqICh3b3JsZFNpemUgfHwgdGhpcy53b3JsZFNpemUpIC8gMzYwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3hMbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB4TG5nKHgsIHdvcmxkU2l6ZSkge1xuICAgICAgcmV0dXJuIHggKiAzNjAgLyAod29ybGRTaXplIHx8IHRoaXMud29ybGRTaXplKSAtIDE4MDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd5TGF0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24geUxhdCh5LCB3b3JsZFNpemUpIHtcbiAgICAgIHZhciB5MiA9IDE4MCAtIHkgKiAzNjAgLyAod29ybGRTaXplIHx8IHRoaXMud29ybGRTaXplKTtcbiAgICAgIHJldHVybiAzNjAgLyBNYXRoLlBJICogTWF0aC5hdGFuKE1hdGguZXhwKHkyICogTWF0aC5QSSAvIDE4MCkpIC0gOTA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbG9jYXRpb25Qb2ludCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvY2F0aW9uUG9pbnQobGF0bG5nKSB7XG4gICAgICB2YXIgcCA9IHRoaXMucHJvamVjdChsYXRsbmcpO1xuICAgICAgcmV0dXJuIHRoaXMuY2VudGVyUG9pbnQuX3N1Yih0aGlzLnBvaW50Ll9zdWIocCkuX3JvdGF0ZSh0aGlzLmFuZ2xlKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncG9pbnRMb2NhdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvaW50TG9jYXRpb24ocCkge1xuICAgICAgdmFyIHAyID0gdGhpcy5jZW50ZXJQb2ludC5fc3ViKHApLl9yb3RhdGUoLXRoaXMuYW5nbGUpO1xuICAgICAgcmV0dXJuIHRoaXMudW5wcm9qZWN0KHRoaXMucG9pbnQuc3ViKHAyKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWluWm9vbScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWluWm9vbTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHpvb20pIHtcbiAgICAgIHRoaXMuX21pblpvb20gPSB6b29tO1xuICAgICAgdGhpcy56b29tID0gTWF0aC5tYXgodGhpcy56b29tLCB6b29tKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdtYXhab29tJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXhab29tO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoem9vbSkge1xuICAgICAgdGhpcy5fbWF4Wm9vbSA9IHpvb207XG4gICAgICB0aGlzLnpvb20gPSBNYXRoLm1pbih0aGlzLnpvb20sIHpvb20pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3dvcmxkU2l6ZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy50aWxlU2l6ZSAqIHRoaXMuc2NhbGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2VudGVyUG9pbnQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIG5ldyBfcG9pbnRHZW9tZXRyeTIuZGVmYXVsdCgwLCAwKTsgLy8gdGhpcy5zaXplLl9kaXYoMik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2l6ZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gbmV3IF9wb2ludEdlb21ldHJ5Mi5kZWZhdWx0KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdiZWFyaW5nJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAtdGhpcy5hbmdsZSAvIE1hdGguUEkgKiAxODA7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChiZWFyaW5nKSB7XG4gICAgICB0aGlzLmFuZ2xlID0gLSgwLCBfd3JhcC53cmFwKShiZWFyaW5nLCAtMTgwLCAxODApICogTWF0aC5QSSAvIDE4MDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd6b29tJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl96b29tO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoem9vbSkge1xuICAgICAgdmFyIHpvb21WID0gTWF0aC5taW4oTWF0aC5tYXgoem9vbSwgdGhpcy5taW5ab29tKSwgdGhpcy5tYXhab29tKTtcbiAgICAgIHRoaXMuX3pvb20gPSB6b29tVjtcbiAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLnpvb21TY2FsZSh6b29tVik7XG4gICAgICB0aGlzLnRpbGVab29tID0gTWF0aC5mbG9vcih6b29tVik7XG4gICAgICB0aGlzLnpvb21GcmFjdGlvbiA9IHpvb21WIC0gdGhpcy50aWxlWm9vbTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd4JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxuZ1godGhpcy5jZW50ZXIubG5nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd5JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhdFkodGhpcy5jZW50ZXIubGF0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwb2ludCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gbmV3IF9wb2ludEdlb21ldHJ5Mi5kZWZhdWx0KHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHJhbnNmb3JtO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFuc2Zvcm07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvbGliX2dlby90cmFuc2Zvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNBcnJheXNFcXVhbEVwcztcbmZ1bmN0aW9uIGlzQXJyYXlzRXF1YWxFcHMoYXJyYXlBLCBhcnJheUIsIGVwcykge1xuICBpZiAoYXJyYXlBICYmIGFycmF5Qikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpICE9PSBhcnJheUEubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChNYXRoLmFicyhhcnJheUFbaV0gLSBhcnJheUJbaV0pID4gZXBzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2FycmF5X2hlbHBlci5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzUGxhaW5PYmplY3Q7XG4vLyBzb3VyY2UgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVkdXgvYmxvYi9tYXN0ZXIvc3JjL3V0aWxzL2lzUGxhaW5PYmplY3QuanNcbnZhciBmblRvU3RyaW5nID0gZnVuY3Rpb24gZm5Ub1N0cmluZyhmbikge1xuICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZm4pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAoIW9iaiB8fCAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqKSkgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHByb3RvID0gdHlwZW9mIG9iai5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopIDogT2JqZWN0LnByb3RvdHlwZTtcblxuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBjb25zdHJ1Y3RvciA9IHByb3RvLmNvbnN0cnVjdG9yO1xuXG4gIHJldHVybiB0eXBlb2YgY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicgJiYgY29uc3RydWN0b3IgaW5zdGFuY2VvZiBjb25zdHJ1Y3RvciAmJiBmblRvU3RyaW5nKGNvbnN0cnVjdG9yKSA9PT0gZm5Ub1N0cmluZyhPYmplY3QpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2lzX3BsYWluX29iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwaWNrO1xuLy8gc291cmNlIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3JhY2t0L3JlZHV4L2Jsb2IvbWFzdGVyL3NyYy91dGlscy9waWNrLmpzXG5cbmZ1bmN0aW9uIHBpY2sob2JqLCBmbikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG4gICAgaWYgKGZuKG9ialtrZXldKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvcGljay5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByYWY7XG5mdW5jdGlvbiByYWYoY2FsbGJhY2spIHtcbiAgaWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gIH1cblxuICB2YXIgbmF0aXZlUmFmID0gd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG4gIHJldHVybiBuYXRpdmVSYWYgPyBuYXRpdmVSYWYoY2FsbGJhY2spIDogd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDFlMyAvIDYwKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9yYWYuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGxvZzIgPSBNYXRoLmxvZzIgPyBNYXRoLmxvZzIgOiBmdW5jdGlvbiAoeCkge1xuICByZXR1cm4gTWF0aC5sb2coeCkgLyBNYXRoLkxOMjtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGxvZzI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvbWF0aC9sb2cyLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNOdW1iZXI7XG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSA9PT0gJ29iamVjdCc7XG59XG5cbnZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gIHZhciBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJztcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gbnVtYmVyVGFnO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2lzTnVtYmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiogRGV0ZWN0IEVsZW1lbnQgUmVzaXplLlxuKiBGb3JrZWQgaW4gb3JkZXIgdG8gZ3VhcmQgYWdhaW5zdCB1bnNhZmUgJ3dpbmRvdycgYW5kICdkb2N1bWVudCcgcmVmZXJlbmNlcy5cbipcbiogaHR0cHM6Ly9naXRodWIuY29tL3NkZWNpbWEvamF2YXNjcmlwdC1kZXRlY3QtZWxlbWVudC1yZXNpemVcbiogU2ViYXN0aWFuIERlY2ltYVxuKlxuKiB2ZXJzaW9uOiAwLjUuM1xuKiovXG5cbi8vIFJlbGlhYmxlIGB3aW5kb3dgIGFuZCBgZG9jdW1lbnRgIGRldGVjdGlvblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbi8vIENoZWNrIGBkb2N1bWVudGAgYW5kIGB3aW5kb3dgIGluIGNhc2Ugb2Ygc2VydmVyLXNpZGUgcmVuZGVyaW5nXG52YXIgX3dpbmRvdztcbmlmIChjYW5Vc2VET00pIHtcbiAgX3dpbmRvdyA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIF93aW5kb3cgPSBzZWxmO1xufSBlbHNlIHtcbiAgX3dpbmRvdyA9IHVuZGVmaW5lZDtcbn1cblxudmFyIGF0dGFjaEV2ZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5hdHRhY2hFdmVudDtcbnZhciBzdHlsZXNDcmVhdGVkID0gZmFsc2U7XG5cbmlmIChjYW5Vc2VET00gJiYgIWF0dGFjaEV2ZW50KSB7XG4gIHZhciByZXF1ZXN0RnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJhZiA9IF93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IF93aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IF93aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIF93aW5kb3cuc2V0VGltZW91dChmbiwgMjApO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIHJhZihmbik7XG4gICAgfTtcbiAgfSgpO1xuXG4gIHZhciBjYW5jZWxGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuY2VsID0gX3dpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCBfd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IF93aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgX3dpbmRvdy5jbGVhclRpbWVvdXQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpZCkge1xuICAgICAgcmV0dXJuIGNhbmNlbChpZCk7XG4gICAgfTtcbiAgfSgpO1xuXG4gIHZhciByZXNldFRyaWdnZXJzID0gZnVuY3Rpb24gcmVzZXRUcmlnZ2VycyhlbGVtZW50KSB7XG4gICAgdmFyIHRyaWdnZXJzID0gZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18sXG4gICAgICAgIGV4cGFuZCA9IHRyaWdnZXJzLmZpcnN0RWxlbWVudENoaWxkLFxuICAgICAgICBjb250cmFjdCA9IHRyaWdnZXJzLmxhc3RFbGVtZW50Q2hpbGQsXG4gICAgICAgIGV4cGFuZENoaWxkID0gZXhwYW5kLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGNvbnRyYWN0LnNjcm9sbExlZnQgPSBjb250cmFjdC5zY3JvbGxXaWR0aDtcbiAgICBjb250cmFjdC5zY3JvbGxUb3AgPSBjb250cmFjdC5zY3JvbGxIZWlnaHQ7XG4gICAgZXhwYW5kQ2hpbGQuc3R5bGUud2lkdGggPSBleHBhbmQub2Zmc2V0V2lkdGggKyAxICsgJ3B4JztcbiAgICBleHBhbmRDaGlsZC5zdHlsZS5oZWlnaHQgPSBleHBhbmQub2Zmc2V0SGVpZ2h0ICsgMSArICdweCc7XG4gICAgZXhwYW5kLnNjcm9sbExlZnQgPSBleHBhbmQuc2Nyb2xsV2lkdGg7XG4gICAgZXhwYW5kLnNjcm9sbFRvcCA9IGV4cGFuZC5zY3JvbGxIZWlnaHQ7XG4gIH07XG5cbiAgdmFyIGNoZWNrVHJpZ2dlcnMgPSBmdW5jdGlvbiBjaGVja1RyaWdnZXJzKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRXaWR0aCAhPSBlbGVtZW50Ll9fcmVzaXplTGFzdF9fLndpZHRoIHx8IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICE9IGVsZW1lbnQuX19yZXNpemVMYXN0X18uaGVpZ2h0O1xuICB9O1xuXG4gIHZhciBzY3JvbGxMaXN0ZW5lciA9IGZ1bmN0aW9uIHNjcm9sbExpc3RlbmVyKGUpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXM7XG4gICAgcmVzZXRUcmlnZ2Vycyh0aGlzKTtcbiAgICBpZiAodGhpcy5fX3Jlc2l6ZVJBRl9fKSBjYW5jZWxGcmFtZSh0aGlzLl9fcmVzaXplUkFGX18pO1xuICAgIHRoaXMuX19yZXNpemVSQUZfXyA9IHJlcXVlc3RGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY2hlY2tUcmlnZ2VycyhlbGVtZW50KSkge1xuICAgICAgICBlbGVtZW50Ll9fcmVzaXplTGFzdF9fLndpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgZWxlbWVudC5fX3Jlc2l6ZUxhc3RfXy5oZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgZm4uY2FsbChlbGVtZW50LCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyogRGV0ZWN0IENTUyBBbmltYXRpb25zIHN1cHBvcnQgdG8gZGV0ZWN0IGVsZW1lbnQgZGlzcGxheS9yZS1hdHRhY2ggKi9cbiAgdmFyIGFuaW1hdGlvbiA9IGZhbHNlLFxuICAgICAgYW5pbWF0aW9uc3RyaW5nID0gJ2FuaW1hdGlvbicsXG4gICAgICBrZXlmcmFtZXByZWZpeCA9ICcnLFxuICAgICAgYW5pbWF0aW9uc3RhcnRldmVudCA9ICdhbmltYXRpb25zdGFydCcsXG4gICAgICBkb21QcmVmaXhlcyA9ICdXZWJraXQgTW96IE8gbXMnLnNwbGl0KCcgJyksXG4gICAgICBzdGFydEV2ZW50cyA9ICd3ZWJraXRBbmltYXRpb25TdGFydCBhbmltYXRpb25zdGFydCBvQW5pbWF0aW9uU3RhcnQgTVNBbmltYXRpb25TdGFydCcuc3BsaXQoJyAnKSxcbiAgICAgIHBmeCA9ICcnO1xuXG4gIGlmIChjYW5Vc2VET00pIHtcbiAgICB2YXIgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZWVsZW1lbnQnKTtcbiAgICBpZiAoZWxtLnN0eWxlLmFuaW1hdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYW5pbWF0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0aW9uID09PSBmYWxzZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb21QcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxtLnN0eWxlW2RvbVByZWZpeGVzW2ldICsgJ0FuaW1hdGlvbk5hbWUnXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcGZ4ID0gZG9tUHJlZml4ZXNbaV07XG4gICAgICAgICAgYW5pbWF0aW9uc3RyaW5nID0gcGZ4ICsgJ0FuaW1hdGlvbic7XG4gICAgICAgICAga2V5ZnJhbWVwcmVmaXggPSAnLScgKyBwZngudG9Mb3dlckNhc2UoKSArICctJztcbiAgICAgICAgICBhbmltYXRpb25zdGFydGV2ZW50ID0gc3RhcnRFdmVudHNbaV07XG4gICAgICAgICAgYW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBhbmltYXRpb25OYW1lID0gJ3Jlc2l6ZWFuaW0nO1xuICB2YXIgYW5pbWF0aW9uS2V5ZnJhbWVzID0gJ0AnICsga2V5ZnJhbWVwcmVmaXggKyAna2V5ZnJhbWVzICcgKyBhbmltYXRpb25OYW1lICsgJyB7IGZyb20geyBvcGFjaXR5OiAwOyB9IHRvIHsgb3BhY2l0eTogMDsgfSB9ICc7XG4gIHZhciBhbmltYXRpb25TdHlsZSA9IGtleWZyYW1lcHJlZml4ICsgJ2FuaW1hdGlvbjogMW1zICcgKyBhbmltYXRpb25OYW1lICsgJzsgJztcbn1cblxudmFyIGNyZWF0ZVN0eWxlcyA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcygpIHtcbiAgaWYgKCFzdHlsZXNDcmVhdGVkKSB7XG4gICAgLy9vcGFjaXR5OjAgd29ya3MgYXJvdW5kIGEgY2hyb21lIGJ1ZyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Mjg2MzYwXG4gICAgdmFyIGNzcyA9IChhbmltYXRpb25LZXlmcmFtZXMgPyBhbmltYXRpb25LZXlmcmFtZXMgOiAnJykgKyAnLnJlc2l6ZS10cmlnZ2VycyB7ICcgKyAoYW5pbWF0aW9uU3R5bGUgPyBhbmltYXRpb25TdHlsZSA6ICcnKSArICd2aXNpYmlsaXR5OiBoaWRkZW47IG9wYWNpdHk6IDA7IH0gJyArICcucmVzaXplLXRyaWdnZXJzLCAucmVzaXplLXRyaWdnZXJzID4gZGl2LCAuY29udHJhY3QtdHJpZ2dlcjpiZWZvcmUgeyBjb250ZW50OiBcIiBcIjsgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyB9IC5yZXNpemUtdHJpZ2dlcnMgPiBkaXYgeyBiYWNrZ3JvdW5kOiAjZWVlOyBvdmVyZmxvdzogYXV0bzsgfSAuY29udHJhY3QtdHJpZ2dlcjpiZWZvcmUgeyB3aWR0aDogMjAwJTsgaGVpZ2h0OiAyMDAlOyB9JyxcbiAgICAgICAgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSxcbiAgICAgICAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuXG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgc3R5bGVzQ3JlYXRlZCA9IHRydWU7XG4gIH1cbn07XG5cbnZhciBhZGRSZXNpemVMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZFJlc2l6ZUxpc3RlbmVyKGVsZW1lbnQsIGZuKSB7XG4gIGlmIChlbGVtZW50LnBhcmVudE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciB0ZW1wUGFyZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5wYXJlbnROb2RlID0gdGVtcFBhcmVudERpdjtcbiAgfVxuICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICBpZiAoYXR0YWNoRXZlbnQpIGVsZW1lbnQuYXR0YWNoRXZlbnQoJ29ucmVzaXplJywgZm4pO2Vsc2Uge1xuICAgIGlmICghZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18pIHtcbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09ICdzdGF0aWMnKSBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIGNyZWF0ZVN0eWxlcygpO1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZUxhc3RfXyA9IHt9O1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fID0gW107XG4gICAgICAoZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuY2xhc3NOYW1lID0gJ3Jlc2l6ZS10cmlnZ2Vycyc7XG4gICAgICBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcnNfXy5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImV4cGFuZC10cmlnZ2VyXCI+PGRpdj48L2Rpdj48L2Rpdj4nICsgJzxkaXYgY2xhc3M9XCJjb250cmFjdC10cmlnZ2VyXCI+PC9kaXY+JztcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18pO1xuICAgICAgcmVzZXRUcmlnZ2VycyhlbGVtZW50KTtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsTGlzdGVuZXIsIHRydWUpO1xuXG4gICAgICAvKiBMaXN0ZW4gZm9yIGEgY3NzIGFuaW1hdGlvbiB0byBkZXRlY3QgZWxlbWVudCBkaXNwbGF5L3JlLWF0dGFjaCAqL1xuICAgICAgYW5pbWF0aW9uc3RhcnRldmVudCAmJiBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcnNfXy5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbnN0YXJ0ZXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmFuaW1hdGlvbk5hbWUgPT0gYW5pbWF0aW9uTmFtZSkgcmVzZXRUcmlnZ2VycyhlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18ucHVzaChmbik7XG4gIH1cbn07XG5cbnZhciByZW1vdmVSZXNpemVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZVJlc2l6ZUxpc3RlbmVyKGVsZW1lbnQsIGZuKSB7XG4gIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gIGlmIChhdHRhY2hFdmVudCkgZWxlbWVudC5kZXRhY2hFdmVudCgnb25yZXNpemUnLCBmbik7ZWxzZSB7XG4gICAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLnNwbGljZShlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18uaW5kZXhPZihmbiksIDEpO1xuICAgIGlmICghZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLmxlbmd0aCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxMaXN0ZW5lcik7XG4gICAgICBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcnNfXyA9ICFlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuX19yZXNpemVUcmlnZ2Vyc19fKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhZGRSZXNpemVMaXN0ZW5lcjogYWRkUmVzaXplTGlzdGVuZXIsXG4gIHJlbW92ZVJlc2l6ZUxpc3RlbmVyOiByZW1vdmVSZXNpemVMaXN0ZW5lclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9kZXRlY3RFbGVtZW50UmVzaXplLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTdGF0ZWxlc3NDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJQcm9wcyB7XG4gICAgbGF0OiBudW1iZXI7XG4gICAgbG5nOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBNYXJrZXI6IFN0YXRlbGVzc0NvbXBvbmVudDxNYXJrZXJQcm9wcz4gPSAocHJvcHMpID0+XG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3aWRnZXQtZ29vZ2xlLW1hcHMtbWFya2VyXCIgfSk7XG5cbk1hcmtlci5kaXNwbGF5TmFtZSA9IFwiTWFya2VyXCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9NYXJrZXIudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExvY2F0aW9uLCBNYXAsIGhlaWdodFVuaXRUeXBlLCB3aWR0aFVuaXRUeXBlIH0gZnJvbSBcIi4vTWFwXCI7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCIuL0FsZXJ0XCI7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICAgIFwiY2xhc3NcIj86IHN0cmluZztcbiAgICBteE9iamVjdD86IG1lbmRpeC5saWIuTXhPYmplY3Q7XG4gICAgc3R5bGU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEdvb2dsZU1hcENvbnRhaW5lclByb3BzIGV4dGVuZHMgV3JhcHBlclByb3BzIHtcbiAgICBhcGlLZXk6IHN0cmluZztcbiAgICBhdXRvWm9vbTogYm9vbGVhbjtcbiAgICBkYXRhU291cmNlOiBEYXRhU291cmNlO1xuICAgIGRhdGFTb3VyY2VNaWNyb2Zsb3c6IHN0cmluZztcbiAgICBkZWZhdWx0Q2VudGVyQWRkcmVzczogc3RyaW5nO1xuICAgIGVudGl0eUNvbnN0cmFpbnQ6IHN0cmluZztcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBoZWlnaHRVbml0OiBoZWlnaHRVbml0VHlwZTtcbiAgICBvcHRpb25EcmFnOiBib29sZWFuO1xuICAgIG9wdGlvbk1hcENvbnRyb2w6IGJvb2xlYW47XG4gICAgb3B0aW9uU2Nyb2xsOiBib29sZWFuO1xuICAgIG9wdGlvblN0cmVldFZpZXc6IGJvb2xlYW47XG4gICAgb3B0aW9uWm9vbUNvbnRyb2w6IGJvb2xlYW47XG4gICAgbG9jYXRpb25zRW50aXR5OiBzdHJpbmc7XG4gICAgYWRkcmVzc0F0dHJpYnV0ZTogc3RyaW5nO1xuICAgIGxhdGl0dWRlQXR0cmlidXRlOiBzdHJpbmc7XG4gICAgbG9uZ2l0dWRlQXR0cmlidXRlOiBzdHJpbmc7XG4gICAgc3RhdGljTG9jYXRpb25zOiBTdGF0aWNMb2NhdGlvbltdO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgd2lkdGhVbml0OiB3aWR0aFVuaXRUeXBlO1xuICAgIHpvb21MZXZlbDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgU3RhdGljTG9jYXRpb24ge1xuICAgIGFkZHJlc3M6IHN0cmluZztcbiAgICBsYXRpdHVkZTogc3RyaW5nO1xuICAgIGxvbmdpdHVkZTogc3RyaW5nO1xufVxuXG50eXBlIERhdGFTb3VyY2UgPSBcInN0YXRpY1wiIHwgXCJjb250ZXh0XCIgfCBcIlhQYXRoXCIgfCBcIm1pY3JvZmxvd1wiO1xuXG5jbGFzcyBHb29nbGVNYXBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQ8R29vZ2xlTWFwQ29udGFpbmVyUHJvcHMsIHsgYWxlcnRNZXNzYWdlPzogc3RyaW5nLCBsb2NhdGlvbnM6IExvY2F0aW9uW10gfT4ge1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uSGFuZGxlczogbnVtYmVyW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogR29vZ2xlTWFwQ29udGFpbmVyUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIGNvbnN0IGFsZXJ0TWVzc2FnZSA9IEdvb2dsZU1hcENvbnRhaW5lci52YWxpZGF0ZVByb3BzKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25IYW5kbGVzID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGFsZXJ0TWVzc2FnZSwgbG9jYXRpb25zOiBbXSB9O1xuICAgICAgICB0aGlzLnN1YnNjcmliZSh0aGlzLnByb3BzLm14T2JqZWN0KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFsZXJ0TWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoQWxlcnQsIHtcbiAgICAgICAgICAgICAgICBib290c3RyYXBTdHlsZTogXCJkYW5nZXJcIixcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwid2lkZ2V0LWdvb2dsZS1tYXBzLWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5zdGF0ZS5hbGVydE1lc3NhZ2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoTWFwLCB7XG4gICAgICAgICAgICAgICAgYXBpS2V5OiB0aGlzLnByb3BzLmFwaUtleSxcbiAgICAgICAgICAgICAgICBhdXRvWm9vbTogdGhpcy5wcm9wcy5hdXRvWm9vbSxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3MsXG4gICAgICAgICAgICAgICAgZGVmYXVsdENlbnRlckFkZHJlc3M6IHRoaXMucHJvcHMuZGVmYXVsdENlbnRlckFkZHJlc3MsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCxcbiAgICAgICAgICAgICAgICBoZWlnaHRVbml0OiB0aGlzLnByb3BzLmhlaWdodFVuaXQsXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zOiB0aGlzLnN0YXRlLmxvY2F0aW9ucyxcbiAgICAgICAgICAgICAgICBvcHRpb25EcmFnOiB0aGlzLnByb3BzLm9wdGlvbkRyYWcsXG4gICAgICAgICAgICAgICAgb3B0aW9uTWFwQ29udHJvbDogdGhpcy5wcm9wcy5vcHRpb25NYXBDb250cm9sLFxuICAgICAgICAgICAgICAgIG9wdGlvblNjcm9sbDogdGhpcy5wcm9wcy5vcHRpb25TY3JvbGwsXG4gICAgICAgICAgICAgICAgb3B0aW9uU3RyZWV0VmlldzogdGhpcy5wcm9wcy5vcHRpb25TdHJlZXRWaWV3LFxuICAgICAgICAgICAgICAgIG9wdGlvblpvb21Db250cm9sOiB0aGlzLnByb3BzLm9wdGlvblpvb21Db250cm9sLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBHb29nbGVNYXBDb250YWluZXIucGFyc2VTdHlsZSh0aGlzLnByb3BzLnN0eWxlKSxcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCxcbiAgICAgICAgICAgICAgICB3aWR0aFVuaXQ6IHRoaXMucHJvcHMud2lkdGhVbml0LFxuICAgICAgICAgICAgICAgIHpvb21MZXZlbDogdGhpcy5wcm9wcy56b29tTGV2ZWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IEdvb2dsZU1hcENvbnRhaW5lclByb3BzKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKG5leHRQcm9wcy5teE9iamVjdCk7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKG5leHRQcm9wcy5teE9iamVjdCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5hbGVydE1lc3NhZ2UpIHRoaXMuZmV0Y2hEYXRhKHRoaXMucHJvcHMubXhPYmplY3QpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkhhbmRsZXMuZm9yRWFjaCh3aW5kb3cubXguZGF0YS51bnN1YnNjcmliZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB2YWxpZGF0ZVByb3BzKHByb3BzOiBHb29nbGVNYXBDb250YWluZXJQcm9wcykge1xuICAgICAgICBsZXQgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgIGlmIChwcm9wcy5kYXRhU291cmNlID09PSBcInN0YXRpY1wiICYmICFwcm9wcy5zdGF0aWNMb2NhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJBdCBsZWFzdCBvbmUgc3RhdGljIGxvY2F0aW9uIGlzIHJlcXVpcmVkIGZvciAnRGF0YSBzb3VyY2UgJ1N0YXRpYydcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuZGF0YVNvdXJjZSA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgICAgICAgY29uc3QgaW52YWxpZExvY2F0aW9ucyA9IHByb3BzLnN0YXRpY0xvY2F0aW9ucy5maWx0ZXIobG9jYXRpb24gPT5cbiAgICAgICAgICAgICAgICAhbG9jYXRpb24uYWRkcmVzcyAmJiAhKGxvY2F0aW9uLmxhdGl0dWRlICYmIGxvY2F0aW9uLmxvbmdpdHVkZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoaW52YWxpZExvY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVGhlICdBZGRyZXNzJyBvciAnTGF0aXR1ZGUnIGFuZCAnTG9uZ2l0dWRlJyBcIlxuICAgICAgICAgICAgICAgICAgICArIFwiaXMgcmVxdWlyZWQgZm9yIHRoaXMgJ1N0YXRpYycgZGF0YSBzb3VyY2VcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuZGF0YVNvdXJjZSA9PT0gXCJYUGF0aFwiICYmICFwcm9wcy5sb2NhdGlvbnNFbnRpdHkpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlRoZSAnTG9jYXRpb25zIGVudGl0eScgaXMgcmVxdWlyZWQgZm9yICdEYXRhIHNvdXJjZScgJ1hQYXRoJ1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5kYXRhU291cmNlID09PSBcIm1pY3JvZmxvd1wiICYmICFwcm9wcy5kYXRhU291cmNlTWljcm9mbG93KSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJBICdNaWNyb2Zsb3cnIGlzIHJlcXVpcmVkIGZvciAnRGF0YSBzb3VyY2UnICdNaWNyb2Zsb3cnXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLmRhdGFTb3VyY2UgIT09IFwic3RhdGljXCIgJiYgKCFwcm9wcy5hZGRyZXNzQXR0cmlidXRlICYmXG4gICAgICAgICAgICAhKHByb3BzLmxvbmdpdHVkZUF0dHJpYnV0ZSAmJiBwcm9wcy5sYXRpdHVkZUF0dHJpYnV0ZSkpKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJUaGUgJ0FkZHJlc3MgYXR0cmlidXRlJyBvciAnTGF0aXR1ZGUgQXR0cmlidXRlJyBhbmQgJ0xvbmdpdHVkZSBhdHRyaWJ1dGUnIFwiXG4gICAgICAgICAgICAgICAgKyBcImlzIHJlcXVpcmVkIGZvciB0aGlzIGRhdGEgc291cmNlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcm9wcy5hdXRvWm9vbSAmJiBwcm9wcy56b29tTGV2ZWwgPCAyKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJab29tIGxldmVsIG11c3QgYmUgZ3JlYXRlciB0aGFuIDFcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cblxuICAgIC8vIE1lbmRpeCBkb2VzIG5vdCBzdXBwb3J0IG5lZ2F0aXZlIGFuZCBkZWNpbWFsIG51bWJlciBhcyBzdGF0aWMgaW5wdXRzLCBzbyB0aGV5IGFyZSBzdHJpbmdzLlxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VTdGF0aWNMb2NhdGlvbnMobG9jYXRpb25zOiBTdGF0aWNMb2NhdGlvbltdKTogTG9jYXRpb25bXSB7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbnMubWFwKGxvY2F0aW9uID0+ICh7XG4gICAgICAgICAgICBhZGRyZXNzOiBsb2NhdGlvbi5hZGRyZXNzLFxuICAgICAgICAgICAgbGF0aXR1ZGU6IGxvY2F0aW9uLmxhdGl0dWRlLnRyaW0oKSAhPT0gXCJcIiA/IE51bWJlcihsb2NhdGlvbi5sYXRpdHVkZSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBsb25naXR1ZGU6IGxvY2F0aW9uLmxvbmdpdHVkZS50cmltKCkgIT09IFwiXCIgPyBOdW1iZXIobG9jYXRpb24ubG9uZ2l0dWRlKSA6IHVuZGVmaW5lZFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdWJzY3JpYmUoY29udGV4dE9iamVjdD86IG1lbmRpeC5saWIuTXhPYmplY3QpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25IYW5kbGVzLmZvckVhY2god2luZG93Lm14LmRhdGEudW5zdWJzY3JpYmUpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkhhbmRsZXMgPSBbXTtcblxuICAgICAgICBpZiAoY29udGV4dE9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25IYW5kbGVzLnB1c2god2luZG93Lm14LmRhdGEuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5mZXRjaERhdGEoY29udGV4dE9iamVjdCksXG4gICAgICAgICAgICAgICAgZ3VpZDogY29udGV4dE9iamVjdC5nZXRHdWlkKClcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFkZHJlc3NBdHRyaWJ1dGUsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYXRpdHVkZUF0dHJpYnV0ZSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxvbmdpdHVkZUF0dHJpYnV0ZVxuICAgICAgICAgICAgXS5mb3JFYWNoKGF0dHIgPT4gdGhpcy5zdWJzY3JpcHRpb25IYW5kbGVzLnB1c2god2luZG93Lm14LmRhdGEuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLmZldGNoRGF0YShjb250ZXh0T2JqZWN0KSwgZ3VpZDogY29udGV4dE9iamVjdC5nZXRHdWlkKClcbiAgICAgICAgICAgIH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGZldGNoRGF0YShjb250ZXh0T2JqZWN0PzogbWVuZGl4LmxpYi5NeE9iamVjdCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhU291cmNlID09PSBcInN0YXRpY1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9jYXRpb25zOiBHb29nbGVNYXBDb250YWluZXIucGFyc2VTdGF0aWNMb2NhdGlvbnModGhpcy5wcm9wcy5zdGF0aWNMb2NhdGlvbnMpIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZGF0YVNvdXJjZSA9PT0gXCJjb250ZXh0XCIpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hMb2NhdGlvbnNCeUNvbnRleHQoY29udGV4dE9iamVjdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5kYXRhU291cmNlID09PSBcIlhQYXRoXCIgJiYgdGhpcy5wcm9wcy5sb2NhdGlvbnNFbnRpdHkpIHtcbiAgICAgICAgICAgIGNvbnN0IGd1aWQgPSBjb250ZXh0T2JqZWN0ID8gY29udGV4dE9iamVjdC5nZXRHdWlkKCkgOiBcIlwiO1xuICAgICAgICAgICAgdGhpcy5mZXRjaExvY2F0aW9uc0J5WFBhdGgoZ3VpZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5kYXRhU291cmNlID09PSBcIm1pY3JvZmxvd1wiICYmIHRoaXMucHJvcHMuZGF0YVNvdXJjZU1pY3JvZmxvdykge1xuICAgICAgICAgICAgdGhpcy5mZXRjaExvY2F0aW9uc0J5TWljcm9mbG93KHRoaXMucHJvcHMuZGF0YVNvdXJjZU1pY3JvZmxvdywgY29udGV4dE9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGZldGNoTG9jYXRpb25zQnlDb250ZXh0KGNvbnRleHRPYmplY3Q/OiBtZW5kaXgubGliLk14T2JqZWN0KSB7XG4gICAgICAgIGlmIChjb250ZXh0T2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnNldExvY2F0aW9uc0Zyb21NeE9iamVjdHMoWyBjb250ZXh0T2JqZWN0IF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaExvY2F0aW9uc0J5WFBhdGgoY29udGV4dEd1aWQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCB7IGVudGl0eUNvbnN0cmFpbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVzQ29udGV4dCA9IGVudGl0eUNvbnN0cmFpbnQgJiYgZW50aXR5Q29uc3RyYWludC5pbmRleE9mKFwiWyVDdXJyZW50T2JqZWN0JV1cIikgPiAtMTtcbiAgICAgICAgaWYgKCFjb250ZXh0R3VpZCAmJiByZXF1aXJlc0NvbnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbnM6IFtdIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29uc3RyYWludCA9IGVudGl0eUNvbnN0cmFpbnQgPyBlbnRpdHlDb25zdHJhaW50LnJlcGxhY2UoXCJbJUN1cnJlbnRPYmplY3QlXVwiLCBjb250ZXh0R3VpZCkgOiBcIlwiO1xuICAgICAgICBjb25zdCB4cGF0aCA9IGAvLyR7dGhpcy5wcm9wcy5sb2NhdGlvbnNFbnRpdHl9JHtjb25zdHJhaW50fWA7XG5cbiAgICAgICAgd2luZG93Lm14LmRhdGEuZ2V0KHtcbiAgICAgICAgICAgIGNhbGxiYWNrOiBteE9iamVjdHMgPT4gdGhpcy5zZXRMb2NhdGlvbnNGcm9tTXhPYmplY3RzKG14T2JqZWN0cyksXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IgPT5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnRNZXNzYWdlOiBgQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmV0cmlldmluZyBsb2NhdGlvbnM6ICR7ZXJyb3J9IGNvbnN0cmFpbnQgYCArIHhwYXRoLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnM6IFtdXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB4cGF0aFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZldGNoTG9jYXRpb25zQnlNaWNyb2Zsb3cobWljcm9mbG93OiBzdHJpbmcsIGNvbnRleHRPYmplY3Q/OiBtZW5kaXgubGliLk14T2JqZWN0KSB7XG4gICAgICAgIGlmIChtaWNyb2Zsb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5teC51aS5hY3Rpb24obWljcm9mbG93LCB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IChteE9iamVjdHM6IG1lbmRpeC5saWIuTXhPYmplY3RbXSkgPT4gdGhpcy5zZXRMb2NhdGlvbnNGcm9tTXhPYmplY3RzKG14T2JqZWN0cyksXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbGVydE1lc3NhZ2U6IGBBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZXRyaWV2aW5nIGxvY2F0aW9uczogJHtlcnJvci5tZXNzYWdlfSBpbiBgICsgbWljcm9mbG93LFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnM6IFtdXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGx5dG86IFwic2VsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGd1aWRzOiBjb250ZXh0T2JqZWN0ID8gWyBjb250ZXh0T2JqZWN0LmdldEd1aWQoKSBdIDogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0TG9jYXRpb25zRnJvbU14T2JqZWN0cyhteE9iamVjdHM6IG1lbmRpeC5saWIuTXhPYmplY3RbXSkge1xuICAgICAgICBjb25zdCBsb2NhdGlvbnMgPSBteE9iamVjdHMubWFwKG14T2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhdCA9IG14T2JqZWN0LmdldCh0aGlzLnByb3BzLmxhdGl0dWRlQXR0cmlidXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGxvbiA9IG14T2JqZWN0LmdldCh0aGlzLnByb3BzLmxvbmdpdHVkZUF0dHJpYnV0ZSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IG14T2JqZWN0LmdldCh0aGlzLnByb3BzLmFkZHJlc3NBdHRyaWJ1dGUpIGFzIHN0cmluZyxcbiAgICAgICAgICAgICAgICBsYXRpdHVkZTogbGF0ID8gTnVtYmVyKGxhdCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBsb24gPyBOdW1iZXIobG9uKSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9ucyB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBwYXJzZVN0eWxlID0gKHN0eWxlID0gXCJcIik6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0+IHsgLy8gRG9lc24ndCBzdXBwb3J0IGEgZmV3IHN0dWZmLlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlLnNwbGl0KFwiO1wiKS5yZWR1Y2U8e1trZXk6IHN0cmluZ106IHN0cmluZ30+KChzdHlsZU9iamVjdCwgbGluZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhaXIgPSBsaW5lLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgICAgICBpZiAocGFpci5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhaXJbMF0udHJpbSgpLnJlcGxhY2UoLygtLikvZywgbWF0Y2ggPT4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W25hbWVdID0gcGFpclsxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICB3aW5kb3cuY29uc29sZS5sb2coXCJGYWlsZWQgdG8gcGFyc2Ugc3R5bGVcIiwgc3R5bGUsIGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEdvb2dsZU1hcENvbnRhaW5lciBhcyBkZWZhdWx0LCBHb29nbGVNYXBDb250YWluZXJQcm9wcywgR29vZ2xlTWFwQ29udGFpbmVyLCBEYXRhU291cmNlIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Hb29nbGVNYXBDb250YWluZXIudHMiXSwic291cmNlUm9vdCI6IiJ9

//# sourceURL=GoogleMaps.webmodeler.js
