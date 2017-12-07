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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjAzOGYwNGUzMjI3OWVjOWE3OWYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FsZXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hcC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvc2hhbGxvd0VxdWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi9nb29nbGVfbWFwX21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL29taXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BvaW50LWdlb21ldHJ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9saWJfZ2VvL2xhdF9sbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2xpYl9nZW8vd3JhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvR29vZ2xlTWFwcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dvb2dsZU1hcHMud2VibW9kZWxlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL2dvb2dsZV9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi9tYXJrZXJfZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRlbWl0dGVyMy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvZ29vZ2xlX21hcF9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL2dvb2dsZV9tYXBfbWFya2Vyc19wcmVyZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2xvYWRlcnMvZ29vZ2xlX21hcF9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjcmlwdGpzL2Rpc3Qvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2dlby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvbGliX2dlby90cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2FycmF5X2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvaXNfcGxhaW5fb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9waWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9yYWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL21hdGgvbG9nMi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvaXNOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2RldGVjdEVsZW1lbnRSZXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFya2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dvb2dsZU1hcENvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsa0M7Ozs7OztBQ0FBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIscUJBQXFCO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7OztBQUdBOzs7QUFHQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsaUVBQWlFLHFDQUFxQztBQUN0RztBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsNEI7Ozs7Ozs7O0FDdGhDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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LENBQUM7UUFFYyw2QkFBVSxHQUFHLFVBQUMsS0FBVTtZQUFWLGtDQUFVO1lBQ25DLElBQUksQ0FBQztnQkFDRCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQTBCLFVBQUMsV0FBVyxFQUFFLElBQUk7b0JBQ3RFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEIsSUFBTSxNQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsZUFBSyxJQUFJLFlBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO3dCQUM5RSxXQUFXLENBQUMsTUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QyxDQUFDO29CQUNELE1BQU0sQ0FBQyxXQUFXLENBQUM7Z0JBQ3ZCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNYLENBQUM7WUFBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUViLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFDTCx5QkFBQztLQUFBLENBM01nQyxpQkFBUyxHQTJNekM7SUFFOEIscUNBQU87SUFBMkIsZ0RBQWtCIiwiZmlsZSI6InNyYy9Hb29nbGVNYXBzQ29udGV4dC53ZWJtb2RlbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIwMzhmMDRlMzIyNzllYzlhNzlmIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU0ZDLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRQcm9wcyB7XG4gICAgbWVzc2FnZT86IHN0cmluZztcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgYm9vdHN0cmFwU3R5bGU6IFwiZGVmYXVsdFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwiaW5mb1wiIHwgXCJ3YXJuaW5nXCIgfCBcImRhbmdlclwiO1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnQ6IFNGQzxBbGVydFByb3BzPiA9ICh7IGNsYXNzTmFtZSwgYm9vdHN0cmFwU3R5bGUsIG1lc3NhZ2UgfSkgPT5cbiAgICBtZXNzYWdlXG4gICAgICAgID8gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhgYWxlcnQgYWxlcnQtJHtib290c3RyYXBTdHlsZX1gLCBjbGFzc05hbWUpIH0sIG1lc3NhZ2UpXG4gICAgICAgIDogbnVsbDtcblxuQWxlcnQuZGlzcGxheU5hbWUgPSBcIkFsZXJ0XCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BbGVydC50cyIsImltcG9ydCB7IENTU1Byb3BlcnRpZXMsIENvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCAqIGFzIGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBHb29nbGVNYXAsIHsgR29vZ2xlTWFwTG9hZGVyLCBMYXRMbmcgfSBmcm9tIFwiZ29vZ2xlLW1hcC1yZWFjdFwiO1xuXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCIuL0FsZXJ0XCI7XG5pbXBvcnQgeyBNYXJrZXIsIE1hcmtlclByb3BzIH0gZnJvbSBcIi4vTWFya2VyXCI7XG5cbmltcG9ydCBcIi4uL3VpL0dvb2dsZU1hcHMuY3NzXCI7XG5cbmV4cG9ydCB0eXBlIHdpZHRoVW5pdFR5cGUgPSBcInBlcmNlbnRhZ2VcIiB8IFwicGl4ZWxzXCI7XG5leHBvcnQgdHlwZSBoZWlnaHRVbml0VHlwZSA9IFwicGVyY2VudGFnZU9mV2lkdGhcIiB8IFwicGVyY2VudGFnZU9mUGFyZW50XCIgfCBcInBpeGVsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uIHtcbiAgICBhZGRyZXNzPzogc3RyaW5nO1xuICAgIGxhdGl0dWRlPzogbnVtYmVyO1xuICAgIGxvbmdpdHVkZT86IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFwUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBhcGlLZXk/OiBzdHJpbmc7XG4gICAgYXV0b1pvb206IGJvb2xlYW47XG4gICAgZGVmYXVsdENlbnRlckFkZHJlc3M6IHN0cmluZztcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBoZWlnaHRVbml0OiBoZWlnaHRVbml0VHlwZTtcbiAgICBsb2NhdGlvbnM6IExvY2F0aW9uW107XG4gICAgb3B0aW9uRHJhZzogYm9vbGVhbjtcbiAgICBvcHRpb25NYXBDb250cm9sOiBib29sZWFuO1xuICAgIG9wdGlvblNjcm9sbDogYm9vbGVhbjtcbiAgICBvcHRpb25TdHJlZXRWaWV3OiBib29sZWFuO1xuICAgIG9wdGlvblpvb21Db250cm9sOiBib29sZWFuO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgd2lkdGhVbml0OiB3aWR0aFVuaXRUeXBlO1xuICAgIHpvb21MZXZlbDogbnVtYmVyO1xuICAgIHN0eWxlOiBvYmplY3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFwU3RhdGUge1xuICAgIGFsZXJ0TWVzc2FnZT86IHN0cmluZztcbiAgICBjZW50ZXI/OiBMYXRMbmc7XG4gICAgaXNMb2FkZWQ/OiBib29sZWFuO1xuICAgIGxvY2F0aW9ucz86IExvY2F0aW9uW107XG59XG5cbmV4cG9ydCBjbGFzcyBNYXAgZXh0ZW5kcyBDb21wb25lbnQ8TWFwUHJvcHMsIE1hcFN0YXRlPiB7XG4gICAgLy8gTG9jYXRpb24gb2YgTWVuZGl4IE5ldGhlcmxhbmRzIG9mZmljZVxuICAgIHByaXZhdGUgZGVmYXVsdENlbnRlckxvY2F0aW9uOiBMYXRMbmcgPSB7IGxhdDogNTEuOTEwNzk2MywgbG5nOiA0LjQ3ODk4NzggfTtcbiAgICBwcml2YXRlIG1hcExvYWRlcj86IEdvb2dsZU1hcExvYWRlcjtcbiAgICBwcml2YXRlIGJvdW5kczogZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IE1hcFByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2VudGVyOiB0aGlzLmRlZmF1bHRDZW50ZXJMb2NhdGlvbixcbiAgICAgICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2F0aW9uczogcHJvcHMubG9jYXRpb25zXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlT25Hb29nbGVBcGlMb2FkZWQgPSB0aGlzLmhhbmRsZU9uR29vZ2xlQXBpTG9hZGVkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SZXNpemVJZnJhbWUgPSB0aGlzLm9uUmVzaXplSWZyYW1lLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIndpZGdldC1nb29nbGUtbWFwcy13cmFwcGVyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgICAgICAgICAgICBzdHlsZTogdGhpcy5nZXRTdHlsZSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3aWRnZXQtZ29vZ2xlLW1hcHNcIiB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoQWxlcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwU3R5bGU6IFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJ3aWRnZXQtZ29vZ2xlLW1hcHMtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5zdGF0ZS5hbGVydE1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KEdvb2dsZU1hcCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwVVJMS2V5czogeyBrZXk6IHRoaXMucHJvcHMuYXBpS2V5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IHRoaXMuc3RhdGUuY2VudGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFpvb206IHRoaXMucHJvcHMuem9vbUxldmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25Hb29nbGVBcGlMb2FkZWQ6IHRoaXMuaGFuZGxlT25Hb29nbGVBcGlMb2FkZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0aGlzLnByb3BzLm9wdGlvbkRyYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbHNjcmVlbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiB0aGlzLnByb3BzLm9wdGlvbk1hcENvbnRyb2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Wm9vbTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluWm9vbTogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5ab29tT3ZlcnJpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRCb3VuZHNPblJlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGx3aGVlbDogdGhpcy5wcm9wcy5vcHRpb25TY3JvbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IHRoaXMucHJvcHMub3B0aW9uU3RyZWV0VmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tQ29udHJvbDogdGhpcy5wcm9wcy5vcHRpb25ab29tQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Qm91bmRzT25SZXNpemU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZXNJV2FudFRvVXNlR29vZ2xlTWFwQXBpSW50ZXJuYWxzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTWFrZXJzKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0VXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogTWFwUHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uczogbmV4dFByb3BzLmxvY2F0aW9ucyB9KTtcbiAgICAgICAgdGhpcy5yZXNvbHZlQWRkcmVzc2VzKG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldElmcmFtZSgpKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplSWZyYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VXBFdmVudHMoKSB7XG4gICAgICAgIC8vIEEgd29ya2Fyb3VuZCBmb3IgYXR0YWNoaW5nIHRoZSByZXNpemUgZXZlbnQgdG8gdGhlIElmcmFtZSB3aW5kb3cgYmVjYXVzZSB0aGUgZ29vZ2xlLW1hcC1yZWFjdFxuICAgICAgICAvLyBsaWJyYXJ5IGRvZXMgbm90IHN1cHBvcnQgaXQuIFRoaXMgZml4IHdpbGwgYmUgZG9uZSBpbiB0aGUgd2ViIG1vZGVsZXIgcHJldmlldyBjbGFzcyB3aGVuIHRoZVxuICAgICAgICAvLyBnb29nbGUtbWFwLXJlYWN0IGxpYnJhcnkgc3RhcnRzIHN1cHBvcnRpbmcgbGlzdGVuaW5nIHRvIElmcmFtZSBldmVudHMuXG4gICAgICAgIGNvbnN0IGlGcmFtZSA9IHRoaXMuZ2V0SWZyYW1lKCk7XG4gICAgICAgIGlmIChpRnJhbWUpIHtcbiAgICAgICAgICAgIGlGcmFtZS5jb250ZW50V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblJlc2l6ZUlmcmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldElmcmFtZSgpOiBIVE1MSUZyYW1lRWxlbWVudCB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidC1wYWdlLWVkaXRvci1pZnJhbWVcIilbMF0gYXMgSFRNTElGcmFtZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlc2l6ZUlmcmFtZShldmVudDogQ3VzdG9tRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMubWFwTG9hZGVyKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbENlbnRlciA9IHRoaXMubWFwTG9hZGVyLm1hcC5nZXRDZW50ZXIoKTtcbiAgICAgICAgICAgIHRoaXMubWFwTG9hZGVyLm1hcHMuZXZlbnQudHJpZ2dlcih0aGlzLm1hcExvYWRlci5tYXAsIFwicmVzaXplXCIpO1xuICAgICAgICAgICAgdGhpcy5tYXBMb2FkZXIubWFwLnNldENlbnRlcihvcmlnaW5hbENlbnRlcik7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZXNpemVcIikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRTdHlsZSgpOiBvYmplY3Qge1xuICAgICAgICBjb25zdCBzdHlsZTogQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoVW5pdCA9PT0gXCJwZXJjZW50YWdlXCIgPyBgJHt0aGlzLnByb3BzLndpZHRofSVgIDogYCR7dGhpcy5wcm9wcy53aWR0aH1weGBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaGVpZ2h0VW5pdCA9PT0gXCJwZXJjZW50YWdlT2ZXaWR0aFwiKSB7XG4gICAgICAgICAgICBzdHlsZS5wYWRkaW5nQm90dG9tID0gYCR7dGhpcy5wcm9wcy5oZWlnaHR9JWA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5oZWlnaHRVbml0ID09PSBcInBpeGVsc1wiKSB7XG4gICAgICAgICAgICBzdHlsZS5wYWRkaW5nQm90dG9tID0gYCR7dGhpcy5wcm9wcy5oZWlnaHR9cHhgO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaGVpZ2h0VW5pdCA9PT0gXCJwZXJjZW50YWdlT2ZQYXJlbnRcIikge1xuICAgICAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5wcm9wcy5oZWlnaHR9JWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyAuLi5zdHlsZSwgLi4uIHRoaXMucHJvcHMuc3R5bGUgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZU9uR29vZ2xlQXBpTG9hZGVkKG1hcExvYWRlcjogR29vZ2xlTWFwTG9hZGVyKSB7XG4gICAgICAgIHRoaXMubWFwTG9hZGVyID0gbWFwTG9hZGVyO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkZWQ6IHRydWUgfSk7XG4gICAgICAgIHRoaXMucmVzb2x2ZUFkZHJlc3Nlcyh0aGlzLnByb3BzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUJvdW5kcyhwcm9wczogTWFwUHJvcHMsIGxvY2F0aW9uOiBMb2NhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5tYXBMb2FkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYm91bmRzLmV4dGVuZChuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxvY2F0aW9uLmxhdGl0dWRlIGFzIG51bWJlciwgbG9jYXRpb24ubG9uZ2l0dWRlIGFzIG51bWJlcikpO1xuICAgICAgICAgICAgdGhpcy5tYXBMb2FkZXIubWFwLmZpdEJvdW5kcyh0aGlzLmJvdW5kcyk7XG4gICAgICAgICAgICB0aGlzLnNldFpvb20ocHJvcHMpO1xuICAgICAgICAgICAgaWYgKCFwcm9wcy5kZWZhdWx0Q2VudGVyQWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjZW50ZXI6IHsgbGF0OiB0aGlzLmJvdW5kcy5nZXRDZW50ZXIoKS5sYXQoKSwgbG5nOiB0aGlzLmJvdW5kcy5nZXRDZW50ZXIoKS5sbmcoKSB9IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRab29tKHByb3BzOiBNYXBQcm9wcyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5tYXBMb2FkZXIpIHtcbiAgICAgICAgICAgIGxldCB6b29tID0gdGhpcy5tYXBMb2FkZXIubWFwLmdldFpvb20oKTtcbiAgICAgICAgICAgIGlmIChwcm9wcy5hdXRvWm9vbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRCb3VuZFpvb20gPSA2O1xuICAgICAgICAgICAgICAgIGlmICh6b29tICYmICh6b29tID4gZGVmYXVsdEJvdW5kWm9vbSkgfHwgIXpvb20pIHtcbiAgICAgICAgICAgICAgICAgICAgem9vbSA9IGRlZmF1bHRCb3VuZFpvb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB6b29tID0gcHJvcHMuem9vbUxldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYXBMb2FkZXIubWFwLnNldFpvb20oem9vbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc29sdmVBZGRyZXNzZXMocHJvcHM6IE1hcFByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcExvYWRlcikge1xuICAgICAgICAgICAgdGhpcy5ib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRab29tKHByb3BzKTtcbiAgICAgICAgaWYgKHByb3BzLmxvY2F0aW9ucyAmJiBwcm9wcy5sb2NhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBwcm9wcy5sb2NhdGlvbnMuZm9yRWFjaChsb2NhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkTG9jYXRpb24obG9jYXRpb24pICYmIGxvY2F0aW9uLmFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRMb2NhdGlvbihsb2NhdGlvbi5hZGRyZXNzLCBsb2NhdGlvbkxvb2t1cCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb25Mb29rdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5sYXRpdHVkZSA9IE51bWJlcihsb2NhdGlvbkxvb2t1cC5sYXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmxvbmdpdHVkZSA9IE51bWJlcihsb2NhdGlvbkxvb2t1cC5sbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbnM6IHByb3BzLmxvY2F0aW9ucyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJvdW5kcyhwcm9wcywgbG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmFsaWRMb2NhdGlvbihsb2NhdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCb3VuZHMocHJvcHMsIGxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuZGVmYXVsdENlbnRlckFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TG9jYXRpb24ocHJvcHMuZGVmYXVsdENlbnRlckFkZHJlc3MsIGxvY2F0aW9uID0+XG4gICAgICAgICAgICAgICAgbG9jYXRpb24gPyB0aGlzLnNldFN0YXRlKHsgY2VudGVyOiBsb2NhdGlvbiB9KSA6IHRoaXMuc2V0U3RhdGUoeyBjZW50ZXI6IHRoaXMuZGVmYXVsdENlbnRlckxvY2F0aW9uIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdmFsaWRMb2NhdGlvbihsb2NhdGlvbjogTG9jYXRpb24pOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgeyBsYXRpdHVkZTogbGF0LCBsb25naXR1ZGU6IGxuZyB9ID0gbG9jYXRpb247XG4gICAgICAgIHJldHVybiB0eXBlb2YgbGF0ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBsbmcgPT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgICYmIGxhdCA8PSA5MCAmJiBsYXQgPj0gLTkwXG4gICAgICAgICAgICAmJiBsbmcgPD0gMTgwICYmIGxuZyA+PSAtMTgwXG4gICAgICAgICAgICAmJiAhKGxhdCA9PT0gMCAmJiBsbmcgPT09IDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TG9jYXRpb24oYWRkcmVzczogc3RyaW5nLCBjYWxsYmFjazogKHJlc3VsdD86IExhdExuZykgPT4gdm9pZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0xvYWRlZCkge1xuICAgICAgICAgICAgY29uc3QgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcbiAgICAgICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoeyBhZGRyZXNzIH0sIChyZXN1bHRzLCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5PSykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxlcnRNZXNzYWdlOiBcIlwiIH0pO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9WRVJfUVVFUllfTElNSVQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsZXJ0TWVzc2FnZTogYEdvb2dsZSBmcmVlIHF1b3RhIHJlcXVlc3QgZXhjZWVkZWQuYCB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxlcnRNZXNzYWdlOiBgQ2FuIG5vdCBmaW5kIGFkZHJlc3MgJHthZGRyZXNzfWAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVNYWtlcnMoKTogQXJyYXk8UmVhY3RFbGVtZW50PE1hcmtlclByb3BzPj4ge1xuICAgICAgICBjb25zdCBtYXJrZXJFbGVtZW50czogQXJyYXk8UmVhY3RFbGVtZW50PE1hcmtlclByb3BzPj4gPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9jYXRpb25zICYmIHRoaXMuc3RhdGUubG9jYXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2NhdGlvbnMubWFwKChsb2NhdGlvbk9iamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSA9IGxvY2F0aW9uT2JqZWN0O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkTG9jYXRpb24obG9jYXRpb25PYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlckVsZW1lbnRzLnB1c2goY3JlYXRlRWxlbWVudChNYXJrZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IGxhdGl0dWRlIGFzIG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogbG9uZ2l0dWRlIGFzIG51bWJlclxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hcmtlckVsZW1lbnRzO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01hcC50cyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqIFxuICovXG5cbi8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gIGlmICh4ID09PSB5KSB7XG4gICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAvLyBBZGRlZCB0aGUgbm9uemVybyB5IGNoZWNrIHRvIG1ha2UgRmxvdyBoYXBweSwgYnV0IGl0IGlzIHJlZHVuZGFudFxuICAgIHJldHVybiB4ICE9PSAwIHx8IHkgIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuXG4vKipcbiAqIFBlcmZvcm1zIGVxdWFsaXR5IGJ5IGl0ZXJhdGluZyB0aHJvdWdoIGtleXMgb24gYW4gb2JqZWN0IGFuZCByZXR1cm5pbmcgZmFsc2VcbiAqIHdoZW4gYW55IGtleSBoYXMgdmFsdWVzIHdoaWNoIGFyZSBub3Qgc3RyaWN0bHkgZXF1YWwgYmV0d2VlbiB0aGUgYXJndW1lbnRzLlxuICogUmV0dXJucyB0cnVlIHdoZW4gdGhlIHZhbHVlcyBvZiBhbGwga2V5cyBhcmUgc3RyaWN0bHkgZXF1YWwuXG4gKi9cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hhbGxvd0VxdWFsO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3NoYWxsb3dFcXVhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJ2ZianMvbGliL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX29taXQgPSByZXF1aXJlKCcuL3V0aWxzL29taXQnKTtcblxudmFyIF9vbWl0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29taXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5cbnZhciBtYWluU3R5bGUgPSB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBsZWZ0OiAwLFxuICB0b3A6IDAsXG4gIG1hcmdpbjogMCxcbiAgcGFkZGluZzogMCxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbn07XG5cbnZhciBzdHlsZSA9IHtcbiAgd2lkdGg6IDAsXG4gIGhlaWdodDogMCxcbiAgbGVmdDogMCxcbiAgdG9wOiAwLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG59O1xuXG52YXIgR29vZ2xlTWFwTWFya2VycyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHb29nbGVNYXBNYXJrZXJzLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBHb29nbGVNYXBNYXJrZXJzKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdvb2dsZU1hcE1hcmtlcnMpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEdvb2dsZU1hcE1hcmtlcnMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHb29nbGVNYXBNYXJrZXJzKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuX2dldFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2hpbGRyZW46IF90aGlzLnByb3BzLmRpc3BhdGNoZXIuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgdXBkYXRlQ291bnRlcjogX3RoaXMucHJvcHMuZGlzcGF0Y2hlci5nZXRVcGRhdGVDb3VudGVyKClcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoYW5nZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLmRpbWVzaW9uc0NhY2hlXykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmV2Q2hpbGRDb3VudCA9IChfdGhpcy5zdGF0ZS5jaGlsZHJlbiB8fCBbXSkubGVuZ3RoO1xuICAgICAgdmFyIHN0YXRlID0gX3RoaXMuX2dldFN0YXRlKCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHN0YXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoc3RhdGUuY2hpbGRyZW4gfHwgW10pLmxlbmd0aCAhPT0gcHJldkNoaWxkQ291bnQgJiYgX3RoaXMuX29uTW91c2VDaGFuZ2VIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uQ2hpbGRDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkQ2xpY2spIHtcbiAgICAgICAgaWYgKF90aGlzLmhvdmVyQ2hpbGRQcm9wc18pIHtcbiAgICAgICAgICB2YXIgaG92ZXJLZXkgPSBfdGhpcy5ob3ZlcktleV87XG4gICAgICAgICAgdmFyIGNoaWxkUHJvcHMgPSBfdGhpcy5ob3ZlckNoaWxkUHJvcHNfO1xuICAgICAgICAgIC8vIGNsaWNrIHdvcmtzIG9ubHkgb24gaG92ZXJlZCBpdGVtXG4gICAgICAgICAgX3RoaXMucHJvcHMub25DaGlsZENsaWNrKGhvdmVyS2V5LCBjaGlsZFByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25DaGlsZE1vdXNlRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VEb3duKSB7XG4gICAgICAgIGlmIChfdGhpcy5ob3ZlckNoaWxkUHJvcHNfKSB7XG4gICAgICAgICAgdmFyIGhvdmVyS2V5ID0gX3RoaXMuaG92ZXJLZXlfO1xuICAgICAgICAgIHZhciBjaGlsZFByb3BzID0gX3RoaXMuaG92ZXJDaGlsZFByb3BzXztcbiAgICAgICAgICAvLyB3b3JrcyBvbmx5IG9uIGhvdmVyZWQgaXRlbVxuICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hpbGRNb3VzZURvd24oaG92ZXJLZXksIGNoaWxkUHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoaWxkTW91c2VFbnRlciA9IGZ1bmN0aW9uIChob3ZlcktleSwgY2hpbGRQcm9wcykge1xuICAgICAgaWYgKCFfdGhpcy5kaW1lc2lvbnNDYWNoZV8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DaGlsZE1vdXNlRW50ZXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DaGlsZE1vdXNlRW50ZXIoaG92ZXJLZXksIGNoaWxkUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5ob3ZlckNoaWxkUHJvcHNfID0gY2hpbGRQcm9wcztcbiAgICAgIF90aGlzLmhvdmVyS2V5XyA9IGhvdmVyS2V5O1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcktleTogaG92ZXJLZXkgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoaWxkTW91c2VMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuZGltZXNpb25zQ2FjaGVfKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGhvdmVyS2V5ID0gX3RoaXMuaG92ZXJLZXlfO1xuICAgICAgdmFyIGNoaWxkUHJvcHMgPSBfdGhpcy5ob3ZlckNoaWxkUHJvcHNfO1xuXG4gICAgICBpZiAoaG92ZXJLZXkgIT09IHVuZGVmaW5lZCAmJiBob3ZlcktleSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DaGlsZE1vdXNlTGVhdmUpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VMZWF2ZShob3ZlcktleSwgY2hpbGRQcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5ob3ZlcktleV8gPSBudWxsO1xuICAgICAgICBfdGhpcy5ob3ZlckNoaWxkUHJvcHNfID0gbnVsbDtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcktleTogbnVsbCB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX29uTW91c2VBbGxvdyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICBfdGhpcy5fb25DaGlsZE1vdXNlTGVhdmUoKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuYWxsb3dNb3VzZV8gPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uTW91c2VDaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmFsbG93TW91c2VfKSB7XG4gICAgICAgIF90aGlzLl9vbk1vdXNlQ2hhbmdlSGFuZGxlclJhZigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25Nb3VzZUNoYW5nZUhhbmRsZXJSYWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLmRpbWVzaW9uc0NhY2hlXykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBtcCA9IF90aGlzLnByb3BzLmRpc3BhdGNoZXIuZ2V0TW91c2VQb3NpdGlvbigpO1xuXG4gICAgICBpZiAobXApIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgICB2YXIgaG92ZXJEaXN0YW5jZSA9IF90aGlzLnByb3BzLmdldEhvdmVyRGlzdGFuY2UoKTtcblxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChfdGhpcy5zdGF0ZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBjaGlsZEluZGV4KSB7XG4gICAgICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuO1xuICAgICAgICAgIC8vIGxheWVyc1xuICAgICAgICAgIGlmIChjaGlsZC5wcm9wcy5sYXRMbmcgPT09IHVuZGVmaW5lZCAmJiBjaGlsZC5wcm9wcy5sYXQgPT09IHVuZGVmaW5lZCAmJiBjaGlsZC5wcm9wcy5sbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjaGlsZEtleSA9IGNoaWxkLmtleSAhPT0gdW5kZWZpbmVkICYmIGNoaWxkLmtleSAhPT0gbnVsbCA/IGNoaWxkLmtleSA6IGNoaWxkSW5kZXg7XG4gICAgICAgICAgdmFyIGRpc3QgPSBfdGhpcy5wcm9wcy5kaXN0YW5jZVRvTW91c2UoX3RoaXMuZGltZXNpb25zQ2FjaGVfW2NoaWxkS2V5XSwgbXAsIGNoaWxkLnByb3BzKTtcbiAgICAgICAgICBpZiAoZGlzdCA8IGhvdmVyRGlzdGFuY2UpIHtcbiAgICAgICAgICAgIGRpc3RhbmNlcy5wdXNoKHtcbiAgICAgICAgICAgICAga2V5OiBjaGlsZEtleSxcbiAgICAgICAgICAgICAgZGlzdDogZGlzdCxcbiAgICAgICAgICAgICAgcHJvcHM6IGNoaWxkLnByb3BzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkaXN0YW5jZXMubGVuZ3RoKSB7XG4gICAgICAgICAgZGlzdGFuY2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhLmRpc3QgLSBiLmRpc3Q7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIGhvdmVyS2V5ID0gZGlzdGFuY2VzWzBdLmtleTtcbiAgICAgICAgICB2YXIgY2hpbGRQcm9wcyA9IGRpc3RhbmNlc1swXS5wcm9wcztcblxuICAgICAgICAgIGlmIChfdGhpcy5ob3ZlcktleV8gIT09IGhvdmVyS2V5KSB7XG4gICAgICAgICAgICBfdGhpcy5fb25DaGlsZE1vdXNlTGVhdmUoKTtcblxuICAgICAgICAgICAgX3RoaXMuX29uQ2hpbGRNb3VzZUVudGVyKGhvdmVyS2V5LCBjaGlsZFByb3BzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuX29uQ2hpbGRNb3VzZUxlYXZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLl9vbkNoaWxkTW91c2VMZWF2ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fZ2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBjaGlsZEtleSA9IGtleTtcbiAgICAgIHJldHVybiBfdGhpcy5kaW1lc2lvbnNDYWNoZV9bY2hpbGRLZXldO1xuICAgIH07XG5cbiAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaGVyLm9uKCdrT05fQ0hBTkdFJywgX3RoaXMuX29uQ2hhbmdlSGFuZGxlcik7XG4gICAgX3RoaXMucHJvcHMuZGlzcGF0Y2hlci5vbigna09OX01PVVNFX1BPU0lUSU9OX0NIQU5HRScsIF90aGlzLl9vbk1vdXNlQ2hhbmdlSGFuZGxlcik7XG4gICAgX3RoaXMucHJvcHMuZGlzcGF0Y2hlci5vbigna09OX0NMSUNLJywgX3RoaXMuX29uQ2hpbGRDbGljayk7XG4gICAgX3RoaXMucHJvcHMuZGlzcGF0Y2hlci5vbigna09OX01ET1dOJywgX3RoaXMuX29uQ2hpbGRNb3VzZURvd24pO1xuXG4gICAgX3RoaXMuZGltZXNpb25zQ2FjaGVfID0ge307XG4gICAgX3RoaXMuaG92ZXJLZXlfID0gbnVsbDtcbiAgICBfdGhpcy5ob3ZlckNoaWxkUHJvcHNfID0gbnVsbDtcbiAgICBfdGhpcy5hbGxvd01vdXNlXyA9IHRydWU7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IF9leHRlbmRzKHt9LCBfdGhpcy5fZ2V0U3RhdGUoKSwgeyBob3ZlcktleTogbnVsbCB9KTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR29vZ2xlTWFwTWFya2VycywgW3tcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmV4cGVyaW1lbnRhbCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkoKDAsIF9vbWl0Mi5kZWZhdWx0KSh0aGlzLnN0YXRlLCBbJ2hvdmVyS2V5J10pLCAoMCwgX29taXQyLmRlZmF1bHQpKG5leHRTdGF0ZSwgWydob3ZlcktleSddKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoZXIucmVtb3ZlTGlzdGVuZXIoJ2tPTl9DSEFOR0UnLCB0aGlzLl9vbkNoYW5nZUhhbmRsZXIpO1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaGVyLnJlbW92ZUxpc3RlbmVyKCdrT05fTU9VU0VfUE9TSVRJT05fQ0hBTkdFJywgdGhpcy5fb25Nb3VzZUNoYW5nZUhhbmRsZXIpO1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaGVyLnJlbW92ZUxpc3RlbmVyKCdrT05fQ0xJQ0snLCB0aGlzLl9vbkNoaWxkQ2xpY2spO1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaGVyLnJlbW92ZUxpc3RlbmVyKCdrT05fTURPV04nLCB0aGlzLl9vbkNoaWxkTW91c2VEb3duKTtcblxuICAgICAgdGhpcy5kaW1lc2lvbnNDYWNoZV8gPSBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgbWFpbkVsZW1lbnRTdHlsZSA9IHRoaXMucHJvcHMuc3R5bGUgfHwgbWFpblN0eWxlO1xuICAgICAgdGhpcy5kaW1lc2lvbnNDYWNoZV8gPSB7fTtcblxuICAgICAgdmFyIG1hcmtlcnMgPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ubWFwKHRoaXMuc3RhdGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgY2hpbGRJbmRleCkge1xuICAgICAgICBpZiAoIWNoaWxkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMubGF0TG5nID09PSB1bmRlZmluZWQgJiYgY2hpbGQucHJvcHMubGF0ID09PSB1bmRlZmluZWQgJiYgY2hpbGQucHJvcHMubG5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgJGdlb1NlcnZpY2U6IF90aGlzMi5wcm9wcy5nZW9TZXJ2aWNlLFxuICAgICAgICAgICAgJG9uTW91c2VBbGxvdzogX3RoaXMyLl9vbk1vdXNlQWxsb3csXG4gICAgICAgICAgICAkcHJlcmVuZGVyOiBfdGhpczIucHJvcHMucHJlcmVuZGVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGF0TG5nID0gY2hpbGQucHJvcHMubGF0TG5nICE9PSB1bmRlZmluZWQgPyBjaGlsZC5wcm9wcy5sYXRMbmcgOiB7IGxhdDogY2hpbGQucHJvcHMubGF0LCBsbmc6IGNoaWxkLnByb3BzLmxuZyB9O1xuXG4gICAgICAgIHZhciBwdCA9IF90aGlzMi5wcm9wcy5nZW9TZXJ2aWNlLnByb2plY3QobGF0TG5nLCBfdGhpczIucHJvcHMucHJvamVjdEZyb21MZWZ0VG9wKTtcblxuICAgICAgICB2YXIgc3R5bGVQdFBvcyA9IHtcbiAgICAgICAgICBsZWZ0OiBwdC54LFxuICAgICAgICAgIHRvcDogcHQueVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBkeCA9IDA7XG4gICAgICAgIHZhciBkeSA9IDA7XG5cbiAgICAgICAgaWYgKCFfdGhpczIucHJvcHMucHJvamVjdEZyb21MZWZ0VG9wKSB7XG4gICAgICAgICAgLy8gY2VudGVyIHByb2plY3Rpb25cbiAgICAgICAgICBpZiAoX3RoaXMyLnByb3BzLmdlb1NlcnZpY2UuaGFzU2l6ZSgpKSB7XG4gICAgICAgICAgICBkeCA9IF90aGlzMi5wcm9wcy5nZW9TZXJ2aWNlLmdldFdpZHRoKCkgLyAyO1xuICAgICAgICAgICAgZHkgPSBfdGhpczIucHJvcHMuZ2VvU2VydmljZS5nZXRIZWlnaHQoKSAvIDI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG8gcHJldmVudCByZXJlbmRlciBvbiBjaGlsZCBlbGVtZW50IGkgbmVlZCB0byBwYXNzXG4gICAgICAgIC8vIGNvbnN0IHBhcmFtcyAkZ2V0RGltZW5zaW9ucyBhbmQgJGRpbWVuc2lvbktleSBpbnN0ZWFkIG9mIGRpbWVuc2lvbiBvYmplY3RcbiAgICAgICAgdmFyIGNoaWxkS2V5ID0gY2hpbGQua2V5ICE9PSB1bmRlZmluZWQgJiYgY2hpbGQua2V5ICE9PSBudWxsID8gY2hpbGQua2V5IDogY2hpbGRJbmRleDtcblxuICAgICAgICBfdGhpczIuZGltZXNpb25zQ2FjaGVfW2NoaWxkS2V5XSA9IF9leHRlbmRzKHtcbiAgICAgICAgICB4OiBwdC54ICsgZHgsXG4gICAgICAgICAgeTogcHQueSArIGR5XG4gICAgICAgIH0sIGxhdExuZyk7XG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogY2hpbGRLZXksXG4gICAgICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIHN0eWxlLCBzdHlsZVB0UG9zKSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2hpbGQucHJvcHMuJG1hcmtlckhvbGRlckNsYXNzTmFtZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgJGhvdmVyOiBjaGlsZEtleSA9PT0gX3RoaXMyLnN0YXRlLmhvdmVyS2V5LFxuICAgICAgICAgICAgJGdldERpbWVuc2lvbnM6IF90aGlzMi5fZ2V0RGltZW5zaW9ucyxcbiAgICAgICAgICAgICRkaW1lbnNpb25LZXk6IGNoaWxkS2V5LFxuICAgICAgICAgICAgJGdlb1NlcnZpY2U6IF90aGlzMi5wcm9wcy5nZW9TZXJ2aWNlLFxuICAgICAgICAgICAgJG9uTW91c2VBbGxvdzogX3RoaXMyLl9vbk1vdXNlQWxsb3csXG4gICAgICAgICAgICAkcHJlcmVuZGVyOiBfdGhpczIucHJvcHMucHJlcmVuZGVyXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0eWxlOiBtYWluRWxlbWVudFN0eWxlIH0sXG4gICAgICAgIG1hcmtlcnNcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdvb2dsZU1hcE1hcmtlcnM7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Hb29nbGVNYXBNYXJrZXJzLnByb3BUeXBlcyA9IHtcbiAgZ2VvU2VydmljZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgZGlzdGFuY2VUb01vdXNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGRpc3BhdGNoZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICBvbkNoaWxkQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DaGlsZE1vdXNlRG93bjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoaWxkTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoaWxkTW91c2VFbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBnZXRIb3ZlckRpc3RhbmNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHByb2plY3RGcm9tTGVmdFRvcDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBwcmVyZW5kZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbFxufTtcbkdvb2dsZU1hcE1hcmtlcnMuZGVmYXVsdFByb3BzID0ge1xuICBwcm9qZWN0RnJvbUxlZnRUb3A6IGZhbHNlLFxuICBwcmVyZW5kZXI6IGZhbHNlXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gR29vZ2xlTWFwTWFya2VycztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi9nb29nbGVfbWFwX21hcmtlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2RsaXRlL3JlY29tcG9zZS9ibG9iL21hc3Rlci9zcmMvcGFja2FnZXMvcmVjb21wb3NlL3V0aWxzL29taXQuanNcbnZhciBvbWl0ID0gZnVuY3Rpb24gb21pdChvYmosIGtleXMpIHtcbiAgdmFyIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBbXSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKGtleSBpbiByZXN0KSB7XG4gICAgICBkZWxldGUgcmVzdFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9taXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvb21pdC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xuXG5mdW5jdGlvbiBQb2ludCh4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xufVxuXG5Qb2ludC5wcm90b3R5cGUgPSB7XG4gICAgY2xvbmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTsgfSxcblxuICAgIGFkZDogICAgIGZ1bmN0aW9uKHApIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fYWRkKHApOyAgICAgfSxcbiAgICBzdWI6ICAgICBmdW5jdGlvbihwKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3N1YihwKTsgICAgIH0sXG4gICAgbXVsdDogICAgZnVuY3Rpb24oaykgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9tdWx0KGspOyAgICB9LFxuICAgIGRpdjogICAgIGZ1bmN0aW9uKGspIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fZGl2KGspOyAgICAgfSxcbiAgICByb3RhdGU6ICBmdW5jdGlvbihhKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3JvdGF0ZShhKTsgIH0sXG4gICAgbWF0TXVsdDogZnVuY3Rpb24obSkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9tYXRNdWx0KG0pOyB9LFxuICAgIHVuaXQ6ICAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl91bml0KCk7IH0sXG4gICAgcGVycDogICAgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3BlcnAoKTsgfSxcbiAgICByb3VuZDogICBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcm91bmQoKTsgfSxcblxuICAgIG1hZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgICB9LFxuXG4gICAgZXF1YWxzOiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IHAueCAmJlxuICAgICAgICAgICAgICAgdGhpcy55ID09PSBwLnk7XG4gICAgfSxcblxuICAgIGRpc3Q6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RTcXIocCkpO1xuICAgIH0sXG5cbiAgICBkaXN0U3FyOiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHZhciBkeCA9IHAueCAtIHRoaXMueCxcbiAgICAgICAgICAgIGR5ID0gcC55IC0gdGhpcy55O1xuICAgICAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG4gICAgfSxcblxuICAgIGFuZ2xlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH0sXG5cbiAgICBhbmdsZVRvOiBmdW5jdGlvbihiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSAtIGIueSwgdGhpcy54IC0gYi54KTtcbiAgICB9LFxuXG4gICAgYW5nbGVXaXRoOiBmdW5jdGlvbihiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFuZ2xlV2l0aFNlcChiLngsIGIueSk7XG4gICAgfSxcblxuICAgIC8vIEZpbmQgdGhlIGFuZ2xlIG9mIHRoZSB0d28gdmVjdG9ycywgc29sdmluZyB0aGUgZm9ybXVsYSBmb3IgdGhlIGNyb3NzIHByb2R1Y3QgYSB4IGIgPSB8YXx8YnxzaW4ozrgpIGZvciDOuC5cbiAgICBhbmdsZVdpdGhTZXA6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoXG4gICAgICAgICAgICB0aGlzLnggKiB5IC0gdGhpcy55ICogeCxcbiAgICAgICAgICAgIHRoaXMueCAqIHggKyB0aGlzLnkgKiB5KTtcbiAgICB9LFxuXG4gICAgX21hdE11bHQ6IGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgdmFyIHggPSBtWzBdICogdGhpcy54ICsgbVsxXSAqIHRoaXMueSxcbiAgICAgICAgICAgIHkgPSBtWzJdICogdGhpcy54ICsgbVszXSAqIHRoaXMueTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9hZGQ6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgdGhpcy54ICs9IHAueDtcbiAgICAgICAgdGhpcy55ICs9IHAueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9zdWI6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgdGhpcy54IC09IHAueDtcbiAgICAgICAgdGhpcy55IC09IHAueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9tdWx0OiBmdW5jdGlvbihrKSB7XG4gICAgICAgIHRoaXMueCAqPSBrO1xuICAgICAgICB0aGlzLnkgKj0gaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9kaXY6IGZ1bmN0aW9uKGspIHtcbiAgICAgICAgdGhpcy54IC89IGs7XG4gICAgICAgIHRoaXMueSAvPSBrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3VuaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9kaXYodGhpcy5tYWcoKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfcGVycDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB5ID0gdGhpcy55O1xuICAgICAgICB0aGlzLnkgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IC15O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3JvdGF0ZTogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgICAgIHNpbiA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICAgIHggPSBjb3MgKiB0aGlzLnggLSBzaW4gKiB0aGlzLnksXG4gICAgICAgICAgICB5ID0gc2luICogdGhpcy54ICsgY29zICogdGhpcy55O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3JvdW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbi8vIGNvbnN0cnVjdHMgUG9pbnQgZnJvbSBhbiBhcnJheSBpZiBuZWNlc3NhcnlcblBvaW50LmNvbnZlcnQgPSBmdW5jdGlvbiAoYSkge1xuICAgIGlmIChhIGluc3RhbmNlb2YgUG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQoYVswXSwgYVsxXSk7XG4gICAgfVxuICAgIHJldHVybiBhO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3BvaW50LWdlb21ldHJ5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfd3JhcDIgPSByZXF1aXJlKCcuL3dyYXAnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIExhdExuZyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTGF0TG5nKGxhdCwgbG5nKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExhdExuZyk7XG5cbiAgICBpZiAoaXNOYU4obGF0KSB8fCBpc05hTihsbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgTGF0TG5nIG9iamVjdDogKCcgKyBsYXQgKyAnLCAnICsgbG5nICsgJyknKTtcbiAgICB9XG4gICAgdGhpcy5sYXQgPSArbGF0O1xuICAgIHRoaXMubG5nID0gK2xuZztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMYXRMbmcsIFt7XG4gICAga2V5OiAnd3JhcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgICByZXR1cm4gbmV3IExhdExuZyh0aGlzLmxhdCwgKDAsIF93cmFwMi53cmFwKSh0aGlzLmxuZywgLTE4MCwgMTgwKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExhdExuZztcbn0oKTtcblxuTGF0TG5nLmNvbnZlcnQgPSBmdW5jdGlvbiAoYSkge1xuICBpZiAoYSBpbnN0YW5jZW9mIExhdExuZykge1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICByZXR1cm4gbmV3IExhdExuZyhhWzBdLCBhWzFdKTtcbiAgfVxuXG4gIGlmICgnbG5nJyBpbiBhICYmICdsYXQnIGluIGEpIHtcbiAgICByZXR1cm4gbmV3IExhdExuZyhhLmxhdCwgYS5sbmcpO1xuICB9XG5cbiAgcmV0dXJuIGE7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMYXRMbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvbGliX2dlby9sYXRfbG5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMud3JhcCA9IHdyYXA7XG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbmZ1bmN0aW9uIHdyYXAobiwgbWluLCBtYXgpIHtcbiAgdmFyIGQgPSBtYXggLSBtaW47XG4gIHJldHVybiBuID09PSBtYXggPyBuIDogKChuIC0gbWluKSAlIGQgKyBkKSAlIGQgKyBtaW47XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvbGliX2dlby93cmFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLndpZGdldC1nb29nbGUtbWFwcy13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ud2lkZ2V0LWdvb2dsZS1tYXBzLXdyYXBwZXIgPiBkaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDsgYm90dG9tOiAwOyBsZWZ0OiAwOyByaWdodDogMDtcXG59XFxuXFxuLndpZGdldC1nb29nbGUtbWFwcy1tYXJrZXJ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQU4xd0FBRGRjQlFpaWJlQUFBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFjY1NVUkJWR2lCdFpsZGJCeFhGY2QvNTg2c3ZiTk9uTWFKNDExSHhhbGFrTnVtcUZLYlVuOGtEUklTVWo1UVZSSkVIMUNwZUFBSkVBSUpVVjRxRXdScWhFSWJTQXN2VVZyeEFLcExpdXk2TGJTbFR2elZranBVRFVSRmNwdUdTTGJ6SVp0WXRuZXpPek9IQjl2cGVqM3JtZjN3WDlxSFBmZWVjLzcvdVhmT25Ec2pWQWtLTXZudzdoWmNkeGZ3RU1nOW9OdUErc1VwTXlDZmdKNERUdUhhcDVPdjkxOFUwR3JrbDBvRHZIandvTFZyYnVKKzMraVBnZDJDYklyb2VnM29CL25WZ0pNYy9WcDN0MWNKajRxRVRPOXBiOGtZT1N6SVZ4WHNNc080S25USDRZbUczc0gvbHN1bExDRUtjbmxmNXo2Rlk4Qm55azIrUEtoZUZDUGZhK29kN0N0bnU1VXNSTHN3RSsrMWYwc3dSd0duVlA4UXBFWDErMDA3aGs1SUYzNHBqcWFVeVFveWZxYmpjY0g4bHVxTEFIQlU1Tm5KZjNRK1ZxcGpTU3N5dnJkanA0aTh3cWVWS0JCWnoyTXU1NUp4WFR4L1laZFlSb2piTm5VeG14ckxXcDJVeUhWUDJMdTFaMkFvS3JmSVFpNTl1YTNCaWxrakFwOHJOaWZqdWx5Ynp6Q2Z5eFhkNUNLUXNHTnNUc1NKMjZ2VkIvMHdxOUxlMGpjNEhZVmY1SzBWaTFrL1hFM0VWRHJEcFpsWjVsWVJBYUFLYzdrY2wyWm1tVXBuVnBrcHJUWENENkx5aTdRaUV3OC91RTFkKzR6QTVoWEVnR3Z6NlJCU3hkSGd4Tm1jY0lLSmlGNnBSWFpFS2N1UmFyKzQxcU1FaUFDNGZ1TUcweXRGcU1LNFFCL0toLzdDQldzVllZOUFNM2tYY0RxZG9jWXliS2l0WFJsY1pVdGFlUlE0SE1veGJJSjJZU2JQZEo1RHVLdHd6UFY5THZ4dkJsL3pONU9rVmYzRGptYWZmdkRkc1puOCtlOTg0WTc2dE1SL0pLSS9BZUpMZGt1RWJiZlVZNXVBblM2Y1M5NDNlRzlZT1E0Vk1ybC8xMjJxL2tkQmM2OFdiaWtsaTlIdjlBK2ZmNkdMNE1SZFlMN1lkdGMzRmZrZFVMTmtiM0RpTkNZQ0s3cXE3OS9XL09yd3hkVjRScmpaL2JZZ0ViNHFzOW5jOG96Q0h4OGFQdjk4VnhFUkFGM2c3eG81ZndMNFU3NTlOcHNyV05tYkVCWGF3bGlHQ3ZHVk80UHNPYzhuNnkzcjh6S2VMNytPMGw0SXFQSGxDSEJ6T1hPZVI4NEwxbS9FdEliRkRCVmlrR1NRUGVzWE5xc3kxcmpCZkJRV2J3bWVveCtEakMzOTE4Q1lpNUdGVkRqUEVDaTZMcENJditMQ1QzMytieC9NaDhWYnd1NytmODhCVTh0aUJtOHRVQUk1NUNOVWlDQ0JsMG1rOExaUjUvemRkOGZDNGkxaFlhNHV1N3ROa2RxakVIcFdDYi9aaGF0QjVwcVZwZkwyYXdscENvMjNpUEdOSkFWdXo3ZkZyQ0owaEN0aDhjSzNsdXBZa0QxbUdTeXo3QW8ycUtVSHd1SXR3ZmIxb0VMRHpmL0dFQXQ2amdDcUVzZ2hIeEhLcjNjbWtJZ3hKT3lDblNUODlPMzJPN2VIUlR6VjFucVArUEpFdnMySjJjRVBSQURWUUE3NUNCVXk1Y3k4RDF3T0d0dm8xQmJ1NmtiVXZQeFcyL2Iycm9EWVhXQk90VzF2VjZ5VHlLY3Rqd0FiNHdFdHlnSW1VMXZUSDRUeGpOUTBqdS90K0wySWZEc3d5K3djMTI5a0M4MnpxSFNMZWkrWldNMFlRQzZiL2F3eDVnRENBVmhlaFRiRWEwbldKWUtUSzgrbCtnYS9HOFl4V3RObzlEZ3Ezd0JXWkd1c1M1RDFmTkt1bTI5ZWgramppbm5NOHhZR2pERTJzbktWRWpHN1dHc0N5SnlxZnlJS3gwam5rV1I4NjFsVmZUMW96QktoZVgwZFR0QWhhWUY0RFZCVFRFUnFYUjNXaWxLK0NOWFhCdXVhL3htRlkrUVQ0dmordGxaUjh5NUk0REZYVlpuSzNHQTZrd2w2V0M2RFpZU044VGdOOGRxQTU5RlNRSzVibG4zL2xwNyswSW9GSlp3UVU3MGoveEhrTnhUcHBVU0VUVTZjbGczMU5DWWNITnZHaUNDTFB5T0NZeTlzbzViNmVqWTU4ZUlpUUVHUE52YjBSMjU1SXI5VUU5QkxPZTlwTzJhK0RuSkhzWGt4WTJodzRqUTRjUlR3L1lWRzBKaGl6KzJWVUJoTElNK1U4bjZycE5kQnQvNTFaTXBEZnM0cWJYbytCTENNd1NwQkJPQ2pjdWlXaUM4ZGxsQ1NFSUN0bSswWGdkT2wra1dGcXA2Nk1XZTlWS3BmV2E5TUwzOWxaNGZ2NjV2a0hWZXJoTFJSNzB0TmZTUERwVHFXdkNJQVRUMERRNnBhOGxXTGdPNXlSRUNaUWdCY1g3dWlkS1VsNExKUmZsYXVjOWxDYm4xdCtHUGo2N0Z5L1F1aGNLeXBiL0JDdWY1bEN4RlF6MlNPb0VTdTljV2hZeW5ITzBJRlg2L0tGZ0xRM0RzNnI0WW5pWENDV3dXZTc4dVQwajJTcm9STFJVSUE1dHoxZnhibDcrWDZDL3JXdks0L1dTbVBpcjhoQWt6czIva0ErQU1nTmVHejg2RlpOWFEwOXd5OVZ5bUhpbGNFSVBuS3dCbFYvbENxbnlBdnBIcUdScXZCb1NwQ0JOUVk2eGNpVEVSMlVpYlVkbjlacmMvVFZSRUNrT3c5ZlVGOWprWjJFSGttOVpkM1BxbFcvcW9KQWJBUzlyT2cvd3FkS0p5ekhPdTVhdWF1cXBBdDNmMnpxQndDM0ZXbXVhZ2MydExkUDF2TjNGVVZBcEJNcEU2cThtYXhjVVhmR0hDU0wxYzdiMVhLYnlFbTlyZnZRTTNiUUYzQjBKejZ1cnY1MWNyTGJTR3F2aUlBeWZ1R1I0SG5WNDdJaWRRRFEyZlhJdWVhckFqQTFVZDJwdHlzdmc5c1dUUmRzV3ZrM3NhVEE5RkxkQWxZa3hVQmFEdzVNS0crUHJYMFgwV2ZXaXNSc0laQ0FHclZQYTV3RmhpdGRkM2phNWxyelRHNXYzUGY1SjdPZld1ZDUvKzdkM1UwaWJwVGNRQUFBQUJKUlU1RXJrSmdnZz09KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsZWZ0OiAtMjVweDtcXG4gICAgdG9wOiAtNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL0dvb2dsZU1hcHMuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWFwLCBNYXBQcm9wcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvTWFwXCI7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWxlcnRcIjtcbmltcG9ydCBHb29nbGVNYXBDb250YWluZXIsIHsgR29vZ2xlTWFwQ29udGFpbmVyUHJvcHMgfSBmcm9tIFwiLi9jb21wb25lbnRzL0dvb2dsZU1hcENvbnRhaW5lclwiO1xuXG5kZWNsYXJlIGZ1bmN0aW9uIHJlcXVpcmUobmFtZTogc3RyaW5nKTogc3RyaW5nO1xudHlwZSBWaXNpYmlsaXR5TWFwID0ge1xuICAgIFtQIGluIGtleW9mIEdvb2dsZU1hcENvbnRhaW5lclByb3BzXTogYm9vbGVhbjtcbn07XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBjbGFzcy1uYW1lXG5leHBvcnQgY2xhc3MgcHJldmlldyBleHRlbmRzIENvbXBvbmVudDxHb29nbGVNYXBDb250YWluZXJQcm9wcywge30+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHdhcm5pbmdzID0gR29vZ2xlTWFwQ29udGFpbmVyLnZhbGlkYXRlUHJvcHModGhpcy5wcm9wcyk7XG4gICAgICAgIGxldCByZWFjdEVsZW1lbnQ6IFJlYWN0RWxlbWVudDx7fT47XG4gICAgICAgIGlmICghd2FybmluZ3MpIHtcbiAgICAgICAgICAgIHJlYWN0RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoTWFwLCBwcmV2aWV3LnRyYW5zZm9ybVByb3BzKHRoaXMucHJvcHMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlYWN0RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge30sXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudChBbGVydCwge1xuICAgICAgICAgICAgICAgICAgICBib290c3RyYXBTdHlsZTogXCJkYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIndpZGdldC1nb29nbGUtbWFwcy1hbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB3YXJuaW5nc1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoTWFwLCBwcmV2aWV3LnRyYW5zZm9ybVByb3BzKHRoaXMucHJvcHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7fSwgcmVhY3RFbGVtZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyB0cmFuc2Zvcm1Qcm9wcyhwcm9wczogR29vZ2xlTWFwQ29udGFpbmVyUHJvcHMpOiBNYXBQcm9wcyB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IHByb3BzLmRhdGFTb3VyY2UgPT09IFwic3RhdGljXCJcbiAgICAgICAgICAgID8gR29vZ2xlTWFwQ29udGFpbmVyLnBhcnNlU3RhdGljTG9jYXRpb25zKHByb3BzLnN0YXRpY0xvY2F0aW9ucylcbiAgICAgICAgICAgIDogW107XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhcGlLZXk6IHByb3BzLmFwaUtleSxcbiAgICAgICAgICAgIGF1dG9ab29tOiBwcm9wcy5hdXRvWm9vbSxcbiAgICAgICAgICAgIGRlZmF1bHRDZW50ZXJBZGRyZXNzOiBwcm9wcy5kZWZhdWx0Q2VudGVyQWRkcmVzcyxcbiAgICAgICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgICAgICAgaGVpZ2h0VW5pdDogcHJvcHMuaGVpZ2h0VW5pdCxcbiAgICAgICAgICAgIGxvY2F0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbkRyYWc6IHByb3BzLm9wdGlvbkRyYWcsXG4gICAgICAgICAgICBvcHRpb25NYXBDb250cm9sOiBwcm9wcy5vcHRpb25NYXBDb250cm9sLFxuICAgICAgICAgICAgb3B0aW9uU2Nyb2xsOiBwcm9wcy5vcHRpb25TY3JvbGwsXG4gICAgICAgICAgICBvcHRpb25TdHJlZXRWaWV3OiBwcm9wcy5vcHRpb25TdHJlZXRWaWV3LFxuICAgICAgICAgICAgb3B0aW9uWm9vbUNvbnRyb2w6IHByb3BzLm9wdGlvblpvb21Db250cm9sLFxuICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICAgICAgd2lkdGhVbml0OiBwcm9wcy53aWR0aFVuaXQsXG4gICAgICAgICAgICB6b29tTGV2ZWw6IHByb3BzLnpvb21MZXZlbFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpc2libGVQcm9wZXJ0aWVzKHZhbHVlTWFwOiBHb29nbGVNYXBDb250YWluZXJQcm9wcywgdmlzaWJpbGl0eU1hcDogVmlzaWJpbGl0eU1hcCkge1xuICAgIGlmICh2YWx1ZU1hcC5kYXRhU291cmNlID09PSBcInN0YXRpY1wiKSB7XG4gICAgICAgIHZpc2liaWxpdHlNYXAuYWRkcmVzc0F0dHJpYnV0ZSA9IGZhbHNlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmRhdGFTb3VyY2VNaWNyb2Zsb3cgPSBmYWxzZTtcbiAgICAgICAgdmlzaWJpbGl0eU1hcC5lbnRpdHlDb25zdHJhaW50ID0gZmFsc2U7XG4gICAgICAgIHZpc2liaWxpdHlNYXAubG9jYXRpb25zRW50aXR5ID0gZmFsc2U7XG4gICAgICAgIHZpc2liaWxpdHlNYXAubGF0aXR1ZGVBdHRyaWJ1dGUgPSBmYWxzZTtcbiAgICAgICAgdmlzaWJpbGl0eU1hcC5sb25naXR1ZGVBdHRyaWJ1dGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlTWFwLmRhdGFTb3VyY2UgPT09IFwiWFBhdGhcIikge1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmFkZHJlc3NBdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmRhdGFTb3VyY2VNaWNyb2Zsb3cgPSBmYWxzZTtcbiAgICAgICAgdmlzaWJpbGl0eU1hcC5lbnRpdHlDb25zdHJhaW50ID0gdHJ1ZTtcbiAgICAgICAgdmlzaWJpbGl0eU1hcC5sb2NhdGlvbnNFbnRpdHkgPSB0cnVlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmxhdGl0dWRlQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgdmlzaWJpbGl0eU1hcC5sb25naXR1ZGVBdHRyaWJ1dGUgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodmFsdWVNYXAuZGF0YVNvdXJjZSA9PT0gXCJjb250ZXh0XCIpIHtcbiAgICAgICAgdmlzaWJpbGl0eU1hcC5hZGRyZXNzQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgdmlzaWJpbGl0eU1hcC5kYXRhU291cmNlTWljcm9mbG93ID0gZmFsc2U7XG4gICAgICAgIHZpc2liaWxpdHlNYXAuZW50aXR5Q29uc3RyYWludCA9IGZhbHNlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmxvY2F0aW9uc0VudGl0eSA9IGZhbHNlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmxhdGl0dWRlQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgdmlzaWJpbGl0eU1hcC5sb25naXR1ZGVBdHRyaWJ1dGUgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodmFsdWVNYXAuZGF0YVNvdXJjZSA9PT0gXCJtaWNyb2Zsb3dcIikge1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmFkZHJlc3NBdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmRhdGFTb3VyY2VNaWNyb2Zsb3cgPSB0cnVlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmVudGl0eUNvbnN0cmFpbnQgPSBmYWxzZTtcbiAgICAgICAgdmlzaWJpbGl0eU1hcC5sb2NhdGlvbnNFbnRpdHkgPSB0cnVlO1xuICAgICAgICB2aXNpYmlsaXR5TWFwLmxhdGl0dWRlQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgdmlzaWJpbGl0eU1hcC5sb25naXR1ZGVBdHRyaWJ1dGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpYmlsaXR5TWFwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlld0NzcygpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vdWkvR29vZ2xlTWFwcy5jc3NcIik7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvR29vZ2xlTWFwcy53ZWJtb2RlbGVyLnRzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2dvb2dsZV9tYXAgPSByZXF1aXJlKCcuL2dvb2dsZV9tYXAnKTtcblxudmFyIF9nb29nbGVfbWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dvb2dsZV9tYXApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfZ29vZ2xlX21hcDIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJ2ZianMvbGliL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX21hcmtlcl9kaXNwYXRjaGVyID0gcmVxdWlyZSgnLi9tYXJrZXJfZGlzcGF0Y2hlcicpO1xuXG52YXIgX21hcmtlcl9kaXNwYXRjaGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcmtlcl9kaXNwYXRjaGVyKTtcblxudmFyIF9nb29nbGVfbWFwX21hcCA9IHJlcXVpcmUoJy4vZ29vZ2xlX21hcF9tYXAnKTtcblxudmFyIF9nb29nbGVfbWFwX21hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nb29nbGVfbWFwX21hcCk7XG5cbnZhciBfZ29vZ2xlX21hcF9tYXJrZXJzID0gcmVxdWlyZSgnLi9nb29nbGVfbWFwX21hcmtlcnMnKTtcblxudmFyIF9nb29nbGVfbWFwX21hcmtlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZ2xlX21hcF9tYXJrZXJzKTtcblxudmFyIF9nb29nbGVfbWFwX21hcmtlcnNfcHJlcmVuZGVyID0gcmVxdWlyZSgnLi9nb29nbGVfbWFwX21hcmtlcnNfcHJlcmVuZGVyJyk7XG5cbnZhciBfZ29vZ2xlX21hcF9tYXJrZXJzX3ByZXJlbmRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nb29nbGVfbWFwX21hcmtlcnNfcHJlcmVuZGVyKTtcblxudmFyIF9nb29nbGVfbWFwX2xvYWRlciA9IHJlcXVpcmUoJy4vdXRpbHMvbG9hZGVycy9nb29nbGVfbWFwX2xvYWRlcicpO1xuXG52YXIgX2dvb2dsZV9tYXBfbG9hZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dvb2dsZV9tYXBfbG9hZGVyKTtcblxudmFyIF9kZXRlY3QgPSByZXF1aXJlKCcuL3V0aWxzL2RldGVjdCcpO1xuXG52YXIgX2RldGVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXRlY3QpO1xuXG52YXIgX2dlbyA9IHJlcXVpcmUoJy4vdXRpbHMvZ2VvJyk7XG5cbnZhciBfZ2VvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dlbyk7XG5cbnZhciBfYXJyYXlfaGVscGVyID0gcmVxdWlyZSgnLi91dGlscy9hcnJheV9oZWxwZXInKTtcblxudmFyIF9hcnJheV9oZWxwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJyYXlfaGVscGVyKTtcblxudmFyIF9pc19wbGFpbl9vYmplY3QgPSByZXF1aXJlKCcuL3V0aWxzL2lzX3BsYWluX29iamVjdCcpO1xuXG52YXIgX2lzX3BsYWluX29iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc19wbGFpbl9vYmplY3QpO1xuXG52YXIgX3BpY2sgPSByZXF1aXJlKCcuL3V0aWxzL3BpY2snKTtcblxudmFyIF9waWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BpY2spO1xuXG52YXIgX3JhZiA9IHJlcXVpcmUoJy4vdXRpbHMvcmFmJyk7XG5cbnZhciBfcmFmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhZik7XG5cbnZhciBfbG9nID0gcmVxdWlyZSgnLi91dGlscy9tYXRoL2xvZzInKTtcblxudmFyIF9sb2cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9nKTtcblxudmFyIF9pc051bWJlciA9IHJlcXVpcmUoJy4vdXRpbHMvaXNOdW1iZXInKTtcblxudmFyIF9pc051bWJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc051bWJlcik7XG5cbnZhciBfb21pdCA9IHJlcXVpcmUoJy4vdXRpbHMvb21pdCcpO1xuXG52YXIgX29taXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb21pdCk7XG5cbnZhciBfZGV0ZWN0RWxlbWVudFJlc2l6ZSA9IHJlcXVpcmUoJy4vdXRpbHMvZGV0ZWN0RWxlbWVudFJlc2l6ZScpO1xuXG52YXIgX2RldGVjdEVsZW1lbnRSZXNpemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGV0ZWN0RWxlbWVudFJlc2l6ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcywgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMsIHJlYWN0L25vLWZpbmQtZG9tLW5vZGUsIG5vLWNvbnNvbGUgKi9cblxuXG52YXIga0VQUyA9IDAuMDAwMDE7XG52YXIgS19HT09HTEVfVElMRV9TSVpFID0gMjU2O1xuLy8gcmVhbCBtaW5ab29tIGNhbGN1bGF0ZWQgaGVyZSBfZ2V0TWluWm9vbVxudmFyIEtfSURMRV9USU1FT1VUID0gMTAwO1xudmFyIEtfSURMRV9DTElDS19USU1FT1VUID0gMzAwO1xudmFyIERFRkFVTFRfTUlOX1pPT00gPSAzO1xuXG5mdW5jdGlvbiBkZWZhdWx0T3B0aW9uc18oKSAvKiBtYXBzICove1xuICByZXR1cm4ge1xuICAgIG92ZXJ2aWV3TWFwQ29udHJvbDogZmFsc2UsXG4gICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxuICAgIHJvdGF0ZUNvbnRyb2w6IHRydWUsXG4gICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxuICAgIC8vIGRpc2FibGUgcG9pXG4gICAgc3R5bGVzOiBbe1xuICAgICAgZmVhdHVyZVR5cGU6ICdwb2knLFxuICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMnLFxuICAgICAgc3R5bGVyczogW3sgdmlzaWJpbGl0eTogJ29mZicgfV1cbiAgICB9XSxcbiAgICBtaW5ab29tOiBERUZBVUxUX01JTl9aT09NIH07XG59XG5cbnZhciBsYXRMbmcyT2JqID0gZnVuY3Rpb24gbGF0TG5nMk9iaihsYXRMbmcpIHtcbiAgcmV0dXJuICgwLCBfaXNfcGxhaW5fb2JqZWN0Mi5kZWZhdWx0KShsYXRMbmcpID8gbGF0TG5nIDogeyBsYXQ6IGxhdExuZ1swXSwgbG5nOiBsYXRMbmdbMV0gfTtcbn07XG5cbnZhciBfY2hlY2tNaW5ab29tID0gZnVuY3Rpb24gX2NoZWNrTWluWm9vbSh6b29tLCBtaW5ab29tKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHpvb20gPCBtaW5ab29tKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0dvb2dsZU1hcDogJyArIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICdtaW5ab29tIG9wdGlvbiBpcyBsZXNzIHRoYW4gcmVjb21tZW5kZWQgJyArICdtaW5ab29tIG9wdGlvbiBmb3IgeW91ciBtYXAgc2l6ZXMuXFxuJyArICdvdmVycmlkZWQgdG8gdmFsdWUgJyArIG1pblpvb20pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtaW5ab29tIDwgem9vbSkge1xuICAgIHJldHVybiB6b29tO1xuICB9XG4gIHJldHVybiBtaW5ab29tO1xufTtcblxudmFyIEdvb2dsZU1hcCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHb29nbGVNYXAsIF9Db21wb25lbnQpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBmdW5jdGlvbiBHb29nbGVNYXAocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR29vZ2xlTWFwKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHb29nbGVNYXAuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHb29nbGVNYXApKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5fZ2V0TWluWm9vbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5nZW9TZXJ2aWNlXy5nZXRXaWR0aCgpID4gMCB8fCBfdGhpcy5nZW9TZXJ2aWNlXy5nZXRIZWlnaHQoKSA+IDApIHtcbiAgICAgICAgdmFyIHRpbGVzUGVyV2lkdGggPSBNYXRoLmNlaWwoX3RoaXMuZ2VvU2VydmljZV8uZ2V0V2lkdGgoKSAvIEtfR09PR0xFX1RJTEVfU0laRSkgKyAyO1xuICAgICAgICB2YXIgdGlsZXNQZXJIZWlnaHQgPSBNYXRoLmNlaWwoX3RoaXMuZ2VvU2VydmljZV8uZ2V0SGVpZ2h0KCkgLyBLX0dPT0dMRV9USUxFX1NJWkUpICsgMjtcbiAgICAgICAgdmFyIG1heFRpbGVzUGVyRGltID0gTWF0aC5tYXgodGlsZXNQZXJXaWR0aCwgdGlsZXNQZXJIZWlnaHQpO1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKCgwLCBfbG9nMi5kZWZhdWx0KShtYXhUaWxlc1BlckRpbSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIERFRkFVTFRfTUlOX1pPT007XG4gICAgfTtcblxuICAgIF90aGlzLl9jb21wdXRlTWluWm9vbSA9IGZ1bmN0aW9uIChtaW5ab29tT3ZlcnJpZGUsIG1pblpvb20pIHtcbiAgICAgIGlmIChtaW5ab29tT3ZlcnJpZGUpIHtcbiAgICAgICAgcmV0dXJuIG1pblpvb20gfHwgREVGQVVMVF9NSU5fWk9PTTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGhpcy5fZ2V0TWluWm9vbSgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5fbWFwRG9tUmVzaXplQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5yZXNldFNpemVPbklkbGVfID0gdHJ1ZTtcbiAgICAgIGlmIChfdGhpcy5tYXBzXykge1xuICAgICAgICB2YXIgb3JpZ2luYWxDZW50ZXIgPSBfdGhpcy5tYXBfLmdldENlbnRlcigpO1xuICAgICAgICBfdGhpcy5tYXBzXy5ldmVudC50cmlnZ2VyKF90aGlzLm1hcF8sICdyZXNpemUnKTtcbiAgICAgICAgX3RoaXMubWFwXy5zZXRDZW50ZXIob3JpZ2luYWxDZW50ZXIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fc2V0TGF5ZXJzID0gZnVuY3Rpb24gKGxheWVyVHlwZXMpIHtcbiAgICAgIGxheWVyVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAobGF5ZXJUeXBlKSB7XG4gICAgICAgIF90aGlzLmxheWVyc19bbGF5ZXJUeXBlXSA9IG5ldyBfdGhpcy5tYXBzX1tsYXllclR5cGVdKCk7XG4gICAgICAgIF90aGlzLmxheWVyc19bbGF5ZXJUeXBlXS5zZXRNYXAoX3RoaXMubWFwXyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX2luaXRNYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBvbmx5IGluaXRpYWxpemUgdGhlIG1hcCBvbmNlXG4gICAgICBpZiAoX3RoaXMuaW5pdGlhbGl6ZWRfKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzLmluaXRpYWxpemVkXyA9IHRydWU7XG5cbiAgICAgIHZhciBwcm9wc0NlbnRlciA9IGxhdExuZzJPYmooX3RoaXMucHJvcHMuY2VudGVyIHx8IF90aGlzLnByb3BzLmRlZmF1bHRDZW50ZXIpO1xuICAgICAgX3RoaXMuZ2VvU2VydmljZV8uc2V0Vmlldyhwcm9wc0NlbnRlciwgX3RoaXMucHJvcHMuem9vbSB8fCBfdGhpcy5wcm9wcy5kZWZhdWx0Wm9vbSwgMCk7XG5cbiAgICAgIF90aGlzLl9vbkJvdW5kc0NoYW5nZWQoKTsgLy8gbm93IHdlIGNhbiBjYWxjdWxhdGUgbWFwIGJvdW5kcyBjZW50ZXIgZXRjLi4uXG5cbiAgICAgIHZhciBib290c3RyYXBVUkxLZXlzID0gX2V4dGVuZHMoe30sIF90aGlzLnByb3BzLmFwaUtleSAmJiB7IGtleTogX3RoaXMucHJvcHMuYXBpS2V5IH0sIF90aGlzLnByb3BzLmJvb3RzdHJhcFVSTEtleXMpO1xuXG4gICAgICBfdGhpcy5wcm9wcy5nb29nbGVNYXBMb2FkZXIoYm9vdHN0cmFwVVJMS2V5cykudGhlbihmdW5jdGlvbiAobWFwcykge1xuICAgICAgICBpZiAoIV90aGlzLm1vdW50ZWRfKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNlbnRlckxhdExuZyA9IF90aGlzLmdlb1NlcnZpY2VfLmdldENlbnRlcigpO1xuXG4gICAgICAgIHZhciBwcm9wc09wdGlvbnMgPSB7XG4gICAgICAgICAgem9vbTogX3RoaXMucHJvcHMuem9vbSB8fCBfdGhpcy5wcm9wcy5kZWZhdWx0Wm9vbSxcbiAgICAgICAgICBjZW50ZXI6IG5ldyBtYXBzLkxhdExuZyhjZW50ZXJMYXRMbmcubGF0LCBjZW50ZXJMYXRMbmcubG5nKVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHByZXZlbnQgdG8gZXhhcG9zZSBmdWxsIGFwaVxuICAgICAgICAvLyBuZXh0IHByb3BzIG11c3QgYmUgZXhwb3NlZCAoY29uc29sZS5sb2coT2JqZWN0LmtleXMocGljayhtYXBzLCBpc1BsYWluT2JqZWN0KSkpKVxuICAgICAgICAvLyBcIkFuaW1hdGlvblwiLCBcIkNvbnRyb2xQb3NpdGlvblwiLCBcIk1hcFR5cGVDb250cm9sU3R5bGVcIiwgXCJNYXBUeXBlSWRcIixcbiAgICAgICAgLy8gXCJOYXZpZ2F0aW9uQ29udHJvbFN0eWxlXCIsIFwiU2NhbGVDb250cm9sU3R5bGVcIiwgXCJTdHJva2VQb3NpdGlvblwiLFxuICAgICAgICAvLyBcIlN5bWJvbFBhdGhcIiwgXCJab29tQ29udHJvbFN0eWxlXCIsXG4gICAgICAgIC8vIFwiZXZlbnRcIiwgXCJEaXJlY3Rpb25zU3RhdHVzXCIsIFwiRGlyZWN0aW9uc1RyYXZlbE1vZGVcIiwgXCJEaXJlY3Rpb25zVW5pdFN5c3RlbVwiLFxuICAgICAgICAvLyBcIkRpc3RhbmNlTWF0cml4U3RhdHVzXCIsXG4gICAgICAgIC8vIFwiRGlzdGFuY2VNYXRyaXhFbGVtZW50U3RhdHVzXCIsIFwiRWxldmF0aW9uU3RhdHVzXCIsIFwiR2VvY29kZXJMb2NhdGlvblR5cGVcIixcbiAgICAgICAgLy8gXCJHZW9jb2RlclN0YXR1c1wiLCBcIkttbExheWVyU3RhdHVzXCIsXG4gICAgICAgIC8vIFwiTWF4Wm9vbVN0YXR1c1wiLCBcIlN0cmVldFZpZXdTdGF0dXNcIiwgXCJUcmFuc2l0TW9kZVwiLCBcIlRyYW5zaXRSb3V0ZVByZWZlcmVuY2VcIixcbiAgICAgICAgLy8gXCJUcmF2ZWxNb2RlXCIsIFwiVW5pdFN5c3RlbVwiXG4gICAgICAgIHZhciBtYXBQbGFpbk9iamVjdHMgPSAoMCwgX3BpY2syLmRlZmF1bHQpKG1hcHMsIF9pc19wbGFpbl9vYmplY3QyLmRlZmF1bHQpO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBfdGhpcy5wcm9wcy5vcHRpb25zID09PSAnZnVuY3Rpb24nID8gX3RoaXMucHJvcHMub3B0aW9ucyhtYXBQbGFpbk9iamVjdHMpIDogX3RoaXMucHJvcHMub3B0aW9ucztcbiAgICAgICAgdmFyIGRlZmF1bHRPcHRpb25zID0gZGVmYXVsdE9wdGlvbnNfKG1hcFBsYWluT2JqZWN0cyk7XG5cbiAgICAgICAgdmFyIGRyYWdnYWJsZU9wdGlvbnMgPSBfdGhpcy5wcm9wcy5kcmFnZ2FibGUgIT09IHVuZGVmaW5lZCAmJiB7XG4gICAgICAgICAgZHJhZ2dhYmxlOiBfdGhpcy5wcm9wcy5kcmFnZ2FibGVcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgbWluWm9vbSA9IF90aGlzLl9jb21wdXRlTWluWm9vbShvcHRpb25zLm1pblpvb21PdmVycmlkZSwgb3B0aW9ucy5taW5ab29tKTtcbiAgICAgICAgX3RoaXMubWluWm9vbV8gPSBtaW5ab29tO1xuXG4gICAgICAgIHZhciBwcmVNYXBPcHRpb25zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgICAgbWluWm9vbTogbWluWm9vbVxuICAgICAgICB9LCBvcHRpb25zLCBwcm9wc09wdGlvbnMpO1xuXG4gICAgICAgIF90aGlzLmRlZmF1bHREcmFnZ2FibGVPcHRpb25fID0gcHJlTWFwT3B0aW9ucy5kcmFnZ2FibGUgIT09IHVuZGVmaW5lZCA/IHByZU1hcE9wdGlvbnMuZHJhZ2dhYmxlIDogX3RoaXMuZGVmYXVsdERyYWdnYWJsZU9wdGlvbl87XG5cbiAgICAgICAgdmFyIG1hcE9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgcHJlTWFwT3B0aW9ucywgZHJhZ2dhYmxlT3B0aW9ucyk7XG5cbiAgICAgICAgbWFwT3B0aW9ucy5taW5ab29tID0gX2NoZWNrTWluWm9vbShtYXBPcHRpb25zLm1pblpvb20sIG1pblpvb20pO1xuXG4gICAgICAgIHZhciBtYXAgPSBuZXcgbWFwcy5NYXAoX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzLmdvb2dsZU1hcERvbV8pLCBtYXBPcHRpb25zKTtcblxuICAgICAgICBfdGhpcy5tYXBfID0gbWFwO1xuICAgICAgICBfdGhpcy5tYXBzXyA9IG1hcHM7XG5cbiAgICAgICAgX3RoaXMuX3NldExheWVycyhfdGhpcy5wcm9wcy5sYXllclR5cGVzKTtcblxuICAgICAgICAvLyByZW5kZXIgaW4gb3ZlcmxheVxuICAgICAgICB2YXIgdGhpc18gPSBfdGhpcztcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBPYmplY3QuYXNzaWduKG5ldyBtYXBzLk92ZXJsYXlWaWV3KCksIHtcbiAgICAgICAgICBvbkFkZDogZnVuY3Rpb24gb25BZGQoKSB7XG4gICAgICAgICAgICB2YXIgS19NQVhfV0lEVEggPSB0eXBlb2Ygc2NyZWVuICE9PSAndW5kZWZpbmVkJyA/IHNjcmVlbi53aWR0aCArICdweCcgOiAnMjAwMHB4JztcbiAgICAgICAgICAgIHZhciBLX01BWF9IRUlHSFQgPSB0eXBlb2Ygc2NyZWVuICE9PSAndW5kZWZpbmVkJyA/IHNjcmVlbi5oZWlnaHQgKyAncHgnIDogJzIwMDBweCc7XG5cbiAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRoaXMuZGl2ID0gZGl2O1xuICAgICAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgICAgIGRpdi5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIGRpdi5zdHlsZS53aWR0aCA9IEtfTUFYX1dJRFRIOyAvLyBwcmV2ZW50cyBzb21lIGNocm9tZSBkcmF3IGRlZmVjdHNcbiAgICAgICAgICAgIGRpdi5zdHlsZS5oZWlnaHQgPSBLX01BWF9IRUlHSFQ7XG5cbiAgICAgICAgICAgIHZhciBwYW5lcyA9IHRoaXMuZ2V0UGFuZXMoKTtcbiAgICAgICAgICAgIHBhbmVzLm92ZXJsYXlNb3VzZVRhcmdldC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgICAgICBfcmVhY3REb20yLmRlZmF1bHQudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIodGhpc18sIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9nb29nbGVfbWFwX21hcmtlcnMyLmRlZmF1bHQsIHtcbiAgICAgICAgICAgICAgZXhwZXJpbWVudGFsOiB0aGlzXy5wcm9wcy5leHBlcmltZW50YWwsXG4gICAgICAgICAgICAgIG9uQ2hpbGRDbGljazogdGhpc18uX29uQ2hpbGRDbGljayxcbiAgICAgICAgICAgICAgb25DaGlsZE1vdXNlRG93bjogdGhpc18uX29uQ2hpbGRNb3VzZURvd24sXG4gICAgICAgICAgICAgIG9uQ2hpbGRNb3VzZUVudGVyOiB0aGlzXy5fb25DaGlsZE1vdXNlRW50ZXIsXG4gICAgICAgICAgICAgIG9uQ2hpbGRNb3VzZUxlYXZlOiB0aGlzXy5fb25DaGlsZE1vdXNlTGVhdmUsXG4gICAgICAgICAgICAgIGdlb1NlcnZpY2U6IHRoaXNfLmdlb1NlcnZpY2VfLFxuICAgICAgICAgICAgICBwcm9qZWN0RnJvbUxlZnRUb3A6IHRydWUsXG4gICAgICAgICAgICAgIGRpc3RhbmNlVG9Nb3VzZTogdGhpc18ucHJvcHMuZGlzdGFuY2VUb01vdXNlLFxuICAgICAgICAgICAgICBnZXRIb3ZlckRpc3RhbmNlOiB0aGlzXy5fZ2V0SG92ZXJEaXN0YW5jZSxcbiAgICAgICAgICAgICAgZGlzcGF0Y2hlcjogdGhpc18ubWFya2Vyc0Rpc3BhdGNoZXJfXG4gICAgICAgICAgICB9KSwgZGl2LFxuICAgICAgICAgICAgLy8gcmVtb3ZlIHByZXJlbmRlcmVkIG1hcmtlcnNcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXNfLnNldFN0YXRlKHsgb3ZlcmxheUNyZWF0ZWQ6IHRydWUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uUmVtb3ZlOiBmdW5jdGlvbiBvblJlbW92ZSgpIHtcbiAgICAgICAgICAgIF9yZWFjdERvbTIuZGVmYXVsdC51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuZGl2KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRyYXc6IGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgICAgICB2YXIgZGl2ID0gb3ZlcmxheS5kaXY7XG4gICAgICAgICAgICB2YXIgb3ZlcmxheVByb2plY3Rpb24gPSBvdmVybGF5LmdldFByb2plY3Rpb24oKTtcbiAgICAgICAgICAgIHZhciBib3VuZHMgPSBtYXAuZ2V0Qm91bmRzKCk7XG4gICAgICAgICAgICB2YXIgbmUgPSBib3VuZHMuZ2V0Tm9ydGhFYXN0KCk7XG4gICAgICAgICAgICB2YXIgc3cgPSBib3VuZHMuZ2V0U291dGhXZXN0KCk7XG4gICAgICAgICAgICB2YXIgcHR4ID0gb3ZlcmxheVByb2plY3Rpb24uZnJvbUxhdExuZ1RvRGl2UGl4ZWwobmV3IG1hcHMuTGF0TG5nKG5lLmxhdCgpLCBzdy5sbmcoKSkpO1xuXG4gICAgICAgICAgICAvLyBuZWVkIHJvdW5kIGZvciBzYWZhcmkgc3RpbGwgY2FuJ3QgZmluZCB3aGF0IG5lZWQgZm9yIGZpcmVmb3hcbiAgICAgICAgICAgIHZhciBwdHhSb3VuZGVkID0gKDAsIF9kZXRlY3QyLmRlZmF1bHQpKCkuaXNTYWZhcmkgPyB7IHg6IE1hdGgucm91bmQocHR4LngpLCB5OiBNYXRoLnJvdW5kKHB0eC55KSB9IDogeyB4OiBwdHgueCwgeTogcHR4LnkgfTtcblxuICAgICAgICAgICAgdGhpc18udXBkYXRlQ291bnRlcl8rKztcbiAgICAgICAgICAgIHRoaXNfLl9vbkJvdW5kc0NoYW5nZWQobWFwLCBtYXBzLCAhdGhpc18ucHJvcHMuZGVib3VuY2VkKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzXy5nb29nbGVBcGlMb2FkZWRDYWxsZWRfKSB7XG4gICAgICAgICAgICAgIHRoaXNfLl9vbkdvb2dsZUFwaUxvYWRlZCh7IG1hcDogbWFwLCBtYXBzOiBtYXBzIH0pO1xuICAgICAgICAgICAgICB0aGlzXy5nb29nbGVBcGlMb2FkZWRDYWxsZWRfID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSBwdHhSb3VuZGVkLnggKyAncHgnO1xuICAgICAgICAgICAgZGl2LnN0eWxlLnRvcCA9IHB0eFJvdW5kZWQueSArICdweCc7XG4gICAgICAgICAgICBpZiAodGhpc18ubWFya2Vyc0Rpc3BhdGNoZXJfKSB7XG4gICAgICAgICAgICAgIHRoaXNfLm1hcmtlcnNEaXNwYXRjaGVyXy5lbWl0KCdrT05fQ0hBTkdFJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5vdmVybGF5XyA9IG92ZXJsYXk7XG5cbiAgICAgICAgb3ZlcmxheS5zZXRNYXAobWFwKTtcblxuICAgICAgICBtYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ3pvb21fY2hhbmdlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyByZWNhbGMgcG9zaXRpb24gYXQgem9vbSBzdGFydFxuICAgICAgICAgIGlmICh0aGlzXy5nZW9TZXJ2aWNlXy5nZXRab29tKCkgIT09IG1hcC5nZXRab29tKCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpc18uem9vbUFuaW1hdGlvbkluUHJvZ3Jlc3NfKSB7XG4gICAgICAgICAgICAgIHRoaXNfLnpvb21BbmltYXRpb25JblByb2dyZXNzXyA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXNfLl9vblpvb21BbmltYXRpb25TdGFydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgVElNRU9VVF9aT09NID0gMzAwO1xuXG4gICAgICAgICAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBfdGhpcy56b29tQ29udHJvbENsaWNrVGltZV8gPCBUSU1FT1VUX1pPT00pIHtcbiAgICAgICAgICAgICAgLy8gdGhlcmUgaXMgc3RyYW5nZSBHb29nbGUgTWFwIEFwaSBiZWhhdmlvciBpbiBjaHJvbWUgd2hlbiB6b29tIGFuaW1hdGlvbiBvZiBtYXBcbiAgICAgICAgICAgICAgLy8gaXMgc3RhcnRlZCBvbmx5IG9uIHNlY29uZCByYWYgY2FsbCwgaWYgd2FzIGNsaWNrIG9uIHpvb20gY29udHJvbFxuICAgICAgICAgICAgICAvLyBvciArLSBrZXlzIHByZXNzZWQsIHNvIGkgd2FpdCBmb3IgdHdvIHJhZnMgYmVmb3JlIGNoYW5nZSBzdGF0ZVxuXG4gICAgICAgICAgICAgIC8vIHRoaXMgZG9lcyBub3QgZnVsbHkgcHJldmVudCBhbmltYXRpb24ganVtcFxuICAgICAgICAgICAgICAvLyBidXQgcmVkdWNlIGl0J3Mgb2NjdXJlbmNlIHByb2JhYmlsaXR5XG4gICAgICAgICAgICAgICgwLCBfcmFmMi5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfcmFmMi5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzXy51cGRhdGVDb3VudGVyXysrO1xuICAgICAgICAgICAgICAgICAgdGhpc18uX29uQm91bmRzQ2hhbmdlZChtYXAsIG1hcHMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXNfLnVwZGF0ZUNvdW50ZXJfKys7XG4gICAgICAgICAgICAgIHRoaXNfLl9vbkJvdW5kc0NoYW5nZWQobWFwLCBtYXBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCAnaWRsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMucmVzZXRTaXplT25JZGxlXykge1xuICAgICAgICAgICAgX3RoaXMuX3NldFZpZXdTaXplKCk7XG4gICAgICAgICAgICB2YXIgY3Vyck1pblpvb20gPSBfdGhpcy5fY29tcHV0ZU1pblpvb20oX3RoaXMucHJvcHMub3B0aW9ucy5taW5ab29tT3ZlcnJpZGUsIF90aGlzLnByb3BzLm9wdGlvbnMubWluWm9vbSk7XG5cbiAgICAgICAgICAgIGlmIChjdXJyTWluWm9vbSAhPT0gX3RoaXMubWluWm9vbV8pIHtcbiAgICAgICAgICAgICAgX3RoaXMubWluWm9vbV8gPSBjdXJyTWluWm9vbTtcbiAgICAgICAgICAgICAgbWFwLnNldE9wdGlvbnMoeyBtaW5ab29tOiBjdXJyTWluWm9vbSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMucmVzZXRTaXplT25JZGxlXyA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzXy56b29tQW5pbWF0aW9uSW5Qcm9ncmVzc18pIHtcbiAgICAgICAgICAgIHRoaXNfLnpvb21BbmltYXRpb25JblByb2dyZXNzXyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpc18uX29uWm9vbUFuaW1hdGlvbkVuZCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBkaXYgPSBvdmVybGF5LmRpdjtcbiAgICAgICAgICB2YXIgb3ZlcmxheVByb2plY3Rpb24gPSBvdmVybGF5LmdldFByb2plY3Rpb24oKTtcbiAgICAgICAgICB2YXIgYm91bmRzID0gbWFwLmdldEJvdW5kcygpO1xuICAgICAgICAgIHZhciBuZSA9IGJvdW5kcy5nZXROb3J0aEVhc3QoKTtcbiAgICAgICAgICB2YXIgc3cgPSBib3VuZHMuZ2V0U291dGhXZXN0KCk7XG4gICAgICAgICAgdmFyIHB0eCA9IG92ZXJsYXlQcm9qZWN0aW9uLmZyb21MYXRMbmdUb0RpdlBpeGVsKG5ldyBtYXBzLkxhdExuZyhuZS5sYXQoKSwgc3cubG5nKCkpKTtcbiAgICAgICAgICAvLyBuZWVkIHJvdW5kIGZvciBzYWZhcmkgc3RpbGwgY2FuJ3QgZmluZCB3aGF0IG5lZWQgZm9yIGZpcmVmb3hcbiAgICAgICAgICB2YXIgcHR4Um91bmRlZCA9ICgwLCBfZGV0ZWN0Mi5kZWZhdWx0KSgpLmlzU2FmYXJpID8geyB4OiBNYXRoLnJvdW5kKHB0eC54KSwgeTogTWF0aC5yb3VuZChwdHgueSkgfSA6IHsgeDogcHR4LngsIHk6IHB0eC55IH07XG5cbiAgICAgICAgICB0aGlzXy51cGRhdGVDb3VudGVyXysrO1xuICAgICAgICAgIHRoaXNfLl9vbkJvdW5kc0NoYW5nZWQobWFwLCBtYXBzKTtcblxuICAgICAgICAgIGlmIChfdGhpcy5tb3VzZV8pIHtcbiAgICAgICAgICAgIHZhciBsYXRMbmcgPSBfdGhpcy5nZW9TZXJ2aWNlXy51bnByb2plY3QoX3RoaXMubW91c2VfLCB0cnVlKTtcbiAgICAgICAgICAgIF90aGlzLm1vdXNlXy5sYXQgPSBsYXRMbmcubGF0O1xuICAgICAgICAgICAgX3RoaXMubW91c2VfLmxuZyA9IGxhdExuZy5sbmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMuX29uQ2hpbGRNb3VzZU1vdmUoKTtcblxuICAgICAgICAgIHRoaXNfLmRyYWdUaW1lXyA9IDA7XG4gICAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSBwdHhSb3VuZGVkLnggKyAncHgnO1xuICAgICAgICAgIGRpdi5zdHlsZS50b3AgPSBwdHhSb3VuZGVkLnkgKyAncHgnO1xuICAgICAgICAgIGlmICh0aGlzXy5tYXJrZXJzRGlzcGF0Y2hlcl8pIHtcbiAgICAgICAgICAgIHRoaXNfLm1hcmtlcnNEaXNwYXRjaGVyXy5lbWl0KCdrT05fQ0hBTkdFJyk7XG4gICAgICAgICAgICBpZiAodGhpc18uZmlyZU1vdXNlRXZlbnRPbklkbGVfKSB7XG4gICAgICAgICAgICAgIHRoaXNfLm1hcmtlcnNEaXNwYXRjaGVyXy5lbWl0KCdrT05fTU9VU0VfUE9TSVRJT05fQ0hBTkdFJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBoYXMgYWR2YW50YWdlIG92ZXIgZGl2IE1vdXNlTGVhdmVcbiAgICAgICAgICB0aGlzXy5tb3VzZUluTWFwXyA9IHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFuIGFsdGVybmF0aXZlIHdheSB0byBrbm93IHRoZSBtb3VzZSBpcyBiYWNrIHdpdGhpbiB0aGUgbWFwXG4gICAgICAgIC8vIFRoaXMgd291bGQgbm90IGZpcmUgd2hlbiBjbGlja2luZy9pbnRlcmFjdGluZyB3aXRoIGdvb2dsZSBtYXBzXG4gICAgICAgIC8vIG93biBvbi1tYXAgY291bnRyb2xzK21hcmtlcnMuIFRoaXMgaGFuZGxlcyBhbiBlZGdlIGNhc2UgZm9yIHRvdWNoIGRldmljZXNcbiAgICAgICAgLy8gKyAnZHJhZ2dhYmxlOmZhbHNlJyBjdXN0b20gb3B0aW9uLiBTZWUgIzMzMiBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgICBtYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXNfLm1vdXNlSW5NYXBfID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsICdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBoYXMgYWR2YW50YWdlIG92ZXIgZGl2IE1vdXNlTGVhdmVcbiAgICAgICAgICB0aGlzXy5tb3VzZUluTWFwXyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXNfLm1vdXNlXyA9IG51bGw7XG4gICAgICAgICAgdGhpc18ubWFya2Vyc0Rpc3BhdGNoZXJfLmVtaXQoJ2tPTl9NT1VTRV9QT1NJVElPTl9DSEFOR0UnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsICdkcmFnJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXNfLmRyYWdUaW1lXyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgIHRoaXNfLl9vbkRyYWcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHVzZXIgY2hvb3Npbmcgc2F0ZWxsaXRlIHZzIHJvYWRzLCBldGNcbiAgICAgICAgbWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsICdtYXB0eXBlaWRfY2hhbmdlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzXy5fb25NYXBUeXBlSWRDaGFuZ2UobWFwLmdldE1hcFR5cGVJZCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25Hb29nbGVBcGlMb2FkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Hb29nbGVBcGlMb2FkZWQpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF90aGlzLnByb3BzLnllc0lXYW50VG9Vc2VHb29nbGVNYXBBcGlJbnRlcm5hbHMgIT09IHRydWUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0dvb2dsZU1hcDogJyArIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAnVXNhZ2Ugb2YgaW50ZXJuYWwgYXBpIG9iamVjdHMgaXMgZGFuZ2Vyb3VzICcgKyAnYW5kIGNhbiBjYXVzZSBhIGxvdCBvZiBpc3N1ZXMuXFxuJyArICdUbyBoaWRlIHRoaXMgd2FybmluZyBhZGQgeWVzSVdhbnRUb1VzZUdvb2dsZU1hcEFwaUludGVybmFscz17dHJ1ZX0gJyArICd0byA8R29vZ2xlTWFwIGluc3RhbmNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAoX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcykub25Hb29nbGVBcGlMb2FkZWQuYXBwbHkoX3RoaXMkcHJvcHMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9nZXRIb3ZlckRpc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLmhvdmVyRGlzdGFuY2U7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkRyYWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyO1xuXG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMub25EcmFnICYmIChfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcykub25EcmFnLmFwcGx5KF90aGlzJHByb3BzMiwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uTWFwVHlwZUlkQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMztcblxuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uTWFwVHlwZUlkQ2hhbmdlICYmIChfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcykub25NYXBUeXBlSWRDaGFuZ2UuYXBwbHkoX3RoaXMkcHJvcHMzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25ab29tQW5pbWF0aW9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0O1xuXG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMub25ab29tQW5pbWF0aW9uU3RhcnQgJiYgKF90aGlzJHByb3BzNCA9IF90aGlzLnByb3BzKS5vblpvb21BbmltYXRpb25TdGFydC5hcHBseShfdGhpcyRwcm9wczQsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vblpvb21BbmltYXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1O1xuXG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMub25ab29tQW5pbWF0aW9uRW5kICYmIChfdGhpcyRwcm9wczUgPSBfdGhpcy5wcm9wcykub25ab29tQW5pbWF0aW9uRW5kLmFwcGx5KF90aGlzJHByb3BzNSwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uQ2hpbGRDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkQ2xpY2spIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNjtcblxuICAgICAgICByZXR1cm4gKF90aGlzJHByb3BzNiA9IF90aGlzLnByb3BzKS5vbkNoaWxkQ2xpY2suYXBwbHkoX3RoaXMkcHJvcHM2LCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uQ2hpbGRNb3VzZURvd24gPSBmdW5jdGlvbiAoaG92ZXJLZXksIGNoaWxkUHJvcHMpIHtcbiAgICAgIF90aGlzLmNoaWxkTW91c2VEb3duQXJnc18gPSBbaG92ZXJLZXksIGNoaWxkUHJvcHNdO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hpbGRNb3VzZURvd24pIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DaGlsZE1vdXNlRG93bihob3ZlcktleSwgY2hpbGRQcm9wcywgX2V4dGVuZHMoe30sIF90aGlzLm1vdXNlXykpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25DaGlsZE1vdXNlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuY2hpbGRNb3VzZURvd25BcmdzXykge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DaGlsZE1vdXNlVXApIHtcbiAgICAgICAgICB2YXIgX3RoaXMkcHJvcHM3O1xuXG4gICAgICAgICAgKF90aGlzJHByb3BzNyA9IF90aGlzLnByb3BzKS5vbkNoaWxkTW91c2VVcC5hcHBseShfdGhpcyRwcm9wczcsIF90b0NvbnN1bWFibGVBcnJheShfdGhpcy5jaGlsZE1vdXNlRG93bkFyZ3NfKS5jb25jYXQoW19leHRlbmRzKHt9LCBfdGhpcy5tb3VzZV8pXSkpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmNoaWxkTW91c2VEb3duQXJnc18gPSBudWxsO1xuICAgICAgICBfdGhpcy5jaGlsZE1vdXNlVXBUaW1lXyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25DaGlsZE1vdXNlTW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5jaGlsZE1vdXNlRG93bkFyZ3NfKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VNb3ZlKSB7XG4gICAgICAgICAgdmFyIF90aGlzJHByb3BzODtcblxuICAgICAgICAgIChfdGhpcyRwcm9wczggPSBfdGhpcy5wcm9wcykub25DaGlsZE1vdXNlTW92ZS5hcHBseShfdGhpcyRwcm9wczgsIF90b0NvbnN1bWFibGVBcnJheShfdGhpcy5jaGlsZE1vdXNlRG93bkFyZ3NfKS5jb25jYXQoW19leHRlbmRzKHt9LCBfdGhpcy5tb3VzZV8pXSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoaWxkTW91c2VFbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VFbnRlcikge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM5O1xuXG4gICAgICAgIHJldHVybiAoX3RoaXMkcHJvcHM5ID0gX3RoaXMucHJvcHMpLm9uQ2hpbGRNb3VzZUVudGVyLmFwcGx5KF90aGlzJHByb3BzOSwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoaWxkTW91c2VMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VMZWF2ZSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMxMDtcblxuICAgICAgICByZXR1cm4gKF90aGlzJHByb3BzMTAgPSBfdGhpcy5wcm9wcykub25DaGlsZE1vdXNlTGVhdmUuYXBwbHkoX3RoaXMkcHJvcHMxMCwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIF90aGlzLl9zZXRWaWV3U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMubW91bnRlZF8pIHJldHVybjtcblxuICAgICAgdmFyIG1hcERvbSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZShfdGhpcy5nb29nbGVNYXBEb21fKTtcbiAgICAgIF90aGlzLmdlb1NlcnZpY2VfLnNldFZpZXdTaXplKG1hcERvbS5jbGllbnRXaWR0aCwgbWFwRG9tLmNsaWVudEhlaWdodCk7XG4gICAgICBfdGhpcy5fb25Cb3VuZHNDaGFuZ2VkKCk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbldpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnJlc2V0U2l6ZU9uSWRsZV8gPSB0cnVlO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25NYXBNb3VzZU1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCFfdGhpcy5tb3VzZUluTWFwXykgcmV0dXJuO1xuXG4gICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciBLX1JFQ0FMQ19DTElFTlRfUkVDVF9NUyA9IDUwO1xuXG4gICAgICBpZiAoY3VyclRpbWUgLSBfdGhpcy5tb3VzZU1vdmVUaW1lXyA+IEtfUkVDQUxDX0NMSUVOVF9SRUNUX01TKSB7XG4gICAgICAgIF90aGlzLmJvdW5kaW5nUmVjdF8gPSBlLmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB9XG4gICAgICBfdGhpcy5tb3VzZU1vdmVUaW1lXyA9IGN1cnJUaW1lO1xuXG4gICAgICB2YXIgbW91c2VQb3NYID0gZS5jbGllbnRYIC0gX3RoaXMuYm91bmRpbmdSZWN0Xy5sZWZ0O1xuICAgICAgdmFyIG1vdXNlUG9zWSA9IGUuY2xpZW50WSAtIF90aGlzLmJvdW5kaW5nUmVjdF8udG9wO1xuXG4gICAgICBpZiAoIV90aGlzLm1vdXNlXykge1xuICAgICAgICBfdGhpcy5tb3VzZV8gPSB7IHg6IDAsIHk6IDAsIGxhdDogMCwgbG5nOiAwIH07XG4gICAgICB9XG5cbiAgICAgIF90aGlzLm1vdXNlXy54ID0gbW91c2VQb3NYO1xuICAgICAgX3RoaXMubW91c2VfLnkgPSBtb3VzZVBvc1k7XG5cbiAgICAgIHZhciBsYXRMbmcgPSBfdGhpcy5nZW9TZXJ2aWNlXy51bnByb2plY3QoX3RoaXMubW91c2VfLCB0cnVlKTtcbiAgICAgIF90aGlzLm1vdXNlXy5sYXQgPSBsYXRMbmcubGF0O1xuICAgICAgX3RoaXMubW91c2VfLmxuZyA9IGxhdExuZy5sbmc7XG5cbiAgICAgIF90aGlzLl9vbkNoaWxkTW91c2VNb3ZlKCk7XG5cbiAgICAgIGlmIChjdXJyVGltZSAtIF90aGlzLmRyYWdUaW1lXyA8IEtfSURMRV9USU1FT1VUKSB7XG4gICAgICAgIF90aGlzLmZpcmVNb3VzZUV2ZW50T25JZGxlXyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5tYXJrZXJzRGlzcGF0Y2hlcl8uZW1pdCgna09OX01PVVNFX1BPU0lUSU9OX0NIQU5HRScpO1xuICAgICAgICBfdGhpcy5maXJlTW91c2VFdmVudE9uSWRsZV8gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX29uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMTtcblxuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uQ2xpY2sgJiYgIV90aGlzLmNoaWxkTW91c2VEb3duQXJnc18gJiYgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBfdGhpcy5jaGlsZE1vdXNlVXBUaW1lXyA+IEtfSURMRV9DTElDS19USU1FT1VUICYmIF90aGlzLmRyYWdUaW1lXyA9PT0gMCAmJiAoX3RoaXMkcHJvcHMxMSA9IF90aGlzLnByb3BzKS5vbkNsaWNrLmFwcGx5KF90aGlzJHByb3BzMTEsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbk1hcENsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMubWFya2Vyc0Rpc3BhdGNoZXJfKSB7XG4gICAgICAgIC8vIHN1cHBvcnQgdG91Y2ggZXZlbnRzIGFuZCByZWNhbGN1bGF0ZSBtb3VzZSBwb3NpdGlvbiBvbiBjbGlja1xuICAgICAgICBfdGhpcy5fb25NYXBNb3VzZU1vdmUoZXZlbnQpO1xuICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKGN1cnJUaW1lIC0gX3RoaXMuZHJhZ1RpbWVfID4gS19JRExFX1RJTUVPVVQpIHtcbiAgICAgICAgICBpZiAoX3RoaXMubW91c2VfKSB7XG4gICAgICAgICAgICBfdGhpcy5fb25DbGljayhfZXh0ZW5kcyh7fSwgX3RoaXMubW91c2VfLCB7XG4gICAgICAgICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLm1hcmtlcnNEaXNwYXRjaGVyXy5lbWl0KCdrT05fQ0xJQ0snLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX29uTWFwTW91c2VEb3duTmF0aXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLm1vdXNlSW5NYXBfKSByZXR1cm47XG5cbiAgICAgIF90aGlzLl9vbk1hcE1vdXNlRG93bihldmVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbk1hcE1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLm1hcmtlcnNEaXNwYXRjaGVyXykge1xuICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKGN1cnJUaW1lIC0gX3RoaXMuZHJhZ1RpbWVfID4gS19JRExFX1RJTUVPVVQpIHtcbiAgICAgICAgICAvLyBIb3ZlcmVkIG1hcmtlciBkZXRlY3RlZCBhdCBtb3VzZSBtb3ZlIGNvdWxkIGJlIGRlbGV0ZWQgYXQgbW91c2UgZG93biB0aW1lXG4gICAgICAgICAgLy8gc28gaXQgd2lsbCBiZSBnb29kIHRvIGZvcmNlIGhvdmVyZWQgbWFya2VyIHJlY2FsY3VsYXRpb25cbiAgICAgICAgICBfdGhpcy5fb25NYXBNb3VzZU1vdmUoZXZlbnQpO1xuICAgICAgICAgIF90aGlzLm1hcmtlcnNEaXNwYXRjaGVyXy5lbWl0KCdrT05fTURPV04nLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX29uTWFwTW91c2VEb3duQ2FwdHVyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgoMCwgX2RldGVjdDIuZGVmYXVsdCkoKS5pc0Nocm9tZSkge1xuICAgICAgICAvLyB0byBmaXggc3RyYW5nZSB6b29tIGluIGNocm9tZVxuICAgICAgICBpZiAoIV90aGlzLm1vdXNlXykge1xuICAgICAgICAgIF90aGlzLnpvb21Db250cm9sQ2xpY2tUaW1lXyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9vbktleURvd25DYXB0dXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCgwLCBfZGV0ZWN0Mi5kZWZhdWx0KSgpLmlzQ2hyb21lKSB7XG4gICAgICAgIF90aGlzLnpvb21Db250cm9sQ2xpY2tUaW1lXyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5faXNDZW50ZXJEZWZpbmVkID0gZnVuY3Rpb24gKGNlbnRlcikge1xuICAgICAgcmV0dXJuIGNlbnRlciAmJiAoKDAsIF9pc19wbGFpbl9vYmplY3QyLmRlZmF1bHQpKGNlbnRlcikgJiYgKDAsIF9pc051bWJlcjIuZGVmYXVsdCkoY2VudGVyLmxhdCkgJiYgKDAsIF9pc051bWJlcjIuZGVmYXVsdCkoY2VudGVyLmxuZykgfHwgY2VudGVyLmxlbmd0aCA9PT0gMiAmJiAoMCwgX2lzTnVtYmVyMi5kZWZhdWx0KShjZW50ZXJbMF0pICYmICgwLCBfaXNOdW1iZXIyLmRlZmF1bHQpKGNlbnRlclsxXSkpO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25Cb3VuZHNDaGFuZ2VkID0gZnVuY3Rpb24gKG1hcCwgbWFwcywgY2FsbEV4dEJvdW5kc0NoYW5nZSkge1xuICAgICAgaWYgKG1hcCkge1xuICAgICAgICB2YXIgZ21DID0gbWFwLmdldENlbnRlcigpO1xuICAgICAgICBfdGhpcy5nZW9TZXJ2aWNlXy5zZXRWaWV3KFtnbUMubGF0KCksIGdtQy5sbmcoKV0sIG1hcC5nZXRab29tKCksIDApO1xuICAgICAgfVxuXG4gICAgICBpZiAoKF90aGlzLnByb3BzLm9uQ2hhbmdlIHx8IF90aGlzLnByb3BzLm9uQm91bmRzQ2hhbmdlKSAmJiBfdGhpcy5nZW9TZXJ2aWNlXy5jYW5Qcm9qZWN0KCkpIHtcbiAgICAgICAgdmFyIHpvb20gPSBfdGhpcy5nZW9TZXJ2aWNlXy5nZXRab29tKCk7XG4gICAgICAgIHZhciBib3VuZHMgPSBfdGhpcy5nZW9TZXJ2aWNlXy5nZXRCb3VuZHMoKTtcbiAgICAgICAgdmFyIGNlbnRlckxhdExuZyA9IF90aGlzLmdlb1NlcnZpY2VfLmdldENlbnRlcigpO1xuXG4gICAgICAgIGlmICghKDAsIF9hcnJheV9oZWxwZXIyLmRlZmF1bHQpKGJvdW5kcywgX3RoaXMucHJldkJvdW5kc18sIGtFUFMpKSB7XG4gICAgICAgICAgaWYgKGNhbGxFeHRCb3VuZHNDaGFuZ2UgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgbWFyZ2luQm91bmRzID0gX3RoaXMuZ2VvU2VydmljZV8uZ2V0Qm91bmRzKF90aGlzLnByb3BzLm1hcmdpbik7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMub25Cb3VuZHNDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgX3RoaXMucHJvcHMub25Cb3VuZHNDaGFuZ2UoX3RoaXMuY2VudGVySXNPYmplY3RfID8gX2V4dGVuZHMoe30sIGNlbnRlckxhdExuZykgOiBbY2VudGVyTGF0TG5nLmxhdCwgY2VudGVyTGF0TG5nLmxuZ10sIHpvb20sIGJvdW5kcywgbWFyZ2luQm91bmRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICBjZW50ZXI6IF9leHRlbmRzKHt9LCBjZW50ZXJMYXRMbmcpLFxuICAgICAgICAgICAgICAgIHpvb206IHpvb20sXG4gICAgICAgICAgICAgICAgYm91bmRzOiB7XG4gICAgICAgICAgICAgICAgICBudzoge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IGJvdW5kc1swXSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBib3VuZHNbMV1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzZToge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IGJvdW5kc1syXSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBib3VuZHNbM11cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzdzoge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IGJvdW5kc1s0XSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBib3VuZHNbNV1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBuZToge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IGJvdW5kc1s2XSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBib3VuZHNbN11cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdW5kczoge1xuICAgICAgICAgICAgICAgICAgbnc6IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBtYXJnaW5Cb3VuZHNbMF0sXG4gICAgICAgICAgICAgICAgICAgIGxuZzogbWFyZ2luQm91bmRzWzFdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBtYXJnaW5Cb3VuZHNbMl0sXG4gICAgICAgICAgICAgICAgICAgIGxuZzogbWFyZ2luQm91bmRzWzNdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc3c6IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBtYXJnaW5Cb3VuZHNbNF0sXG4gICAgICAgICAgICAgICAgICAgIGxuZzogbWFyZ2luQm91bmRzWzVdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBtYXJnaW5Cb3VuZHNbNl0sXG4gICAgICAgICAgICAgICAgICAgIGxuZzogbWFyZ2luQm91bmRzWzddXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHNpemU6IF90aGlzLmdlb1NlcnZpY2VfLmhhc1NpemUoKSA/IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBfdGhpcy5nZW9TZXJ2aWNlXy5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBfdGhpcy5nZW9TZXJ2aWNlXy5nZXRIZWlnaHQoKVxuICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLnByZXZCb3VuZHNfID0gYm91bmRzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fcmVnaXN0ZXJDaGlsZCA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLmdvb2dsZU1hcERvbV8gPSByZWY7XG4gICAgfTtcblxuICAgIF90aGlzLm1vdW50ZWRfID0gZmFsc2U7XG4gICAgX3RoaXMuaW5pdGlhbGl6ZWRfID0gZmFsc2U7XG4gICAgX3RoaXMuZ29vZ2xlQXBpTG9hZGVkQ2FsbGVkXyA9IGZhbHNlO1xuXG4gICAgX3RoaXMubWFwXyA9IG51bGw7XG4gICAgX3RoaXMubWFwc18gPSBudWxsO1xuICAgIF90aGlzLnByZXZCb3VuZHNfID0gbnVsbDtcblxuICAgIF90aGlzLmxheWVyc18gPSB7fTtcblxuICAgIF90aGlzLm1vdXNlXyA9IG51bGw7XG4gICAgX3RoaXMubW91c2VNb3ZlVGltZV8gPSAwO1xuICAgIF90aGlzLmJvdW5kaW5nUmVjdF8gPSBudWxsO1xuICAgIF90aGlzLm1vdXNlSW5NYXBfID0gdHJ1ZTtcblxuICAgIF90aGlzLmRyYWdUaW1lXyA9IDA7XG4gICAgX3RoaXMuZmlyZU1vdXNlRXZlbnRPbklkbGVfID0gZmFsc2U7XG4gICAgX3RoaXMudXBkYXRlQ291bnRlcl8gPSAwO1xuXG4gICAgX3RoaXMubWFya2Vyc0Rpc3BhdGNoZXJfID0gbmV3IF9tYXJrZXJfZGlzcGF0Y2hlcjIuZGVmYXVsdChfdGhpcyk7XG4gICAgX3RoaXMuZ2VvU2VydmljZV8gPSBuZXcgX2dlbzIuZGVmYXVsdChLX0dPT0dMRV9USUxFX1NJWkUpO1xuICAgIF90aGlzLmNlbnRlcklzT2JqZWN0XyA9ICgwLCBfaXNfcGxhaW5fb2JqZWN0Mi5kZWZhdWx0KShfdGhpcy5wcm9wcy5jZW50ZXIpO1xuXG4gICAgX3RoaXMubWluWm9vbV8gPSBERUZBVUxUX01JTl9aT09NO1xuICAgIF90aGlzLmRlZmF1bHREcmFnZ2FibGVPcHRpb25fID0gdHJ1ZTtcblxuICAgIF90aGlzLnpvb21Db250cm9sQ2xpY2tUaW1lXyA9IDA7XG5cbiAgICBfdGhpcy5jaGlsZE1vdXNlRG93bkFyZ3NfID0gbnVsbDtcbiAgICBfdGhpcy5jaGlsZE1vdXNlVXBUaW1lXyA9IDA7XG5cbiAgICBfdGhpcy5nb29nbGVNYXBEb21fID0gbnVsbDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuYXBpS2V5KSB7XG4gICAgICAgIGNvbnNvbGUud2FybignR29vZ2xlTWFwOiAnICsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgICdhcGlLZXkgaXMgZGVwcmVjYXRlZCwgdXNlICcgKyAnYm9vdHN0cmFwVVJMS2V5cz17e2tleTogWU9VUl9BUElfS0VZfX0gaW5zdGVhZC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQm91bmRzQ2hhbmdlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignR29vZ2xlTWFwOiAnICsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgICdvbkJvdW5kc0NoYW5nZSBpcyBkZXByZWNhdGVkLCB1c2UgJyArICdvbkNoYW5nZSh7Y2VudGVyLCB6b29tLCBib3VuZHMsIC4uLm90aGVyfSkgaW5zdGVhZC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLmNlbnRlciA9PT0gdW5kZWZpbmVkICYmIF90aGlzLnByb3BzLmRlZmF1bHRDZW50ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0dvb2dsZU1hcDogY2VudGVyIG9yIGRlZmF1bHRDZW50ZXIgcHJvcGVydHkgbXVzdCBiZSBkZWZpbmVkJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLnpvb20gPT09IHVuZGVmaW5lZCAmJiBfdGhpcy5wcm9wcy5kZWZhdWx0Wm9vbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignR29vZ2xlTWFwOiB6b29tIG9yIGRlZmF1bHRab29tIHByb3BlcnR5IG11c3QgYmUgZGVmaW5lZCcgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF90aGlzLl9pc0NlbnRlckRlZmluZWQoX3RoaXMucHJvcHMuY2VudGVyIHx8IF90aGlzLnByb3BzLmRlZmF1bHRDZW50ZXIpKSB7XG4gICAgICB2YXIgcHJvcHNDZW50ZXIgPSBsYXRMbmcyT2JqKF90aGlzLnByb3BzLmNlbnRlciB8fCBfdGhpcy5wcm9wcy5kZWZhdWx0Q2VudGVyKTtcbiAgICAgIF90aGlzLmdlb1NlcnZpY2VfLnNldFZpZXcocHJvcHNDZW50ZXIsIF90aGlzLnByb3BzLnpvb20gfHwgX3RoaXMucHJvcHMuZGVmYXVsdFpvb20sIDApO1xuICAgIH1cblxuICAgIF90aGlzLnpvb21BbmltYXRpb25JblByb2dyZXNzXyA9IGZhbHNlO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvdmVybGF5Q3JlYXRlZDogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHb29nbGVNYXAsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLm1vdW50ZWRfID0gdHJ1ZTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbldpbmRvd1Jlc2l6ZSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bkNhcHR1cmUsIHRydWUpO1xuICAgICAgdmFyIG1hcERvbSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLmdvb2dsZU1hcERvbV8pO1xuICAgICAgLy8gZ21hcCBjYW4ndCBwcmV2ZW50IG1hcCBkcmFnIGlmIG1vdXNlZG93biBldmVudCBhbHJlYWR5IG9jY3VyZWRcbiAgICAgIC8vIHRoZSBvbmx5IHdvcmthcm91bmQgSSBmaW5kIGlzIHByZXZlbnQgbW91c2Vkb3duIG5hdGl2ZSBicm93c2VyIGV2ZW50XG4gICAgICBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5nb29nbGVNYXBEb21fKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1hcE1vdXNlRG93bk5hdGl2ZSwgdHJ1ZSk7XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fb25DaGlsZE1vdXNlVXAsIGZhbHNlKTtcblxuICAgICAgdmFyIGJvb3RzdHJhcFVSTEtleXMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5hcGlLZXkgJiYgeyBrZXk6IHRoaXMucHJvcHMuYXBpS2V5IH0sIHRoaXMucHJvcHMuYm9vdHN0cmFwVVJMS2V5cyk7XG5cbiAgICAgIHRoaXMucHJvcHMuZ29vZ2xlTWFwTG9hZGVyKGJvb3RzdHJhcFVSTEtleXMpOyAvLyB3ZSBjYW4gc3RhcnQgbG9hZCBpbW1lZGlhdGx5XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyB0byBkZXRlY3Qgc2l6ZVxuICAgICAgICBfdGhpczIuX3NldFZpZXdTaXplKCk7XG4gICAgICAgIGlmIChfdGhpczIuX2lzQ2VudGVyRGVmaW5lZChfdGhpczIucHJvcHMuY2VudGVyIHx8IF90aGlzMi5wcm9wcy5kZWZhdWx0Q2VudGVyKSkge1xuICAgICAgICAgIF90aGlzMi5faW5pdE1hcCgpO1xuICAgICAgICB9XG4gICAgICB9LCAwLCB0aGlzKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLnJlc2V0Qm91bmRzT25SZXNpemUpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICBfZGV0ZWN0RWxlbWVudFJlc2l6ZTIuZGVmYXVsdC5hZGRSZXNpemVMaXN0ZW5lcihtYXBEb20sIHRoYXQuX21hcERvbVJlc2l6ZUNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZWZhdWx0Q2VudGVyICE9PSBuZXh0UHJvcHMuZGVmYXVsdENlbnRlcikge1xuICAgICAgICAgIGNvbnNvbGUud2FybignR29vZ2xlTWFwOiBkZWZhdWx0Q2VudGVyIHByb3AgY2hhbmdlZC4gJyArIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICBcIllvdSBjYW4ndCBjaGFuZ2UgZGVmYXVsdCBwcm9wcy5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZWZhdWx0Wm9vbSAhPT0gbmV4dFByb3BzLmRlZmF1bHRab29tKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdHb29nbGVNYXA6IGRlZmF1bHRab29tIHByb3AgY2hhbmdlZC4gJyArIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICBcIllvdSBjYW4ndCBjaGFuZ2UgZGVmYXVsdCBwcm9wcy5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pc0NlbnRlckRlZmluZWQodGhpcy5wcm9wcy5jZW50ZXIpICYmIHRoaXMuX2lzQ2VudGVyRGVmaW5lZChuZXh0UHJvcHMuY2VudGVyKSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLl9pbml0TWFwKCk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5tYXBfKSB7XG4gICAgICAgIHZhciBjZW50ZXJMYXRMbmcgPSB0aGlzLmdlb1NlcnZpY2VfLmdldENlbnRlcigpO1xuICAgICAgICBpZiAodGhpcy5faXNDZW50ZXJEZWZpbmVkKG5leHRQcm9wcy5jZW50ZXIpKSB7XG4gICAgICAgICAgdmFyIG5leHRQcm9wc0NlbnRlciA9IGxhdExuZzJPYmoobmV4dFByb3BzLmNlbnRlcik7XG4gICAgICAgICAgdmFyIGN1cnJDZW50ZXIgPSB0aGlzLl9pc0NlbnRlckRlZmluZWQodGhpcy5wcm9wcy5jZW50ZXIpID8gbGF0TG5nMk9iaih0aGlzLnByb3BzLmNlbnRlcikgOiBudWxsO1xuXG4gICAgICAgICAgaWYgKCFjdXJyQ2VudGVyIHx8IE1hdGguYWJzKG5leHRQcm9wc0NlbnRlci5sYXQgLSBjdXJyQ2VudGVyLmxhdCkgKyBNYXRoLmFicyhuZXh0UHJvcHNDZW50ZXIubG5nIC0gY3VyckNlbnRlci5sbmcpID4ga0VQUykge1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKG5leHRQcm9wc0NlbnRlci5sYXQgLSBjZW50ZXJMYXRMbmcubGF0KSArIE1hdGguYWJzKG5leHRQcm9wc0NlbnRlci5sbmcgLSBjZW50ZXJMYXRMbmcubG5nKSA+IGtFUFMpIHtcbiAgICAgICAgICAgICAgdGhpcy5tYXBfLnBhblRvKHtcbiAgICAgICAgICAgICAgICBsYXQ6IG5leHRQcm9wc0NlbnRlci5sYXQsXG4gICAgICAgICAgICAgICAgbG5nOiBuZXh0UHJvcHNDZW50ZXIubG5nXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0UHJvcHMuem9vbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gaWYgem9vbSBjaGFnZWQgYnkgdXNlclxuICAgICAgICAgIGlmIChNYXRoLmFicyhuZXh0UHJvcHMuem9vbSAtIHRoaXMucHJvcHMuem9vbSkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm1hcF8uc2V0Wm9vbShuZXh0UHJvcHMuem9vbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZHJhZ2dhYmxlICE9PSB1bmRlZmluZWQgJiYgbmV4dFByb3BzLmRyYWdnYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gcmVzZXQgdG8gZGVmYXVsdFxuICAgICAgICAgIHRoaXMubWFwXy5zZXRPcHRpb25zKHsgZHJhZ2dhYmxlOiB0aGlzLmRlZmF1bHREcmFnZ2FibGVPcHRpb25fIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZHJhZ2dhYmxlICE9PSBuZXh0UHJvcHMuZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgLy8gYWxzbyBwcmV2ZW50IHRoaXMgb24gd2luZG93ICdtb3VzZWRvd24nIGV2ZW50IHRvIHByZXZlbnQgbWFwIG1vdmVcbiAgICAgICAgICB0aGlzLm1hcF8uc2V0T3B0aW9ucyh7IGRyYWdnYWJsZTogbmV4dFByb3BzLmRyYWdnYWJsZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVzZSBzaGFsbG93RXF1YWwgdG8gdHJ5IGF2b2lkIGNhbGxpbmcgbWFwLl9zZXRPcHRpb25zIGlmIG9ubHkgdGhlIHJlZiBjaGFuZ2VzXG4gICAgICAgIGlmIChuZXh0UHJvcHMub3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcy5vcHRpb25zLCBuZXh0UHJvcHMub3B0aW9ucykpIHtcbiAgICAgICAgICB2YXIgbWFwUGxhaW5PYmplY3RzID0gKDAsIF9waWNrMi5kZWZhdWx0KSh0aGlzLm1hcHNfLCBfaXNfcGxhaW5fb2JqZWN0Mi5kZWZhdWx0KTtcbiAgICAgICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBuZXh0UHJvcHMub3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IG5leHRQcm9wcy5vcHRpb25zKG1hcFBsYWluT2JqZWN0cykgOiBuZXh0UHJvcHMub3B0aW9ucztcbiAgICAgICAgICAvLyByZW1vdmUgem9vbSwgY2VudGVyIGFuZCBkcmFnZ2FibGUgb3B0aW9ucyBhcyB0aGVzZSBhcmUgbWFuYWdlZCBieSBnb29nbGUtbWFwcy1yZWFjdFxuICAgICAgICAgIG9wdGlvbnMgPSAoMCwgX29taXQyLmRlZmF1bHQpKG9wdGlvbnMsIFsnem9vbScsICdjZW50ZXInLCAnZHJhZ2dhYmxlJ10pO1xuXG4gICAgICAgICAgaWYgKCdtaW5ab29tJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgbWluWm9vbSA9IHRoaXMuX2NvbXB1dGVNaW5ab29tKG9wdGlvbnMubWluWm9vbU92ZXJyaWRlLCBvcHRpb25zLm1pblpvb20pO1xuICAgICAgICAgICAgb3B0aW9ucy5taW5ab29tID0gX2NoZWNrTWluWm9vbShvcHRpb25zLm1pblpvb20sIG1pblpvb20pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMubWFwXy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRQcm9wcy5sYXllclR5cGVzICE9PSB0aGlzLnByb3BzLmxheWVyVHlwZXMpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmxheWVyc18pLmZvckVhY2goZnVuY3Rpb24gKGxheWVyS2V5KSB7XG4gICAgICAgICAgICBfdGhpczMubGF5ZXJzX1tsYXllcktleV0uc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgZGVsZXRlIF90aGlzMy5sYXllcnNfW2xheWVyS2V5XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLl9zZXRMYXllcnMobmV4dFByb3BzLmxheWVyVHlwZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAvLyBkcmFnZ2FibGUgZG9lcyBub3QgYWZmZWN0IGlubmVyIGNvbXBvbmVudHNcbiAgICAgIHJldHVybiAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKCgwLCBfb21pdDIuZGVmYXVsdCkodGhpcy5wcm9wcywgWydkcmFnZ2FibGUnXSksICgwLCBfb21pdDIuZGVmYXVsdCkobmV4dFByb3BzLCBbJ2RyYWdnYWJsZSddKSkgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHRoaXMubWFya2Vyc0Rpc3BhdGNoZXJfLmVtaXQoJ2tPTl9DSEFOR0UnKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaG92ZXJEaXN0YW5jZSAhPT0gcHJldlByb3BzLmhvdmVyRGlzdGFuY2UpIHtcbiAgICAgICAgdGhpcy5tYXJrZXJzRGlzcGF0Y2hlcl8uZW1pdCgna09OX01PVVNFX1BPU0lUSU9OX0NIQU5HRScpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLm1vdW50ZWRfID0gZmFsc2U7XG4gICAgICB2YXIgbWFwRG9tID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMuZ29vZ2xlTWFwRG9tXyk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25XaW5kb3dSZXNpemUpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd25DYXB0dXJlKTtcbiAgICAgIG1hcERvbS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1hcE1vdXNlRG93bk5hdGl2ZSwgdHJ1ZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX29uQ2hpbGRNb3VzZVVwLCBmYWxzZSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5yZXNldEJvdW5kc09uUmVzaXplKSB7XG4gICAgICAgIF9kZXRlY3RFbGVtZW50UmVzaXplMi5kZWZhdWx0LnJlbW92ZVJlc2l6ZUxpc3RlbmVyKG1hcERvbSwgdGhpcy5fbWFwRG9tUmVzaXplQ2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vdmVybGF5Xykge1xuICAgICAgICAvLyB0aGlzIHRyaWdnZXJzIG92ZXJsYXlfLm9uUmVtb3ZlKCksIHdoaWNoIHdpbGwgdW5tb3VudCB0aGUgPEdvb2dsZU1hcE1hcmtlcnMvPlxuICAgICAgICB0aGlzLm92ZXJsYXlfLnNldE1hcChudWxsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubWFwc18gJiYgdGhpcy5tYXBfKSB7XG4gICAgICAgIC8vIGZpeCBnb29nbGUsIGFzIG90aGVyd2lzZSBsaXN0ZW5lcnMgd29ya3MgZXZlbiB3aXRob3V0IG1hcFxuICAgICAgICB0aGlzLm1hcF8uc2V0T3B0aW9ucyh7IHNjcm9sbHdoZWVsOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5tYXBzXy5ldmVudC5jbGVhckluc3RhbmNlTGlzdGVuZXJzKHRoaXMubWFwXyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWFwXyA9IG51bGw7XG4gICAgICB0aGlzLm1hcHNfID0gbnVsbDtcbiAgICAgIHRoaXMubWFya2Vyc0Rpc3BhdGNoZXJfLmRpc3Bvc2UoKTtcblxuICAgICAgdGhpcy5yZXNldFNpemVPbklkbGVfID0gZmFsc2U7XG5cbiAgICAgIGRlbGV0ZSB0aGlzLm1hcF87XG4gICAgICBkZWxldGUgdGhpcy5tYXJrZXJzRGlzcGF0Y2hlcl87XG4gICAgfVxuICAgIC8vIGNhbGMgbWluWm9vbSBpZiBtYXAgc2l6ZSBhdmFpbGFibGVcbiAgICAvLyBpdCdzIGJldHRlciB0byBub3Qgc2V0IG1pblpvb20gbGVzcyB0aGFuIHRoaXMgY2FsY3VsYXRpb24gZ2l2ZXNcbiAgICAvLyBvdGhlcndpc2UgdGhlcmUgaXMgbm8gaG9tZW9tb3JwaGlzbSBiZXR3ZWVuIHNjcmVlbiBjb29yZGluYXRlcyBhbmQgbWFwXG4gICAgLy8gKG9uZSBtYXAgY29vcmRpbmF0ZSBjYW4gaGF2ZSBkaWZmZXJlbnQgc2NyZWVuIGNvb3JkaW5hdGVzKVxuXG5cbiAgICAvLyB0aGlzIG1ldGhvZCB3b3JrcyBvbmx5IGlmIHRoaXMucHJvcHMub25DaGlsZE1vdXNlRG93biB3YXMgY2FsbGVkXG5cblxuICAgIC8vIHRoaXMgbWV0aG9kIHdvcmtzIG9ubHkgaWYgdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VEb3duIHdhcyBjYWxsZWRcblxuXG4gICAgLy8gS19JRExFX0NMSUNLX1RJTUVPVVQgLSBsb29rcyBsaWtlIDMwMCBpcyBlbm91Z2hcblxuXG4gICAgLy8gZ21hcCBjYW4ndCBwcmV2ZW50IG1hcCBkcmFnIGlmIG1vdXNlZG93biBldmVudCBhbHJlYWR5IG9jY3VyZWRcbiAgICAvLyB0aGUgb25seSB3b3JrYXJvdW5kIEkgZmluZCBpcyBwcmV2ZW50IG1vdXNlZG93biBuYXRpdmUgYnJvd3NlciBldmVudFxuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgbWFwTWFya2VyUHJlcmVuZGVyID0gIXRoaXMuc3RhdGUub3ZlcmxheUNyZWF0ZWQgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZ29vZ2xlX21hcF9tYXJrZXJzX3ByZXJlbmRlcjIuZGVmYXVsdCwge1xuICAgICAgICBleHBlcmltZW50YWw6IHRoaXMucHJvcHMuZXhwZXJpbWVudGFsLFxuICAgICAgICBvbkNoaWxkQ2xpY2s6IHRoaXMuX29uQ2hpbGRDbGljayxcbiAgICAgICAgb25DaGlsZE1vdXNlRG93bjogdGhpcy5fb25DaGlsZE1vdXNlRG93bixcbiAgICAgICAgb25DaGlsZE1vdXNlRW50ZXI6IHRoaXMuX29uQ2hpbGRNb3VzZUVudGVyLFxuICAgICAgICBvbkNoaWxkTW91c2VMZWF2ZTogdGhpcy5fb25DaGlsZE1vdXNlTGVhdmUsXG4gICAgICAgIGdlb1NlcnZpY2U6IHRoaXMuZ2VvU2VydmljZV8sXG4gICAgICAgIHByb2plY3RGcm9tTGVmdFRvcDogZmFsc2UsXG4gICAgICAgIGRpc3RhbmNlVG9Nb3VzZTogdGhpcy5wcm9wcy5kaXN0YW5jZVRvTW91c2UsXG4gICAgICAgIGdldEhvdmVyRGlzdGFuY2U6IHRoaXMuX2dldEhvdmVyRGlzdGFuY2UsXG4gICAgICAgIGRpc3BhdGNoZXI6IHRoaXMubWFya2Vyc0Rpc3BhdGNoZXJfXG4gICAgICB9KSA6IG51bGw7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSxcbiAgICAgICAgICBvbk1vdXNlTW92ZTogdGhpcy5fb25NYXBNb3VzZU1vdmUsXG4gICAgICAgICAgb25Nb3VzZURvd25DYXB0dXJlOiB0aGlzLl9vbk1hcE1vdXNlRG93bkNhcHR1cmUsXG4gICAgICAgICAgb25DbGljazogdGhpcy5fb25NYXBDbGlja1xuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZ29vZ2xlX21hcF9tYXAyLmRlZmF1bHQsIHsgcmVnaXN0ZXJDaGlsZDogdGhpcy5fcmVnaXN0ZXJDaGlsZCB9KSxcbiAgICAgICAgbWFwTWFya2VyUHJlcmVuZGVyXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHb29nbGVNYXA7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Hb29nbGVNYXAucHJvcFR5cGVzID0ge1xuICBhcGlLZXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBib290c3RyYXBVUkxLZXlzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcblxuICBkZWZhdWx0Q2VudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheSwgX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgbGF0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgICBsbmc6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG4gIH0pXSksXG4gIGNlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXksIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGxhdDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gICAgbG5nOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlclxuICB9KV0pLFxuICBkZWZhdWx0Wm9vbTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHpvb206IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBvbkJvdW5kc0NoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hpbGRDbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoaWxkTW91c2VEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hpbGRNb3VzZVVwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hpbGRNb3VzZU1vdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DaGlsZE1vdXNlRW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DaGlsZE1vdXNlTGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25ab29tQW5pbWF0aW9uU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25ab29tQW5pbWF0aW9uRW5kOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uRHJhZzogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbk1hcFR5cGVJZENoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvcHRpb25zOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgZGlzdGFuY2VUb01vdXNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGhvdmVyRGlzdGFuY2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBkZWJvdW5jZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgbWFyZ2luOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LFxuICBnb29nbGVNYXBMb2FkZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICBvbkdvb2dsZUFwaUxvYWRlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICB5ZXNJV2FudFRvVXNlR29vZ2xlTWFwQXBpSW50ZXJuYWxzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGRyYWdnYWJsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIHJlc2V0Qm91bmRzT25SZXNpemU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgbGF5ZXJUeXBlczogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nKSB9O1xuR29vZ2xlTWFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzdGFuY2VUb01vdXNlOiBmdW5jdGlvbiBkaXN0YW5jZVRvTW91c2UocHQsIG1vdXNlUG9zIC8qICwgbWFya2VyUHJvcHMgKi8pIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KChwdC54IC0gbW91c2VQb3MueCkgKiAocHQueCAtIG1vdXNlUG9zLngpICsgKHB0LnkgLSBtb3VzZVBvcy55KSAqIChwdC55IC0gbW91c2VQb3MueSkpO1xuICB9LFxuXG4gIGhvdmVyRGlzdGFuY2U6IDMwLFxuICBkZWJvdW5jZWQ6IHRydWUsXG4gIG9wdGlvbnM6IGRlZmF1bHRPcHRpb25zXyxcbiAgZ29vZ2xlTWFwTG9hZGVyOiBfZ29vZ2xlX21hcF9sb2FkZXIyLmRlZmF1bHQsXG4gIHllc0lXYW50VG9Vc2VHb29nbGVNYXBBcGlJbnRlcm5hbHM6IGZhbHNlLFxuICBzdHlsZToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgbGF5ZXJUeXBlczogW11cbn07XG5Hb29nbGVNYXAuZ29vZ2xlTWFwTG9hZGVyID0gX2dvb2dsZV9tYXBfbG9hZGVyMi5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0ID0gR29vZ2xlTWFwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL2dvb2dsZV9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICBpbnZhcmlhbnQoXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCVzYCBwcm9wIG9uIGAlc2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nLFxuICAgICAgICAgICAgICBwcm9wRnVsbE5hbWUsXG4gICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIHByb3BWYWx1ZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAocHJvcFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2FybmluZyhcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAlcyBhdCBpbmRleCAlcy4nLFxuICAgICAgICAgIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSxcbiAgICAgICAgICBpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9ldmVudGVtaXR0ZXIgPSByZXF1aXJlKCdldmVudGVtaXR0ZXIzJyk7XG5cbnZhciBfZXZlbnRlbWl0dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50ZW1pdHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE1hcmtlckRpc3BhdGNoZXIgPSBmdW5jdGlvbiAoX0V2ZW50RW1pdHRlcikge1xuICBfaW5oZXJpdHMoTWFya2VyRGlzcGF0Y2hlciwgX0V2ZW50RW1pdHRlcik7XG5cbiAgZnVuY3Rpb24gTWFya2VyRGlzcGF0Y2hlcihnbWFwSW5zdGFuY2UpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFya2VyRGlzcGF0Y2hlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTWFya2VyRGlzcGF0Y2hlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1hcmtlckRpc3BhdGNoZXIpKS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLmdtYXBJbnN0YW5jZSA9IGdtYXBJbnN0YW5jZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFya2VyRGlzcGF0Y2hlciwgW3tcbiAgICBrZXk6ICdnZXRDaGlsZHJlbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkcmVuKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ21hcEluc3RhbmNlLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE1vdXNlUG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNb3VzZVBvc2l0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ21hcEluc3RhbmNlLm1vdXNlXztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRVcGRhdGVDb3VudGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VXBkYXRlQ291bnRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdtYXBJbnN0YW5jZS51cGRhdGVDb3VudGVyXztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNwb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIHRoaXMuZ21hcEluc3RhbmNlID0gbnVsbDtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hcmtlckRpc3BhdGNoZXI7XG59KF9ldmVudGVtaXR0ZXIyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNYXJrZXJEaXNwYXRjaGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL21hcmtlcl9kaXNwYXRjaGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vL1xuLy8gV2Ugc3RvcmUgb3VyIEVFIG9iamVjdHMgaW4gYSBwbGFpbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhcmUgZXZlbnQgbmFtZXMuXG4vLyBJZiBgT2JqZWN0LmNyZWF0ZShudWxsKWAgaXMgbm90IHN1cHBvcnRlZCB3ZSBwcmVmaXggdGhlIGV2ZW50IG5hbWVzIHdpdGggYVxuLy8gYH5gIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBidWlsdC1pbiBvYmplY3QgcHJvcGVydGllcyBhcmUgbm90IG92ZXJyaWRkZW4gb3Jcbi8vIHVzZWQgYXMgYW4gYXR0YWNrIHZlY3Rvci5cbi8vIFdlIGFsc28gYXNzdW1lIHRoYXQgYE9iamVjdC5jcmVhdGUobnVsbClgIGlzIGF2YWlsYWJsZSB3aGVuIHRoZSBldmVudCBuYW1lXG4vLyBpcyBhbiBFUzYgU3ltYm9sLlxuLy9cbnZhciBwcmVmaXggPSB0eXBlb2YgT2JqZWN0LmNyZWF0ZSAhPT0gJ2Z1bmN0aW9uJyA/ICd+JyA6IGZhbHNlO1xuXG4vKipcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlIEV2ZW50RW1pdHRlciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBFdmVudCBoYW5kbGVyIHRvIGJlIGNhbGxlZC5cbiAqIEBwYXJhbSB7TWl4ZWR9IGNvbnRleHQgQ29udGV4dCBmb3IgZnVuY3Rpb24gZXhlY3V0aW9uLlxuICogQHBhcmFtIHtCb29sZWFufSBbb25jZT1mYWxzZV0gT25seSBlbWl0IG9uY2VcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFRShmbiwgY29udGV4dCwgb25jZSkge1xuICB0aGlzLmZuID0gZm47XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMub25jZSA9IG9uY2UgfHwgZmFsc2U7XG59XG5cbi8qKlxuICogTWluaW1hbCBFdmVudEVtaXR0ZXIgaW50ZXJmYWNlIHRoYXQgaXMgbW9sZGVkIGFnYWluc3QgdGhlIE5vZGUuanNcbiAqIEV2ZW50RW1pdHRlciBpbnRlcmZhY2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7IC8qIE5vdGhpbmcgdG8gc2V0ICovIH1cblxuLyoqXG4gKiBIb2xkIHRoZSBhc3NpZ25lZCBFdmVudEVtaXR0ZXJzIGJ5IG5hbWUuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgbGlzdGluZyB0aGUgZXZlbnRzIGZvciB3aGljaCB0aGUgZW1pdHRlciBoYXMgcmVnaXN0ZXJlZFxuICogbGlzdGVuZXJzLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHNcbiAgICAsIG5hbWVzID0gW11cbiAgICAsIG5hbWU7XG5cbiAgaWYgKCFldmVudHMpIHJldHVybiBuYW1lcztcblxuICBmb3IgKG5hbWUgaW4gZXZlbnRzKSB7XG4gICAgaWYgKGhhcy5jYWxsKGV2ZW50cywgbmFtZSkpIG5hbWVzLnB1c2gocHJlZml4ID8gbmFtZS5zbGljZSgxKSA6IG5hbWUpO1xuICB9XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICByZXR1cm4gbmFtZXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZXZlbnRzKSk7XG4gIH1cblxuICByZXR1cm4gbmFtZXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhIGxpc3Qgb2YgYXNzaWduZWQgZXZlbnQgbGlzdGVuZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgZXZlbnRzIHRoYXQgc2hvdWxkIGJlIGxpc3RlZC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXhpc3RzIFdlIG9ubHkgbmVlZCB0byBrbm93IGlmIHRoZXJlIGFyZSBsaXN0ZW5lcnMuXG4gKiBAcmV0dXJucyB7QXJyYXl8Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50LCBleGlzdHMpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGF2YWlsYWJsZSA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoZXhpc3RzKSByZXR1cm4gISFhdmFpbGFibGU7XG4gIGlmICghYXZhaWxhYmxlKSByZXR1cm4gW107XG4gIGlmIChhdmFpbGFibGUuZm4pIHJldHVybiBbYXZhaWxhYmxlLmZuXTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGF2YWlsYWJsZS5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBhdmFpbGFibGVbaV0uZm47XG4gIH1cblxuICByZXR1cm4gZWU7XG59O1xuXG4vKipcbiAqIEVtaXQgYW4gZXZlbnQgdG8gYWxsIHJlZ2lzdGVyZWQgZXZlbnQgbGlzdGVuZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gSW5kaWNhdGlvbiBpZiB3ZSd2ZSBlbWl0dGVkIGFuIGV2ZW50LlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGxpc3RlbmVycy5mbikge1xuICAgIGlmIChsaXN0ZW5lcnMub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgc3dpdGNoIChsZW4pIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSksIHRydWU7XG4gICAgICBjYXNlIDM6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCksIHRydWU7XG4gICAgICBjYXNlIDY6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGkgPCBsZW47IGkrKykge1xuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZuLmFwcGx5KGxpc3RlbmVycy5jb250ZXh0LCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgLCBqO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyc1tpXS5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgc3dpdGNoIChsZW4pIHtcbiAgICAgICAgY2FzZSAxOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCk7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSk7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoIWFyZ3MpIGZvciAoaiA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICBhcmdzW2ogLSAxXSA9IGFyZ3VtZW50c1tqXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4uYXBwbHkobGlzdGVuZXJzW2ldLmNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBhIG5ldyBFdmVudExpc3RlbmVyIGZvciB0aGUgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IE5hbWUgb2YgdGhlIGV2ZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gQ2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge01peGVkfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCBvZiB0aGUgZnVuY3Rpb24uXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCB0aGlzKVxuICAgICwgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50cykgdGhpcy5fZXZlbnRzID0gcHJlZml4ID8ge30gOiBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGxpc3RlbmVyO1xuICBlbHNlIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdLmZuKSB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGxpc3RlbmVyKTtcbiAgICBlbHNlIHRoaXMuX2V2ZW50c1tldnRdID0gW1xuICAgICAgdGhpcy5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXG4gICAgXTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGQgYW4gRXZlbnRMaXN0ZW5lciB0aGF0J3Mgb25seSBjYWxsZWQgb25jZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgTmFtZSBvZiB0aGUgZXZlbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBDYWxsYmFjayBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7TWl4ZWR9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IG9mIHRoZSBmdW5jdGlvbi5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCB0aGlzLCB0cnVlKVxuICAgICwgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50cykgdGhpcy5fZXZlbnRzID0gcHJlZml4ID8ge30gOiBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGxpc3RlbmVyO1xuICBlbHNlIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdLmZuKSB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGxpc3RlbmVyKTtcbiAgICBlbHNlIHRoaXMuX2V2ZW50c1tldnRdID0gW1xuICAgICAgdGhpcy5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXG4gICAgXTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgZXZlbnQgd2Ugd2FudCB0byByZW1vdmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgdGhhdCB3ZSBuZWVkIHRvIGZpbmQuXG4gKiBAcGFyYW0ge01peGVkfSBjb250ZXh0IE9ubHkgcmVtb3ZlIGxpc3RlbmVycyBtYXRjaGluZyB0aGlzIGNvbnRleHQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgT25seSByZW1vdmUgb25jZSBsaXN0ZW5lcnMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIHRoaXM7XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdXG4gICAgLCBldmVudHMgPSBbXTtcblxuICBpZiAoZm4pIHtcbiAgICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgICBpZiAoXG4gICAgICAgICAgIGxpc3RlbmVycy5mbiAhPT0gZm5cbiAgICAgICAgfHwgKG9uY2UgJiYgIWxpc3RlbmVycy5vbmNlKVxuICAgICAgICB8fCAoY29udGV4dCAmJiBsaXN0ZW5lcnMuY29udGV4dCAhPT0gY29udGV4dClcbiAgICAgICkge1xuICAgICAgICBldmVudHMucHVzaChsaXN0ZW5lcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4gIT09IGZuXG4gICAgICAgICAgfHwgKG9uY2UgJiYgIWxpc3RlbmVyc1tpXS5vbmNlKVxuICAgICAgICAgIHx8IChjb250ZXh0ICYmIGxpc3RlbmVyc1tpXS5jb250ZXh0ICE9PSBjb250ZXh0KVxuICAgICAgICApIHtcbiAgICAgICAgICBldmVudHMucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9cbiAgLy8gUmVzZXQgdGhlIGFycmF5LCBvciByZW1vdmUgaXQgY29tcGxldGVseSBpZiB3ZSBoYXZlIG5vIG1vcmUgbGlzdGVuZXJzLlxuICAvL1xuICBpZiAoZXZlbnRzLmxlbmd0aCkge1xuICAgIHRoaXMuX2V2ZW50c1tldnRdID0gZXZlbnRzLmxlbmd0aCA9PT0gMSA/IGV2ZW50c1swXSA6IGV2ZW50cztcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW2V2dF07XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgb3Igb25seSB0aGUgbGlzdGVuZXJzIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgZXZlbnQgd2FudCB0byByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICBpZiAoIXRoaXMuX2V2ZW50cykgcmV0dXJuIHRoaXM7XG5cbiAgaWYgKGV2ZW50KSBkZWxldGUgdGhpcy5fZXZlbnRzW3ByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRdO1xuICBlbHNlIHRoaXMuX2V2ZW50cyA9IHByZWZpeCA/IHt9IDogT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBBbGlhcyBtZXRob2RzIG5hbWVzIGJlY2F1c2UgcGVvcGxlIHJvbGwgbGlrZSB0aGF0LlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuXG4vL1xuLy8gVGhpcyBmdW5jdGlvbiBkb2Vzbid0IGFwcGx5IGFueW1vcmUuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBzdHlsZSA9IHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIGxlZnQ6IDAsXG4gIHRvcDogMCxcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nOiAwLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xufTtcblxudmFyIEdvb2dsZU1hcE1hcCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHb29nbGVNYXBNYXAsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdvb2dsZU1hcE1hcCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR29vZ2xlTWFwTWFwKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoR29vZ2xlTWFwTWFwLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoR29vZ2xlTWFwTWFwKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR29vZ2xlTWFwTWFwLCBbe1xuICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gZGlzYWJsZSByZWFjdCBvbiB0aGlzIGRpdlxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciByZWdpc3RlckNoaWxkID0gdGhpcy5wcm9wcy5yZWdpc3RlckNoaWxkO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgcmVmOiByZWdpc3RlckNoaWxkLCBzdHlsZTogc3R5bGUgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdvb2dsZU1hcE1hcDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEdvb2dsZU1hcE1hcDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi9nb29nbGVfbWFwX21hcC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHsgc3R5bGU6IHN0eWxlIH0sXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2dvb2dsZV9tYXBfbWFya2VyczIuZGVmYXVsdCwgX2V4dGVuZHMoe30sIHByb3BzLCB7IHByZXJlbmRlcjogdHJ1ZSB9KSlcbiAgKTtcbn07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9nb29nbGVfbWFwX21hcmtlcnMgPSByZXF1aXJlKCcuL2dvb2dsZV9tYXBfbWFya2VycycpO1xuXG52YXIgX2dvb2dsZV9tYXBfbWFya2VyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nb29nbGVfbWFwX21hcmtlcnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc3R5bGUgPSB7XG4gIHdpZHRoOiAnNTAlJyxcbiAgaGVpZ2h0OiAnNTAlJyxcbiAgbGVmdDogJzUwJScsXG4gIHRvcDogJzUwJScsXG4gIC8vIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4gIG1hcmdpbjogMCxcbiAgcGFkZGluZzogMCxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvZ29vZ2xlX21hcF9tYXJrZXJzX3ByZXJlbmRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ29vZ2xlTWFwTG9hZGVyO1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xudmFyICRzY3JpcHRfID0gbnVsbDtcblxudmFyIGxvYWRQcm9taXNlXyA9IHZvaWQgMDtcblxudmFyIHJlc29sdmVDdXN0b21Qcm9taXNlXyA9IHZvaWQgMDtcbnZhciBfY3VzdG9tUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gIHJlc29sdmVDdXN0b21Qcm9taXNlXyA9IHJlc29sdmU7XG59KTtcblxuLy8gVE9ETyBhZGQgbGlicmFyaWVzIGxhbmd1YWdlIGFuZCBvdGhlciBtYXAgb3B0aW9uc1xuZnVuY3Rpb24gZ29vZ2xlTWFwTG9hZGVyKGJvb3RzdHJhcFVSTEtleXMpIHtcbiAgaWYgKCEkc2NyaXB0Xykge1xuICAgICRzY3JpcHRfID0gcmVxdWlyZSgnc2NyaXB0anMnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG5cbiAgLy8gY2FsbCBmcm9tIG91dHNpZGUgZ29vZ2xlLW1hcC1yZWFjdFxuICAvLyB3aWxsIGJlIGFzIHNvb24gYXMgbG9hZFByb21pc2VfIHJlc29sdmVkXG4gIGlmICghYm9vdHN0cmFwVVJMS2V5cykge1xuICAgIHJldHVybiBfY3VzdG9tUHJvbWlzZTtcbiAgfVxuXG4gIGlmIChsb2FkUHJvbWlzZV8pIHtcbiAgICByZXR1cm4gbG9hZFByb21pc2VfO1xuICB9XG5cbiAgbG9hZFByb21pc2VfID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ29vZ2xlIG1hcCBjYW5ub3QgYmUgbG9hZGVkIG91dHNpZGUgYnJvd3NlciBlbnYnKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5nb29nbGUgJiYgd2luZG93Lmdvb2dsZS5tYXBzKSB7XG4gICAgICByZXNvbHZlKHdpbmRvdy5nb29nbGUubWFwcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuXyRfZ29vZ2xlX21hcF9pbml0aWFsaXplXyRfICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ29vZ2xlIG1hcCBpbml0aWFsaXphdGlvbiBlcnJvcicpKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuXyRfZ29vZ2xlX21hcF9pbml0aWFsaXplXyRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgZGVsZXRlIHdpbmRvdy5fJF9nb29nbGVfbWFwX2luaXRpYWxpemVfJF87XG4gICAgICByZXNvbHZlKHdpbmRvdy5nb29nbGUubWFwcyk7XG4gICAgfTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoYm9vdHN0cmFwVVJMS2V5cykuaW5kZXhPZignY2FsbGJhY2snKSA+IC0xKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1wiY2FsbGJhY2tcIiBrZXkgaW4gYm9vdHN0cmFwVVJMS2V5cyBpcyBub3QgYWxsb3dlZCwgJyArIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgJ3VzZSBvbkdvb2dsZUFwaUxvYWRlZCBwcm9wZXJ0eSBpbnN0ZWFkJyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignXCJjYWxsYmFja1wiIGtleSBpbiBib290c3RyYXBVUkxLZXlzIGlzIG5vdCBhbGxvd2VkLCAnICsgJ3VzZSBvbkdvb2dsZUFwaUxvYWRlZCBwcm9wZXJ0eSBpbnN0ZWFkJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMoYm9vdHN0cmFwVVJMS2V5cykucmVkdWNlKGZ1bmN0aW9uIChyLCBrZXkpIHtcbiAgICAgIHJldHVybiByICsgJyYnICsga2V5ICsgJz0nICsgYm9vdHN0cmFwVVJMS2V5c1trZXldO1xuICAgIH0sICcnKTtcblxuICAgICRzY3JpcHRfKCdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/Y2FsbGJhY2s9XyRfZ29vZ2xlX21hcF9pbml0aWFsaXplXyRfJyArIHF1ZXJ5U3RyaW5nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHdpbmRvdy5nb29nbGUgPT09ICd1bmRlZmluZWQnICYmIHJlamVjdChuZXcgRXJyb3IoJ2dvb2dsZSBtYXAgaW5pdGlhbGl6YXRpb24gZXJyb3IgKG5vdCBsb2FkZWQpJykpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXNvbHZlQ3VzdG9tUHJvbWlzZV8obG9hZFByb21pc2VfKTtcblxuICByZXR1cm4gbG9hZFByb21pc2VfO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2xvYWRlcnMvZ29vZ2xlX21hcF9sb2FkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICAqICRzY3JpcHQuanMgSlMgbG9hZGVyICYgZGVwZW5kZW5jeSBtYW5hZ2VyXG4gICogaHR0cHM6Ly9naXRodWIuY29tL2RlZC9zY3JpcHQuanNcbiAgKiAoYykgRHVzdGluIERpYXogMjAxNCB8IExpY2Vuc2UgTUlUXG4gICovXG5cbihmdW5jdGlvbiAobmFtZSwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIHRoaXNbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0pKCckc2NyaXB0JywgZnVuY3Rpb24gKCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnRcbiAgICAsIGhlYWQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICAgICwgcyA9ICdzdHJpbmcnXG4gICAgLCBmID0gZmFsc2VcbiAgICAsIHB1c2ggPSAncHVzaCdcbiAgICAsIHJlYWR5U3RhdGUgPSAncmVhZHlTdGF0ZSdcbiAgICAsIG9ucmVhZHlzdGF0ZWNoYW5nZSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICAgLCBsaXN0ID0ge31cbiAgICAsIGlkcyA9IHt9XG4gICAgLCBkZWxheSA9IHt9XG4gICAgLCBzY3JpcHRzID0ge31cbiAgICAsIHNjcmlwdHBhdGhcbiAgICAsIHVybEFyZ3NcblxuICBmdW5jdGlvbiBldmVyeShhciwgZm4pIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGFyLmxlbmd0aDsgaSA8IGo7ICsraSkgaWYgKCFmbihhcltpXSkpIHJldHVybiBmXG4gICAgcmV0dXJuIDFcbiAgfVxuICBmdW5jdGlvbiBlYWNoKGFyLCBmbikge1xuICAgIGV2ZXJ5KGFyLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiAhZm4oZWwpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uICRzY3JpcHQocGF0aHMsIGlkT3JEb25lLCBvcHREb25lKSB7XG4gICAgcGF0aHMgPSBwYXRoc1twdXNoXSA/IHBhdGhzIDogW3BhdGhzXVxuICAgIHZhciBpZE9yRG9uZUlzRG9uZSA9IGlkT3JEb25lICYmIGlkT3JEb25lLmNhbGxcbiAgICAgICwgZG9uZSA9IGlkT3JEb25lSXNEb25lID8gaWRPckRvbmUgOiBvcHREb25lXG4gICAgICAsIGlkID0gaWRPckRvbmVJc0RvbmUgPyBwYXRocy5qb2luKCcnKSA6IGlkT3JEb25lXG4gICAgICAsIHF1ZXVlID0gcGF0aHMubGVuZ3RoXG4gICAgZnVuY3Rpb24gbG9vcEZuKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmNhbGwgPyBpdGVtKCkgOiBsaXN0W2l0ZW1dXG4gICAgfVxuICAgIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgaWYgKCEtLXF1ZXVlKSB7XG4gICAgICAgIGxpc3RbaWRdID0gMVxuICAgICAgICBkb25lICYmIGRvbmUoKVxuICAgICAgICBmb3IgKHZhciBkc2V0IGluIGRlbGF5KSB7XG4gICAgICAgICAgZXZlcnkoZHNldC5zcGxpdCgnfCcpLCBsb29wRm4pICYmICFlYWNoKGRlbGF5W2RzZXRdLCBsb29wRm4pICYmIChkZWxheVtkc2V0XSA9IFtdKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZWFjaChwYXRocywgZnVuY3Rpb24gbG9hZGluZyhwYXRoLCBmb3JjZSkge1xuICAgICAgICBpZiAocGF0aCA9PT0gbnVsbCkgcmV0dXJuIGNhbGxiYWNrKClcbiAgICAgICAgXG4gICAgICAgIGlmICghZm9yY2UgJiYgIS9eaHR0cHM/OlxcL1xcLy8udGVzdChwYXRoKSAmJiBzY3JpcHRwYXRoKSB7XG4gICAgICAgICAgcGF0aCA9IChwYXRoLmluZGV4T2YoJy5qcycpID09PSAtMSkgPyBzY3JpcHRwYXRoICsgcGF0aCArICcuanMnIDogc2NyaXB0cGF0aCArIHBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChzY3JpcHRzW3BhdGhdKSB7XG4gICAgICAgICAgaWYgKGlkKSBpZHNbaWRdID0gMVxuICAgICAgICAgIHJldHVybiAoc2NyaXB0c1twYXRoXSA9PSAyKSA/IGNhbGxiYWNrKCkgOiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgbG9hZGluZyhwYXRoLCB0cnVlKSB9LCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgc2NyaXB0c1twYXRoXSA9IDFcbiAgICAgICAgaWYgKGlkKSBpZHNbaWRdID0gMVxuICAgICAgICBjcmVhdGUocGF0aCwgY2FsbGJhY2spXG4gICAgICB9KVxuICAgIH0sIDApXG4gICAgcmV0dXJuICRzY3JpcHRcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZShwYXRoLCBmbikge1xuICAgIHZhciBlbCA9IGRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSwgbG9hZGVkXG4gICAgZWwub25sb2FkID0gZWwub25lcnJvciA9IGVsW29ucmVhZHlzdGF0ZWNoYW5nZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoKGVsW3JlYWR5U3RhdGVdICYmICEoL15jfGxvYWRlLy50ZXN0KGVsW3JlYWR5U3RhdGVdKSkpIHx8IGxvYWRlZCkgcmV0dXJuO1xuICAgICAgZWwub25sb2FkID0gZWxbb25yZWFkeXN0YXRlY2hhbmdlXSA9IG51bGxcbiAgICAgIGxvYWRlZCA9IDFcbiAgICAgIHNjcmlwdHNbcGF0aF0gPSAyXG4gICAgICBmbigpXG4gICAgfVxuICAgIGVsLmFzeW5jID0gMVxuICAgIGVsLnNyYyA9IHVybEFyZ3MgPyBwYXRoICsgKHBhdGguaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyB1cmxBcmdzIDogcGF0aDtcbiAgICBoZWFkLmluc2VydEJlZm9yZShlbCwgaGVhZC5sYXN0Q2hpbGQpXG4gIH1cblxuICAkc2NyaXB0LmdldCA9IGNyZWF0ZVxuXG4gICRzY3JpcHQub3JkZXIgPSBmdW5jdGlvbiAoc2NyaXB0cywgaWQsIGRvbmUpIHtcbiAgICAoZnVuY3Rpb24gY2FsbGJhY2socykge1xuICAgICAgcyA9IHNjcmlwdHMuc2hpZnQoKVxuICAgICAgIXNjcmlwdHMubGVuZ3RoID8gJHNjcmlwdChzLCBpZCwgZG9uZSkgOiAkc2NyaXB0KHMsIGNhbGxiYWNrKVxuICAgIH0oKSlcbiAgfVxuXG4gICRzY3JpcHQucGF0aCA9IGZ1bmN0aW9uIChwKSB7XG4gICAgc2NyaXB0cGF0aCA9IHBcbiAgfVxuICAkc2NyaXB0LnVybEFyZ3MgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdXJsQXJncyA9IHN0cjtcbiAgfVxuICAkc2NyaXB0LnJlYWR5ID0gZnVuY3Rpb24gKGRlcHMsIHJlYWR5LCByZXEpIHtcbiAgICBkZXBzID0gZGVwc1twdXNoXSA/IGRlcHMgOiBbZGVwc11cbiAgICB2YXIgbWlzc2luZyA9IFtdO1xuICAgICFlYWNoKGRlcHMsIGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIGxpc3RbZGVwXSB8fCBtaXNzaW5nW3B1c2hdKGRlcCk7XG4gICAgfSkgJiYgZXZlcnkoZGVwcywgZnVuY3Rpb24gKGRlcCkge3JldHVybiBsaXN0W2RlcF19KSA/XG4gICAgICByZWFkeSgpIDogIWZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlbGF5W2tleV0gPSBkZWxheVtrZXldIHx8IFtdXG4gICAgICBkZWxheVtrZXldW3B1c2hdKHJlYWR5KVxuICAgICAgcmVxICYmIHJlcShtaXNzaW5nKVxuICAgIH0oZGVwcy5qb2luKCd8JykpXG4gICAgcmV0dXJuICRzY3JpcHRcbiAgfVxuXG4gICRzY3JpcHQuZG9uZSA9IGZ1bmN0aW9uIChpZE9yRG9uZSkge1xuICAgICRzY3JpcHQoW251bGxdLCBpZE9yRG9uZSlcbiAgfVxuXG4gIHJldHVybiAkc2NyaXB0XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NjcmlwdGpzL2Rpc3Qvc2NyaXB0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZXRlY3RCcm93c2VyO1xuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81ODk5NzgzL2RldGVjdC1zYWZhcmktY2hyb21lLWllLWZpcmVmb3gtb3BlcmEtd2l0aC11c2VyLWFnZW50XG52YXIgZGV0ZWN0QnJvd3NlclJlc3VsdF8gPSBudWxsO1xuXG5mdW5jdGlvbiBkZXRlY3RCcm93c2VyKCkge1xuICBpZiAoZGV0ZWN0QnJvd3NlclJlc3VsdF8pIHtcbiAgICByZXR1cm4gZGV0ZWN0QnJvd3NlclJlc3VsdF87XG4gIH1cblxuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgaXNFeHBsb3JlciA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTVNJRScpID4gLTE7XG4gICAgdmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID4gLTE7XG4gICAgdmFyIGlzT3BlcmEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignb3AnKSA+IC0xO1xuXG4gICAgdmFyIGlzQ2hyb21lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA+IC0xO1xuICAgIHZhciBpc1NhZmFyaSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignU2FmYXJpJykgPiAtMTtcblxuICAgIGlmIChpc0Nocm9tZSAmJiBpc1NhZmFyaSkge1xuICAgICAgaXNTYWZhcmkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNDaHJvbWUgJiYgaXNPcGVyYSkge1xuICAgICAgaXNDaHJvbWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkZXRlY3RCcm93c2VyUmVzdWx0XyA9IHtcbiAgICAgIGlzRXhwbG9yZXI6IGlzRXhwbG9yZXIsXG4gICAgICBpc0ZpcmVmb3g6IGlzRmlyZWZveCxcbiAgICAgIGlzT3BlcmE6IGlzT3BlcmEsXG4gICAgICBpc0Nocm9tZTogaXNDaHJvbWUsXG4gICAgICBpc1NhZmFyaTogaXNTYWZhcmlcbiAgICB9O1xuICAgIHJldHVybiBkZXRlY3RCcm93c2VyUmVzdWx0XztcbiAgfVxuXG4gIGRldGVjdEJyb3dzZXJSZXN1bHRfID0ge1xuICAgIGlzQ2hyb21lOiB0cnVlLFxuICAgIGlzRXhwbG9yZXI6IGZhbHNlLFxuICAgIGlzRmlyZWZveDogZmFsc2UsXG4gICAgaXNPcGVyYTogZmFsc2UsXG4gICAgaXNTYWZhcmk6IGZhbHNlXG4gIH07XG5cbiAgcmV0dXJuIGRldGVjdEJyb3dzZXJSZXN1bHRfO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2RldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3BvaW50R2VvbWV0cnkgPSByZXF1aXJlKCdwb2ludC1nZW9tZXRyeScpO1xuXG52YXIgX3BvaW50R2VvbWV0cnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9pbnRHZW9tZXRyeSk7XG5cbnZhciBfbGF0X2xuZyA9IHJlcXVpcmUoJy4vbGliX2dlby9sYXRfbG5nJyk7XG5cbnZhciBfbGF0X2xuZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sYXRfbG5nKTtcblxudmFyIF90cmFuc2Zvcm0gPSByZXF1aXJlKCcuL2xpYl9nZW8vdHJhbnNmb3JtJyk7XG5cbnZhciBfdHJhbnNmb3JtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBHZW8gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEdlbyh0aWxlU2l6ZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHZW8pO1xuXG4gICAgLy8gbGVmdF90b3AgdmlldyDQv9C+0LvRjNC30YPQtdGCINCz0YPQs9C7XG4gICAgLy8gc3VwZXIoKTtcbiAgICB0aGlzLmhhc1NpemVfID0gZmFsc2U7XG4gICAgdGhpcy5oYXNWaWV3XyA9IGZhbHNlO1xuICAgIHRoaXMudHJhbnNmb3JtXyA9IG5ldyBfdHJhbnNmb3JtMi5kZWZhdWx0KHRpbGVTaXplIHx8IDUxMik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR2VvLCBbe1xuICAgIGtleTogJ3NldFZpZXcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWaWV3KGNlbnRlciwgem9vbSwgYmVhcmluZykge1xuICAgICAgdGhpcy50cmFuc2Zvcm1fLmNlbnRlciA9IF9sYXRfbG5nMi5kZWZhdWx0LmNvbnZlcnQoY2VudGVyKTtcbiAgICAgIHRoaXMudHJhbnNmb3JtXy56b29tID0gK3pvb207XG4gICAgICB0aGlzLnRyYW5zZm9ybV8uYmVhcmluZyA9ICtiZWFyaW5nO1xuICAgICAgdGhpcy5oYXNWaWV3XyA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0Vmlld1NpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWaWV3U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybV8ud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMudHJhbnNmb3JtXy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB0aGlzLmhhc1NpemVfID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYW5Qcm9qZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUHJvamVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhc1NpemVfICYmIHRoaXMuaGFzVmlld187XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFzU2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc1NpemUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNTaXplXztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1bnByb2plY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnByb2plY3QocHRYWSwgdmlld0Zyb21MZWZ0VG9wKSB7XG4gICAgICB2YXIgcHRSZXMgPSB2b2lkIDA7XG4gICAgICBpZiAodmlld0Zyb21MZWZ0VG9wKSB7XG4gICAgICAgIHZhciBwdHh5ID0gX2V4dGVuZHMoe30sIHB0WFkpO1xuICAgICAgICBwdHh5LnggLT0gdGhpcy50cmFuc2Zvcm1fLndpZHRoIC8gMjtcbiAgICAgICAgcHR4eS55IC09IHRoaXMudHJhbnNmb3JtXy5oZWlnaHQgLyAyO1xuICAgICAgICBwdFJlcyA9IHRoaXMudHJhbnNmb3JtXy5wb2ludExvY2F0aW9uKF9wb2ludEdlb21ldHJ5Mi5kZWZhdWx0LmNvbnZlcnQocHR4eSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHRSZXMgPSB0aGlzLnRyYW5zZm9ybV8ucG9pbnRMb2NhdGlvbihfcG9pbnRHZW9tZXRyeTIuZGVmYXVsdC5jb252ZXJ0KHB0WFkpKTtcbiAgICAgIH1cblxuICAgICAgcHRSZXMubG5nIC09IDM2MCAqIE1hdGgucm91bmQocHRSZXMubG5nIC8gMzYwKTsgLy8gY29udmVydCAyIGdvb2dsZSBmb3JtYXRcbiAgICAgIHJldHVybiBwdFJlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwcm9qZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvamVjdChwdExhdExuZywgdmlld0Zyb21MZWZ0VG9wKSB7XG4gICAgICBpZiAodmlld0Zyb21MZWZ0VG9wKSB7XG4gICAgICAgIHZhciBwdCA9IHRoaXMudHJhbnNmb3JtXy5sb2NhdGlvblBvaW50KF9sYXRfbG5nMi5kZWZhdWx0LmNvbnZlcnQocHRMYXRMbmcpKTtcbiAgICAgICAgcHQueCAtPSB0aGlzLnRyYW5zZm9ybV8ud29ybGRTaXplICogTWF0aC5yb3VuZChwdC54IC8gdGhpcy50cmFuc2Zvcm1fLndvcmxkU2l6ZSk7XG5cbiAgICAgICAgcHQueCArPSB0aGlzLnRyYW5zZm9ybV8ud2lkdGggLyAyO1xuICAgICAgICBwdC55ICs9IHRoaXMudHJhbnNmb3JtXy5oZWlnaHQgLyAyO1xuXG4gICAgICAgIHJldHVybiBwdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtXy5sb2NhdGlvblBvaW50KF9sYXRfbG5nMi5kZWZhdWx0LmNvbnZlcnQocHRMYXRMbmcpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRXaWR0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtXy53aWR0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRIZWlnaHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRIZWlnaHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1fLmhlaWdodDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRab29tJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Wm9vbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybV8uem9vbTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDZW50ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDZW50ZXIoKSB7XG4gICAgICB2YXIgcHRSZXMgPSB0aGlzLnRyYW5zZm9ybV8ucG9pbnRMb2NhdGlvbih7IHg6IDAsIHk6IDAgfSk7XG5cbiAgICAgIHJldHVybiBwdFJlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRCb3VuZHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCb3VuZHMobWFyZ2lucywgcm91bmRGYWN0b3IpIHtcbiAgICAgIHZhciBibmRUID0gbWFyZ2lucyAmJiBtYXJnaW5zWzBdIHx8IDA7XG4gICAgICB2YXIgYm5kUiA9IG1hcmdpbnMgJiYgbWFyZ2luc1sxXSB8fCAwO1xuICAgICAgdmFyIGJuZEIgPSBtYXJnaW5zICYmIG1hcmdpbnNbMl0gfHwgMDtcbiAgICAgIHZhciBibmRMID0gbWFyZ2lucyAmJiBtYXJnaW5zWzNdIHx8IDA7XG5cbiAgICAgIGlmICh0aGlzLmdldFdpZHRoKCkgLSBibmRSIC0gYm5kTCA+IDAgJiYgdGhpcy5nZXRIZWlnaHQoKSAtIGJuZFQgLSBibmRCID4gMCkge1xuICAgICAgICB2YXIgdG9wTGVmdENvcm5lciA9IHRoaXMudW5wcm9qZWN0KHtcbiAgICAgICAgICB4OiBibmRMIC0gdGhpcy5nZXRXaWR0aCgpIC8gMixcbiAgICAgICAgICB5OiBibmRUIC0gdGhpcy5nZXRIZWlnaHQoKSAvIDJcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBib3R0b21SaWdodENvcm5lciA9IHRoaXMudW5wcm9qZWN0KHtcbiAgICAgICAgICB4OiB0aGlzLmdldFdpZHRoKCkgLyAyIC0gYm5kUixcbiAgICAgICAgICB5OiB0aGlzLmdldEhlaWdodCgpIC8gMiAtIGJuZEJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHJlcyA9IFt0b3BMZWZ0Q29ybmVyLmxhdCwgdG9wTGVmdENvcm5lci5sbmcsIC8vIE5XXG4gICAgICAgIGJvdHRvbVJpZ2h0Q29ybmVyLmxhdCwgYm90dG9tUmlnaHRDb3JuZXIubG5nLCAvLyBTRVxuICAgICAgICBib3R0b21SaWdodENvcm5lci5sYXQsIHRvcExlZnRDb3JuZXIubG5nLCAvLyBTV1xuICAgICAgICB0b3BMZWZ0Q29ybmVyLmxhdCwgYm90dG9tUmlnaHRDb3JuZXIubG5nXTtcblxuICAgICAgICBpZiAocm91bmRGYWN0b3IpIHtcbiAgICAgICAgICByZXMgPSByZXMubWFwKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChyICogcm91bmRGYWN0b3IpIC8gcm91bmRGYWN0b3I7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFswLCAwLCAwLCAwXTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2VvO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBHZW87XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvZ2VvLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7IC8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cblxuXG52YXIgX3BvaW50R2VvbWV0cnkgPSByZXF1aXJlKCdwb2ludC1nZW9tZXRyeScpO1xuXG52YXIgX3BvaW50R2VvbWV0cnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9pbnRHZW9tZXRyeSk7XG5cbnZhciBfbGF0X2xuZyA9IHJlcXVpcmUoJy4vbGF0X2xuZycpO1xuXG52YXIgX2xhdF9sbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGF0X2xuZyk7XG5cbnZhciBfd3JhcCA9IHJlcXVpcmUoJy4vd3JhcCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vLyBBIHNpbmdsZSB0cmFuc2Zvcm0sIGdlbmVyYWxseSB1c2VkIGZvciBhIHNpbmdsZSB0aWxlIHRvIGJlIHNjYWxlZCwgcm90YXRlZCwgYW5kIHpvb21lZC5cbnZhciBUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRyYW5zZm9ybSh0aWxlU2l6ZSwgbWluWm9vbSwgbWF4Wm9vbSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFuc2Zvcm0pO1xuXG4gICAgdGhpcy50aWxlU2l6ZSA9IHRpbGVTaXplIHx8IDUxMjsgLy8gY29uc3RhbnRcblxuICAgIHRoaXMuX21pblpvb20gPSBtaW5ab29tIHx8IDA7XG4gICAgdGhpcy5fbWF4Wm9vbSA9IG1heFpvb20gfHwgNTI7XG5cbiAgICB0aGlzLmxhdFJhbmdlID0gWy04NS4wNTExMywgODUuMDUxMTNdO1xuXG4gICAgdGhpcy53aWR0aCA9IDA7XG4gICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgIHRoaXMuem9vbSA9IDA7XG4gICAgdGhpcy5jZW50ZXIgPSBuZXcgX2xhdF9sbmcyLmRlZmF1bHQoMCwgMCk7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVHJhbnNmb3JtLCBbe1xuICAgIGtleTogJ3pvb21TY2FsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHpvb21TY2FsZSh6b29tKSB7XG4gICAgICByZXR1cm4gTWF0aC5wb3coMiwgem9vbSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2NhbGVab29tJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2NhbGVab29tKHNjYWxlKSB7XG4gICAgICByZXR1cm4gTWF0aC5sb2coc2NhbGUpIC8gTWF0aC5MTjI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHJvamVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByb2plY3QobGF0bG5nLCB3b3JsZFNpemUpIHtcbiAgICAgIHJldHVybiBuZXcgX3BvaW50R2VvbWV0cnkyLmRlZmF1bHQodGhpcy5sbmdYKGxhdGxuZy5sbmcsIHdvcmxkU2l6ZSksIHRoaXMubGF0WShsYXRsbmcubGF0LCB3b3JsZFNpemUpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1bnByb2plY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnByb2plY3QocG9pbnQsIHdvcmxkU2l6ZSkge1xuICAgICAgcmV0dXJuIG5ldyBfbGF0X2xuZzIuZGVmYXVsdCh0aGlzLnlMYXQocG9pbnQueSwgd29ybGRTaXplKSwgdGhpcy54TG5nKHBvaW50LngsIHdvcmxkU2l6ZSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xuZ1gnLFxuXG5cbiAgICAvLyBsYXQvbG9uIDwtPiBhYnNvbHV0ZSBwaXhlbCBjb29yZHMgY29udmVydGlvblxuICAgIHZhbHVlOiBmdW5jdGlvbiBsbmdYKGxvbiwgd29ybGRTaXplKSB7XG4gICAgICByZXR1cm4gKDE4MCArIGxvbikgKiAod29ybGRTaXplIHx8IHRoaXMud29ybGRTaXplKSAvIDM2MDtcbiAgICB9XG5cbiAgICAvLyBsYXRpdHVkZSB0byBhYnNvbHV0ZSB5IGNvb3JkXG5cbiAgfSwge1xuICAgIGtleTogJ2xhdFknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsYXRZKGxhdCwgd29ybGRTaXplKSB7XG4gICAgICB2YXIgeSA9IDE4MCAvIE1hdGguUEkgKiBNYXRoLmxvZyhNYXRoLnRhbihNYXRoLlBJIC8gNCArIGxhdCAqIE1hdGguUEkgLyAzNjApKTtcbiAgICAgIHJldHVybiAoMTgwIC0geSkgKiAod29ybGRTaXplIHx8IHRoaXMud29ybGRTaXplKSAvIDM2MDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd4TG5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24geExuZyh4LCB3b3JsZFNpemUpIHtcbiAgICAgIHJldHVybiB4ICogMzYwIC8gKHdvcmxkU2l6ZSB8fCB0aGlzLndvcmxkU2l6ZSkgLSAxODA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAneUxhdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHlMYXQoeSwgd29ybGRTaXplKSB7XG4gICAgICB2YXIgeTIgPSAxODAgLSB5ICogMzYwIC8gKHdvcmxkU2l6ZSB8fCB0aGlzLndvcmxkU2l6ZSk7XG4gICAgICByZXR1cm4gMzYwIC8gTWF0aC5QSSAqIE1hdGguYXRhbihNYXRoLmV4cCh5MiAqIE1hdGguUEkgLyAxODApKSAtIDkwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xvY2F0aW9uUG9pbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2NhdGlvblBvaW50KGxhdGxuZykge1xuICAgICAgdmFyIHAgPSB0aGlzLnByb2plY3QobGF0bG5nKTtcbiAgICAgIHJldHVybiB0aGlzLmNlbnRlclBvaW50Ll9zdWIodGhpcy5wb2ludC5fc3ViKHApLl9yb3RhdGUodGhpcy5hbmdsZSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BvaW50TG9jYXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb2ludExvY2F0aW9uKHApIHtcbiAgICAgIHZhciBwMiA9IHRoaXMuY2VudGVyUG9pbnQuX3N1YihwKS5fcm90YXRlKC10aGlzLmFuZ2xlKTtcbiAgICAgIHJldHVybiB0aGlzLnVucHJvamVjdCh0aGlzLnBvaW50LnN1YihwMikpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ21pblpvb20nLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21pblpvb207XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh6b29tKSB7XG4gICAgICB0aGlzLl9taW5ab29tID0gem9vbTtcbiAgICAgIHRoaXMuem9vbSA9IE1hdGgubWF4KHRoaXMuem9vbSwgem9vbSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWF4Wm9vbScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWF4Wm9vbTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHpvb20pIHtcbiAgICAgIHRoaXMuX21heFpvb20gPSB6b29tO1xuICAgICAgdGhpcy56b29tID0gTWF0aC5taW4odGhpcy56b29tLCB6b29tKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd3b3JsZFNpemUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudGlsZVNpemUgKiB0aGlzLnNjYWxlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NlbnRlclBvaW50JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBuZXcgX3BvaW50R2VvbWV0cnkyLmRlZmF1bHQoMCwgMCk7IC8vIHRoaXMuc2l6ZS5fZGl2KDIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpemUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIG5ldyBfcG9pbnRHZW9tZXRyeTIuZGVmYXVsdCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYmVhcmluZycsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gLXRoaXMuYW5nbGUgLyBNYXRoLlBJICogMTgwO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoYmVhcmluZykge1xuICAgICAgdGhpcy5hbmdsZSA9IC0oMCwgX3dyYXAud3JhcCkoYmVhcmluZywgLTE4MCwgMTgwKSAqIE1hdGguUEkgLyAxODA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnem9vbScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fem9vbTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHpvb20pIHtcbiAgICAgIHZhciB6b29tViA9IE1hdGgubWluKE1hdGgubWF4KHpvb20sIHRoaXMubWluWm9vbSksIHRoaXMubWF4Wm9vbSk7XG4gICAgICB0aGlzLl96b29tID0gem9vbVY7XG4gICAgICB0aGlzLnNjYWxlID0gdGhpcy56b29tU2NhbGUoem9vbVYpO1xuICAgICAgdGhpcy50aWxlWm9vbSA9IE1hdGguZmxvb3Ioem9vbVYpO1xuICAgICAgdGhpcy56b29tRnJhY3Rpb24gPSB6b29tViAtIHRoaXMudGlsZVpvb207XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAneCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sbmdYKHRoaXMuY2VudGVyLmxuZyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAneScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXRZKHRoaXMuY2VudGVyLmxhdCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncG9pbnQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIG5ldyBfcG9pbnRHZW9tZXRyeTIuZGVmYXVsdCh0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRyYW5zZm9ybTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhbnNmb3JtO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2xpYl9nZW8vdHJhbnNmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQXJyYXlzRXF1YWxFcHM7XG5mdW5jdGlvbiBpc0FycmF5c0VxdWFsRXBzKGFycmF5QSwgYXJyYXlCLCBlcHMpIHtcbiAgaWYgKGFycmF5QSAmJiBhcnJheUIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSAhPT0gYXJyYXlBLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoYXJyYXlBW2ldIC0gYXJyYXlCW2ldKSA+IGVwcykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9hcnJheV9oZWxwZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpc1BsYWluT2JqZWN0O1xuLy8gc291cmNlIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3JhY2t0L3JlZHV4L2Jsb2IvbWFzdGVyL3NyYy91dGlscy9pc1BsYWluT2JqZWN0LmpzXG52YXIgZm5Ub1N0cmluZyA9IGZ1bmN0aW9uIGZuVG9TdHJpbmcoZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGZuKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJndW1lbnQgYXBwZWFycyB0byBiZSBhIHBsYWluIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgaWYgKCFvYmogfHwgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iaikpICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90byA9IHR5cGVvZiBvYmouY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA6IE9iamVjdC5wcm90b3R5cGU7XG5cbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgY29uc3RydWN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcblxuICByZXR1cm4gdHlwZW9mIGNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nICYmIGNvbnN0cnVjdG9yIGluc3RhbmNlb2YgY29uc3RydWN0b3IgJiYgZm5Ub1N0cmluZyhjb25zdHJ1Y3RvcikgPT09IGZuVG9TdHJpbmcoT2JqZWN0KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9pc19wbGFpbl9vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcGljaztcbi8vIHNvdXJjZSB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWR1eC9ibG9iL21hc3Rlci9zcmMvdXRpbHMvcGljay5qc1xuXG5mdW5jdGlvbiBwaWNrKG9iaiwgZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuICAgIGlmIChmbihvYmpba2V5XSkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL3BpY2suanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmFmO1xuZnVuY3Rpb24gcmFmKGNhbGxiYWNrKSB7XG4gIGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgdmFyIG5hdGl2ZVJhZiA9IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuICByZXR1cm4gbmF0aXZlUmFmID8gbmF0aXZlUmFmKGNhbGxiYWNrKSA6IHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxZTMgLyA2MCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvcmFmLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBsb2cyID0gTWF0aC5sb2cyID8gTWF0aC5sb2cyIDogZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIE1hdGgubG9nKHgpIC8gTWF0aC5MTjI7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBsb2cyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL21hdGgvbG9nMi5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzTnVtYmVyO1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKSkgPT09ICdvYmplY3QnO1xufVxuXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICB2YXIgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXSc7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IG51bWJlclRhZztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9pc051bWJlci5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4qIERldGVjdCBFbGVtZW50IFJlc2l6ZS5cbiogRm9ya2VkIGluIG9yZGVyIHRvIGd1YXJkIGFnYWluc3QgdW5zYWZlICd3aW5kb3cnIGFuZCAnZG9jdW1lbnQnIHJlZmVyZW5jZXMuXG4qXG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9zZGVjaW1hL2phdmFzY3JpcHQtZGV0ZWN0LWVsZW1lbnQtcmVzaXplXG4qIFNlYmFzdGlhbiBEZWNpbWFcbipcbiogdmVyc2lvbjogMC41LjNcbioqL1xuXG4vLyBSZWxpYWJsZSBgd2luZG93YCBhbmQgYGRvY3VtZW50YCBkZXRlY3Rpb25cbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG4vLyBDaGVjayBgZG9jdW1lbnRgIGFuZCBgd2luZG93YCBpbiBjYXNlIG9mIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xudmFyIF93aW5kb3c7XG5pZiAoY2FuVXNlRE9NKSB7XG4gIF93aW5kb3cgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICBfd2luZG93ID0gc2VsZjtcbn0gZWxzZSB7XG4gIF93aW5kb3cgPSB1bmRlZmluZWQ7XG59XG5cbnZhciBhdHRhY2hFdmVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuYXR0YWNoRXZlbnQ7XG52YXIgc3R5bGVzQ3JlYXRlZCA9IGZhbHNlO1xuXG5pZiAoY2FuVXNlRE9NICYmICFhdHRhY2hFdmVudCkge1xuICB2YXIgcmVxdWVzdEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByYWYgPSBfd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBfd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBfd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBfd2luZG93LnNldFRpbWVvdXQoZm4sIDIwKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiByYWYoZm4pO1xuICAgIH07XG4gIH0oKTtcblxuICB2YXIgY2FuY2VsRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhbmNlbCA9IF93aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgX3dpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fCBfd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IF93aW5kb3cuY2xlYXJUaW1lb3V0O1xuICAgIHJldHVybiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHJldHVybiBjYW5jZWwoaWQpO1xuICAgIH07XG4gIH0oKTtcblxuICB2YXIgcmVzZXRUcmlnZ2VycyA9IGZ1bmN0aW9uIHJlc2V0VHJpZ2dlcnMoZWxlbWVudCkge1xuICAgIHZhciB0cmlnZ2VycyA9IGVsZW1lbnQuX19yZXNpemVUcmlnZ2Vyc19fLFxuICAgICAgICBleHBhbmQgPSB0cmlnZ2Vycy5maXJzdEVsZW1lbnRDaGlsZCxcbiAgICAgICAgY29udHJhY3QgPSB0cmlnZ2Vycy5sYXN0RWxlbWVudENoaWxkLFxuICAgICAgICBleHBhbmRDaGlsZCA9IGV4cGFuZC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBjb250cmFjdC5zY3JvbGxMZWZ0ID0gY29udHJhY3Quc2Nyb2xsV2lkdGg7XG4gICAgY29udHJhY3Quc2Nyb2xsVG9wID0gY29udHJhY3Quc2Nyb2xsSGVpZ2h0O1xuICAgIGV4cGFuZENoaWxkLnN0eWxlLndpZHRoID0gZXhwYW5kLm9mZnNldFdpZHRoICsgMSArICdweCc7XG4gICAgZXhwYW5kQ2hpbGQuc3R5bGUuaGVpZ2h0ID0gZXhwYW5kLm9mZnNldEhlaWdodCArIDEgKyAncHgnO1xuICAgIGV4cGFuZC5zY3JvbGxMZWZ0ID0gZXhwYW5kLnNjcm9sbFdpZHRoO1xuICAgIGV4cGFuZC5zY3JvbGxUb3AgPSBleHBhbmQuc2Nyb2xsSGVpZ2h0O1xuICB9O1xuXG4gIHZhciBjaGVja1RyaWdnZXJzID0gZnVuY3Rpb24gY2hlY2tUcmlnZ2VycyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0V2lkdGggIT0gZWxlbWVudC5fX3Jlc2l6ZUxhc3RfXy53aWR0aCB8fCBlbGVtZW50Lm9mZnNldEhlaWdodCAhPSBlbGVtZW50Ll9fcmVzaXplTGFzdF9fLmhlaWdodDtcbiAgfTtcblxuICB2YXIgc2Nyb2xsTGlzdGVuZXIgPSBmdW5jdGlvbiBzY3JvbGxMaXN0ZW5lcihlKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzO1xuICAgIHJlc2V0VHJpZ2dlcnModGhpcyk7XG4gICAgaWYgKHRoaXMuX19yZXNpemVSQUZfXykgY2FuY2VsRnJhbWUodGhpcy5fX3Jlc2l6ZVJBRl9fKTtcbiAgICB0aGlzLl9fcmVzaXplUkFGX18gPSByZXF1ZXN0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNoZWNrVHJpZ2dlcnMoZWxlbWVudCkpIHtcbiAgICAgICAgZWxlbWVudC5fX3Jlc2l6ZUxhc3RfXy53aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGVsZW1lbnQuX19yZXNpemVMYXN0X18uaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgIGZuLmNhbGwoZWxlbWVudCwgZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qIERldGVjdCBDU1MgQW5pbWF0aW9ucyBzdXBwb3J0IHRvIGRldGVjdCBlbGVtZW50IGRpc3BsYXkvcmUtYXR0YWNoICovXG4gIHZhciBhbmltYXRpb24gPSBmYWxzZSxcbiAgICAgIGFuaW1hdGlvbnN0cmluZyA9ICdhbmltYXRpb24nLFxuICAgICAga2V5ZnJhbWVwcmVmaXggPSAnJyxcbiAgICAgIGFuaW1hdGlvbnN0YXJ0ZXZlbnQgPSAnYW5pbWF0aW9uc3RhcnQnLFxuICAgICAgZG9tUHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zJy5zcGxpdCgnICcpLFxuICAgICAgc3RhcnRFdmVudHMgPSAnd2Via2l0QW5pbWF0aW9uU3RhcnQgYW5pbWF0aW9uc3RhcnQgb0FuaW1hdGlvblN0YXJ0IE1TQW5pbWF0aW9uU3RhcnQnLnNwbGl0KCcgJyksXG4gICAgICBwZnggPSAnJztcblxuICBpZiAoY2FuVXNlRE9NKSB7XG4gICAgdmFyIGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50Jyk7XG4gICAgaWYgKGVsbS5zdHlsZS5hbmltYXRpb25OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFuaW1hdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGFuaW1hdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9tUHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVsbS5zdHlsZVtkb21QcmVmaXhlc1tpXSArICdBbmltYXRpb25OYW1lJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHBmeCA9IGRvbVByZWZpeGVzW2ldO1xuICAgICAgICAgIGFuaW1hdGlvbnN0cmluZyA9IHBmeCArICdBbmltYXRpb24nO1xuICAgICAgICAgIGtleWZyYW1lcHJlZml4ID0gJy0nICsgcGZ4LnRvTG93ZXJDYXNlKCkgKyAnLSc7XG4gICAgICAgICAgYW5pbWF0aW9uc3RhcnRldmVudCA9IHN0YXJ0RXZlbnRzW2ldO1xuICAgICAgICAgIGFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgYW5pbWF0aW9uTmFtZSA9ICdyZXNpemVhbmltJztcbiAgdmFyIGFuaW1hdGlvbktleWZyYW1lcyA9ICdAJyArIGtleWZyYW1lcHJlZml4ICsgJ2tleWZyYW1lcyAnICsgYW5pbWF0aW9uTmFtZSArICcgeyBmcm9tIHsgb3BhY2l0eTogMDsgfSB0byB7IG9wYWNpdHk6IDA7IH0gfSAnO1xuICB2YXIgYW5pbWF0aW9uU3R5bGUgPSBrZXlmcmFtZXByZWZpeCArICdhbmltYXRpb246IDFtcyAnICsgYW5pbWF0aW9uTmFtZSArICc7ICc7XG59XG5cbnZhciBjcmVhdGVTdHlsZXMgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZXMoKSB7XG4gIGlmICghc3R5bGVzQ3JlYXRlZCkge1xuICAgIC8vb3BhY2l0eTowIHdvcmtzIGFyb3VuZCBhIGNocm9tZSBidWcgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTI4NjM2MFxuICAgIHZhciBjc3MgPSAoYW5pbWF0aW9uS2V5ZnJhbWVzID8gYW5pbWF0aW9uS2V5ZnJhbWVzIDogJycpICsgJy5yZXNpemUtdHJpZ2dlcnMgeyAnICsgKGFuaW1hdGlvblN0eWxlID8gYW5pbWF0aW9uU3R5bGUgOiAnJykgKyAndmlzaWJpbGl0eTogaGlkZGVuOyBvcGFjaXR5OiAwOyB9ICcgKyAnLnJlc2l6ZS10cmlnZ2VycywgLnJlc2l6ZS10cmlnZ2VycyA+IGRpdiwgLmNvbnRyYWN0LXRyaWdnZXI6YmVmb3JlIHsgY29udGVudDogXCIgXCI7IGRpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgfSAucmVzaXplLXRyaWdnZXJzID4gZGl2IHsgYmFja2dyb3VuZDogI2VlZTsgb3ZlcmZsb3c6IGF1dG87IH0gLmNvbnRyYWN0LXRyaWdnZXI6YmVmb3JlIHsgd2lkdGg6IDIwMCU7IGhlaWdodDogMjAwJTsgfScsXG4gICAgICAgIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0sXG4gICAgICAgIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cblxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIHN0eWxlc0NyZWF0ZWQgPSB0cnVlO1xuICB9XG59O1xuXG52YXIgYWRkUmVzaXplTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRSZXNpemVMaXN0ZW5lcihlbGVtZW50LCBmbikge1xuICBpZiAoZWxlbWVudC5wYXJlbnROb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgdGVtcFBhcmVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQucGFyZW50Tm9kZSA9IHRlbXBQYXJlbnREaXY7XG4gIH1cbiAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgaWYgKGF0dGFjaEV2ZW50KSBlbGVtZW50LmF0dGFjaEV2ZW50KCdvbnJlc2l6ZScsIGZuKTtlbHNlIHtcbiAgICBpZiAoIWVsZW1lbnQuX19yZXNpemVUcmlnZ2Vyc19fKSB7XG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PSAnc3RhdGljJykgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICBjcmVhdGVTdHlsZXMoKTtcbiAgICAgIGVsZW1lbnQuX19yZXNpemVMYXN0X18gPSB7fTtcbiAgICAgIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXyA9IFtdO1xuICAgICAgKGVsZW1lbnQuX19yZXNpemVUcmlnZ2Vyc19fID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLmNsYXNzTmFtZSA9ICdyZXNpemUtdHJpZ2dlcnMnO1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18uaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJleHBhbmQtdHJpZ2dlclwiPjxkaXY+PC9kaXY+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwiY29udHJhY3QtdHJpZ2dlclwiPjwvZGl2Pic7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQuX19yZXNpemVUcmlnZ2Vyc19fKTtcbiAgICAgIHJlc2V0VHJpZ2dlcnMoZWxlbWVudCk7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbExpc3RlbmVyLCB0cnVlKTtcblxuICAgICAgLyogTGlzdGVuIGZvciBhIGNzcyBhbmltYXRpb24gdG8gZGV0ZWN0IGVsZW1lbnQgZGlzcGxheS9yZS1hdHRhY2ggKi9cbiAgICAgIGFuaW1hdGlvbnN0YXJ0ZXZlbnQgJiYgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18uYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25zdGFydGV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5hbmltYXRpb25OYW1lID09IGFuaW1hdGlvbk5hbWUpIHJlc2V0VHJpZ2dlcnMoZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLnB1c2goZm4pO1xuICB9XG59O1xuXG52YXIgcmVtb3ZlUmVzaXplTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVSZXNpemVMaXN0ZW5lcihlbGVtZW50LCBmbikge1xuICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICBpZiAoYXR0YWNoRXZlbnQpIGVsZW1lbnQuZGV0YWNoRXZlbnQoJ29ucmVzaXplJywgZm4pO2Vsc2Uge1xuICAgIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXy5zcGxpY2UoZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLmluZGV4T2YoZm4pLCAxKTtcbiAgICBpZiAoIWVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXy5sZW5ndGgpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsTGlzdGVuZXIpO1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18gPSAhZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcnNfXyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWRkUmVzaXplTGlzdGVuZXI6IGFkZFJlc2l6ZUxpc3RlbmVyLFxuICByZW1vdmVSZXNpemVMaXN0ZW5lcjogcmVtb3ZlUmVzaXplTGlzdGVuZXJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvZGV0ZWN0RWxlbWVudFJlc2l6ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU3RhdGVsZXNzQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyUHJvcHMge1xuICAgIGxhdDogbnVtYmVyO1xuICAgIGxuZzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgTWFya2VyOiBTdGF0ZWxlc3NDb21wb25lbnQ8TWFya2VyUHJvcHM+ID0gKHByb3BzKSA9PlxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2lkZ2V0LWdvb2dsZS1tYXBzLW1hcmtlclwiIH0pO1xuXG5NYXJrZXIuZGlzcGxheU5hbWUgPSBcIk1hcmtlclwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWFya2VyLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMb2NhdGlvbiwgTWFwLCBoZWlnaHRVbml0VHlwZSwgd2lkdGhVbml0VHlwZSB9IGZyb20gXCIuL01hcFwiO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiLi9BbGVydFwiO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgICBcImNsYXNzXCI/OiBzdHJpbmc7XG4gICAgbXhPYmplY3Q/OiBtZW5kaXgubGliLk14T2JqZWN0O1xuICAgIHN0eWxlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBHb29nbGVNYXBDb250YWluZXJQcm9wcyBleHRlbmRzIFdyYXBwZXJQcm9wcyB7XG4gICAgYXBpS2V5OiBzdHJpbmc7XG4gICAgYXV0b1pvb206IGJvb2xlYW47XG4gICAgZGF0YVNvdXJjZTogRGF0YVNvdXJjZTtcbiAgICBkYXRhU291cmNlTWljcm9mbG93OiBzdHJpbmc7XG4gICAgZGVmYXVsdENlbnRlckFkZHJlc3M6IHN0cmluZztcbiAgICBlbnRpdHlDb25zdHJhaW50OiBzdHJpbmc7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgaGVpZ2h0VW5pdDogaGVpZ2h0VW5pdFR5cGU7XG4gICAgb3B0aW9uRHJhZzogYm9vbGVhbjtcbiAgICBvcHRpb25NYXBDb250cm9sOiBib29sZWFuO1xuICAgIG9wdGlvblNjcm9sbDogYm9vbGVhbjtcbiAgICBvcHRpb25TdHJlZXRWaWV3OiBib29sZWFuO1xuICAgIG9wdGlvblpvb21Db250cm9sOiBib29sZWFuO1xuICAgIGxvY2F0aW9uc0VudGl0eTogc3RyaW5nO1xuICAgIGFkZHJlc3NBdHRyaWJ1dGU6IHN0cmluZztcbiAgICBsYXRpdHVkZUF0dHJpYnV0ZTogc3RyaW5nO1xuICAgIGxvbmdpdHVkZUF0dHJpYnV0ZTogc3RyaW5nO1xuICAgIHN0YXRpY0xvY2F0aW9uczogU3RhdGljTG9jYXRpb25bXTtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIHdpZHRoVW5pdDogd2lkdGhVbml0VHlwZTtcbiAgICB6b29tTGV2ZWw6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFN0YXRpY0xvY2F0aW9uIHtcbiAgICBhZGRyZXNzOiBzdHJpbmc7XG4gICAgbGF0aXR1ZGU6IHN0cmluZztcbiAgICBsb25naXR1ZGU6IHN0cmluZztcbn1cblxudHlwZSBEYXRhU291cmNlID0gXCJzdGF0aWNcIiB8IFwiY29udGV4dFwiIHwgXCJYUGF0aFwiIHwgXCJtaWNyb2Zsb3dcIjtcblxuY2xhc3MgR29vZ2xlTWFwQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50PEdvb2dsZU1hcENvbnRhaW5lclByb3BzLCB7IGFsZXJ0TWVzc2FnZT86IHN0cmluZywgbG9jYXRpb25zOiBMb2NhdGlvbltdIH0+IHtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbkhhbmRsZXM6IG51bWJlcltdO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEdvb2dsZU1hcENvbnRhaW5lclByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICBjb25zdCBhbGVydE1lc3NhZ2UgPSBHb29nbGVNYXBDb250YWluZXIudmFsaWRhdGVQcm9wcyhwcm9wcyk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uSGFuZGxlcyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBhbGVydE1lc3NhZ2UsIGxvY2F0aW9uczogW10gfTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUodGhpcy5wcm9wcy5teE9iamVjdCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hbGVydE1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEFsZXJ0LCB7XG4gICAgICAgICAgICAgICAgYm9vdHN0cmFwU3R5bGU6IFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIndpZGdldC1nb29nbGUtbWFwcy1hbGVydFwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUuYWxlcnRNZXNzYWdlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KE1hcCwge1xuICAgICAgICAgICAgICAgIGFwaUtleTogdGhpcy5wcm9wcy5hcGlLZXksXG4gICAgICAgICAgICAgICAgYXV0b1pvb206IHRoaXMucHJvcHMuYXV0b1pvb20sXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRDZW50ZXJBZGRyZXNzOiB0aGlzLnByb3BzLmRlZmF1bHRDZW50ZXJBZGRyZXNzLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0VW5pdDogdGhpcy5wcm9wcy5oZWlnaHRVbml0LFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uczogdGhpcy5zdGF0ZS5sb2NhdGlvbnMsXG4gICAgICAgICAgICAgICAgb3B0aW9uRHJhZzogdGhpcy5wcm9wcy5vcHRpb25EcmFnLFxuICAgICAgICAgICAgICAgIG9wdGlvbk1hcENvbnRyb2w6IHRoaXMucHJvcHMub3B0aW9uTWFwQ29udHJvbCxcbiAgICAgICAgICAgICAgICBvcHRpb25TY3JvbGw6IHRoaXMucHJvcHMub3B0aW9uU2Nyb2xsLFxuICAgICAgICAgICAgICAgIG9wdGlvblN0cmVldFZpZXc6IHRoaXMucHJvcHMub3B0aW9uU3RyZWV0VmlldyxcbiAgICAgICAgICAgICAgICBvcHRpb25ab29tQ29udHJvbDogdGhpcy5wcm9wcy5vcHRpb25ab29tQ29udHJvbCxcbiAgICAgICAgICAgICAgICBzdHlsZTogR29vZ2xlTWFwQ29udGFpbmVyLnBhcnNlU3R5bGUodGhpcy5wcm9wcy5zdHlsZSksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXG4gICAgICAgICAgICAgICAgd2lkdGhVbml0OiB0aGlzLnByb3BzLndpZHRoVW5pdCxcbiAgICAgICAgICAgICAgICB6b29tTGV2ZWw6IHRoaXMucHJvcHMuem9vbUxldmVsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBHb29nbGVNYXBDb250YWluZXJQcm9wcykge1xuICAgICAgICB0aGlzLnN1YnNjcmliZShuZXh0UHJvcHMubXhPYmplY3QpO1xuICAgICAgICB0aGlzLmZldGNoRGF0YShuZXh0UHJvcHMubXhPYmplY3QpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuYWxlcnRNZXNzYWdlKSB0aGlzLmZldGNoRGF0YSh0aGlzLnByb3BzLm14T2JqZWN0KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25IYW5kbGVzLmZvckVhY2god2luZG93Lm14LmRhdGEudW5zdWJzY3JpYmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdmFsaWRhdGVQcm9wcyhwcm9wczogR29vZ2xlTWFwQ29udGFpbmVyUHJvcHMpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIlwiO1xuICAgICAgICBpZiAocHJvcHMuZGF0YVNvdXJjZSA9PT0gXCJzdGF0aWNcIiAmJiAhcHJvcHMuc3RhdGljTG9jYXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiQXQgbGVhc3Qgb25lIHN0YXRpYyBsb2NhdGlvbiBpcyByZXF1aXJlZCBmb3IgJ0RhdGEgc291cmNlICdTdGF0aWMnXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLmRhdGFTb3VyY2UgPT09IFwic3RhdGljXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRMb2NhdGlvbnMgPSBwcm9wcy5zdGF0aWNMb2NhdGlvbnMuZmlsdGVyKGxvY2F0aW9uID0+XG4gICAgICAgICAgICAgICAgIWxvY2F0aW9uLmFkZHJlc3MgJiYgIShsb2NhdGlvbi5sYXRpdHVkZSAmJiBsb2NhdGlvbi5sb25naXR1ZGUpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGludmFsaWRMb2NhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlRoZSAnQWRkcmVzcycgb3IgJ0xhdGl0dWRlJyBhbmQgJ0xvbmdpdHVkZScgXCJcbiAgICAgICAgICAgICAgICAgICAgKyBcImlzIHJlcXVpcmVkIGZvciB0aGlzICdTdGF0aWMnIGRhdGEgc291cmNlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLmRhdGFTb3VyY2UgPT09IFwiWFBhdGhcIiAmJiAhcHJvcHMubG9jYXRpb25zRW50aXR5KSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJUaGUgJ0xvY2F0aW9ucyBlbnRpdHknIGlzIHJlcXVpcmVkIGZvciAnRGF0YSBzb3VyY2UnICdYUGF0aCdcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuZGF0YVNvdXJjZSA9PT0gXCJtaWNyb2Zsb3dcIiAmJiAhcHJvcHMuZGF0YVNvdXJjZU1pY3JvZmxvdykge1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiQSAnTWljcm9mbG93JyBpcyByZXF1aXJlZCBmb3IgJ0RhdGEgc291cmNlJyAnTWljcm9mbG93J1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5kYXRhU291cmNlICE9PSBcInN0YXRpY1wiICYmICghcHJvcHMuYWRkcmVzc0F0dHJpYnV0ZSAmJlxuICAgICAgICAgICAgIShwcm9wcy5sb25naXR1ZGVBdHRyaWJ1dGUgJiYgcHJvcHMubGF0aXR1ZGVBdHRyaWJ1dGUpKSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiVGhlICdBZGRyZXNzIGF0dHJpYnV0ZScgb3IgJ0xhdGl0dWRlIEF0dHJpYnV0ZScgYW5kICdMb25naXR1ZGUgYXR0cmlidXRlJyBcIlxuICAgICAgICAgICAgICAgICsgXCJpcyByZXF1aXJlZCBmb3IgdGhpcyBkYXRhIHNvdXJjZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJvcHMuYXV0b1pvb20gJiYgcHJvcHMuem9vbUxldmVsIDwgMikge1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiWm9vbSBsZXZlbCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAxXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG5cbiAgICAvLyBNZW5kaXggZG9lcyBub3Qgc3VwcG9ydCBuZWdhdGl2ZSBhbmQgZGVjaW1hbCBudW1iZXIgYXMgc3RhdGljIGlucHV0cywgc28gdGhleSBhcmUgc3RyaW5ncy5cbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlU3RhdGljTG9jYXRpb25zKGxvY2F0aW9uczogU3RhdGljTG9jYXRpb25bXSk6IExvY2F0aW9uW10ge1xuICAgICAgICByZXR1cm4gbG9jYXRpb25zLm1hcChsb2NhdGlvbiA9PiAoe1xuICAgICAgICAgICAgYWRkcmVzczogbG9jYXRpb24uYWRkcmVzcyxcbiAgICAgICAgICAgIGxhdGl0dWRlOiBsb2NhdGlvbi5sYXRpdHVkZS50cmltKCkgIT09IFwiXCIgPyBOdW1iZXIobG9jYXRpb24ubGF0aXR1ZGUpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBsb2NhdGlvbi5sb25naXR1ZGUudHJpbSgpICE9PSBcIlwiID8gTnVtYmVyKGxvY2F0aW9uLmxvbmdpdHVkZSkgOiB1bmRlZmluZWRcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Vic2NyaWJlKGNvbnRleHRPYmplY3Q/OiBtZW5kaXgubGliLk14T2JqZWN0KSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uSGFuZGxlcy5mb3JFYWNoKHdpbmRvdy5teC5kYXRhLnVuc3Vic2NyaWJlKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25IYW5kbGVzID0gW107XG5cbiAgICAgICAgaWYgKGNvbnRleHRPYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uSGFuZGxlcy5wdXNoKHdpbmRvdy5teC5kYXRhLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuZmV0Y2hEYXRhKGNvbnRleHRPYmplY3QpLFxuICAgICAgICAgICAgICAgIGd1aWQ6IGNvbnRleHRPYmplY3QuZ2V0R3VpZCgpXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hZGRyZXNzQXR0cmlidXRlLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGF0aXR1ZGVBdHRyaWJ1dGUsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sb25naXR1ZGVBdHRyaWJ1dGVcbiAgICAgICAgICAgIF0uZm9yRWFjaChhdHRyID0+IHRoaXMuc3Vic2NyaXB0aW9uSGFuZGxlcy5wdXNoKHdpbmRvdy5teC5kYXRhLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5mZXRjaERhdGEoY29udGV4dE9iamVjdCksIGd1aWQ6IGNvbnRleHRPYmplY3QuZ2V0R3VpZCgpXG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaERhdGEoY29udGV4dE9iamVjdD86IG1lbmRpeC5saWIuTXhPYmplY3QpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YVNvdXJjZSA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uczogR29vZ2xlTWFwQ29udGFpbmVyLnBhcnNlU3RhdGljTG9jYXRpb25zKHRoaXMucHJvcHMuc3RhdGljTG9jYXRpb25zKSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmRhdGFTb3VyY2UgPT09IFwiY29udGV4dFwiKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoTG9jYXRpb25zQnlDb250ZXh0KGNvbnRleHRPYmplY3QpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZGF0YVNvdXJjZSA9PT0gXCJYUGF0aFwiICYmIHRoaXMucHJvcHMubG9jYXRpb25zRW50aXR5KSB7XG4gICAgICAgICAgICBjb25zdCBndWlkID0gY29udGV4dE9iamVjdCA/IGNvbnRleHRPYmplY3QuZ2V0R3VpZCgpIDogXCJcIjtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hMb2NhdGlvbnNCeVhQYXRoKGd1aWQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZGF0YVNvdXJjZSA9PT0gXCJtaWNyb2Zsb3dcIiAmJiB0aGlzLnByb3BzLmRhdGFTb3VyY2VNaWNyb2Zsb3cpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hMb2NhdGlvbnNCeU1pY3JvZmxvdyh0aGlzLnByb3BzLmRhdGFTb3VyY2VNaWNyb2Zsb3csIGNvbnRleHRPYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaExvY2F0aW9uc0J5Q29udGV4dChjb250ZXh0T2JqZWN0PzogbWVuZGl4LmxpYi5NeE9iamVjdCkge1xuICAgICAgICBpZiAoY29udGV4dE9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5zZXRMb2NhdGlvbnNGcm9tTXhPYmplY3RzKFsgY29udGV4dE9iamVjdCBdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZmV0Y2hMb2NhdGlvbnNCeVhQYXRoKGNvbnRleHRHdWlkOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgeyBlbnRpdHlDb25zdHJhaW50IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCByZXF1aXJlc0NvbnRleHQgPSBlbnRpdHlDb25zdHJhaW50ICYmIGVudGl0eUNvbnN0cmFpbnQuaW5kZXhPZihcIlslQ3VycmVudE9iamVjdCVdXCIpID4gLTE7XG4gICAgICAgIGlmICghY29udGV4dEd1aWQgJiYgcmVxdWlyZXNDb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9jYXRpb25zOiBbXSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnN0cmFpbnQgPSBlbnRpdHlDb25zdHJhaW50ID8gZW50aXR5Q29uc3RyYWludC5yZXBsYWNlKFwiWyVDdXJyZW50T2JqZWN0JV1cIiwgY29udGV4dEd1aWQpIDogXCJcIjtcbiAgICAgICAgY29uc3QgeHBhdGggPSBgLy8ke3RoaXMucHJvcHMubG9jYXRpb25zRW50aXR5fSR7Y29uc3RyYWludH1gO1xuXG4gICAgICAgIHdpbmRvdy5teC5kYXRhLmdldCh7XG4gICAgICAgICAgICBjYWxsYmFjazogbXhPYmplY3RzID0+IHRoaXMuc2V0TG9jYXRpb25zRnJvbU14T2JqZWN0cyhteE9iamVjdHMpLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yID0+XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0TWVzc2FnZTogYEFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJldHJpZXZpbmcgbG9jYXRpb25zOiAke2Vycm9yfSBjb25zdHJhaW50IGAgKyB4cGF0aCxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zOiBbXVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgeHBhdGhcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaExvY2F0aW9uc0J5TWljcm9mbG93KG1pY3JvZmxvdzogc3RyaW5nLCBjb250ZXh0T2JqZWN0PzogbWVuZGl4LmxpYi5NeE9iamVjdCkge1xuICAgICAgICBpZiAobWljcm9mbG93KSB7XG4gICAgICAgICAgICB3aW5kb3cubXgudWkuYWN0aW9uKG1pY3JvZmxvdywge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAobXhPYmplY3RzOiBtZW5kaXgubGliLk14T2JqZWN0W10pID0+IHRoaXMuc2V0TG9jYXRpb25zRnJvbU14T2JqZWN0cyhteE9iamVjdHMpLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnRNZXNzYWdlOiBgQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmV0cmlldmluZyBsb2NhdGlvbnM6ICR7ZXJyb3IubWVzc2FnZX0gaW4gYCArIG1pY3JvZmxvdyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zOiBbXVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBhcHBseXRvOiBcInNlbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBndWlkczogY29udGV4dE9iamVjdCA/IFsgY29udGV4dE9iamVjdC5nZXRHdWlkKCkgXSA6IFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldExvY2F0aW9uc0Zyb21NeE9iamVjdHMobXhPYmplY3RzOiBtZW5kaXgubGliLk14T2JqZWN0W10pIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb25zID0gbXhPYmplY3RzLm1hcChteE9iamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYXQgPSBteE9iamVjdC5nZXQodGhpcy5wcm9wcy5sYXRpdHVkZUF0dHJpYnV0ZSk7XG4gICAgICAgICAgICBjb25zdCBsb24gPSBteE9iamVjdC5nZXQodGhpcy5wcm9wcy5sb25naXR1ZGVBdHRyaWJ1dGUpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBteE9iamVjdC5nZXQodGhpcy5wcm9wcy5hZGRyZXNzQXR0cmlidXRlKSBhcyBzdHJpbmcsXG4gICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGxhdCA/IE51bWJlcihsYXQpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogbG9uID8gTnVtYmVyKGxvbikgOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbnMgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VTdHlsZSA9IChzdHlsZSA9IFwiXCIpOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9PiB7IC8vIERvZXNuJ3Qgc3VwcG9ydCBhIGZldyBzdHVmZi5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZS5zcGxpdChcIjtcIikucmVkdWNlPHtba2V5OiBzdHJpbmddOiBzdHJpbmd9Pigoc3R5bGVPYmplY3QsIGxpbmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWlyID0gbGluZS5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICAgICAgaWYgKHBhaXIubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwYWlyWzBdLnRyaW0oKS5yZXBsYWNlKC8oLS4pL2csIG1hdGNoID0+IG1hdGNoWzFdLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtuYW1lXSA9IHBhaXJbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIHBhcnNlIHN0eWxlXCIsIHN0eWxlLCBlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufVxuXG5leHBvcnQgeyBHb29nbGVNYXBDb250YWluZXIgYXMgZGVmYXVsdCwgR29vZ2xlTWFwQ29udGFpbmVyUHJvcHMsIEdvb2dsZU1hcENvbnRhaW5lciwgRGF0YVNvdXJjZSB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR29vZ2xlTWFwQ29udGFpbmVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==

//# sourceURL=GoogleMapsContext.webmodeler.js
