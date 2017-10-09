/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"newMapView"}[chunkId]||chunkId) + ".chunk.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//顶部工具栏按钮
var navButtonStyle = exports.navButtonStyle = {
    style: {
        autoWidth: true,
        height: "100%",
        backgroundColor: "#ddd",
        hover: {
            backgroundColor: "#f1f1f1"
        },
        active: {
            backgroundColor: "#FF8501",
            fontColor: "#ffffff"
        }
    },
    animation: {
        backgroundColor: {
            duration: "300ms",
            easeType: "Linear",
            easing: "ease"
        }
    }
};

//顶部工具栏下拉分割线
var navDivider = exports.navDivider = {
    style: {
        width: "100%",
        height: 1,
        backgroundColor: "#ABABAB"
    }
};

//顶部工具栏下拉选项按钮
var navItemStyle = exports.navItemStyle = {
    style: {
        width: "100%",
        height: 35,
        backgroundColor: "#DCDCDC",
        hover: {
            backgroundColor: "#E9E9E9"
        },
        active: {
            backgroundColor: "#FF8501",
            fontColor: "#ffffff"
        }
    },
    animation: {
        backgroundColor: {
            duration: "300ms",
            easeType: "Linear",
            easing: "ease"
        }
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _route = __webpack_require__(2);

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Created by heju on 2017/7/19.
                                                                                                                                                           */


var Main = function Main() {
    _classCallCheck(this, Main);

    var mainBox = document.getElementById("mainBox");
    mainBox.style.width = window.innerWidth + "px";
    mainBox.style.height = window.innerHeight + "px";

    var monk = new window.Monk.Main("mainBox");

    monk.run(_route2.default);
};

var main = new Main();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mainView = __webpack_require__(3);

var _mainView2 = _interopRequireDefault(_mainView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    id: "mainRoute",
    type: "route",
    routes: {
        "main": {
            view: _mainView2.default,
            default: true
        }
    }
}; /**
    * Created by heju on 2017/7/27.
    */

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mainController = __webpack_require__(4);

var _mainController2 = _interopRequireDefault(_mainController);

var _fileView = __webpack_require__(7);

var _fileView2 = _interopRequireDefault(_fileView);

var _nav = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOP_HEIGHT = 30;

exports.default = {
    id: "mainView",
    controller: _mainController2.default,
    type: "rect",
    style: {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff"
    },
    children: [
    //工具栏
    {
        type: "rect",
        style: {
            x: 0,
            y: 0,
            width: "100%",
            height: TOP_HEIGHT,
            backgroundColor: "#aeaeae"
        },
        children: [{
            type: "rect",
            style: {
                x: 10,
                y: 0,
                autoWidth: true,
                height: "100%",
                layout: {
                    type: "linearLayout",
                    orientation: "horizontal"
                }
            },
            children: [{
                type: "button",
                style: _nav.navButtonStyle.style,
                text: "文件",
                animation: _nav.navButtonStyle.animation,
                events: {
                    "click": "showFileView"
                }
            }]
        }]
    }, (0, _fileView2.default)(TOP_HEIGHT),
    //编辑区域
    {
        id: "edit_area",
        type: "rect",
        style: {
            x: 0,
            y: TOP_HEIGHT,
            width: "100%",
            height: function height() {
                return this.parent.getHeight() - TOP_HEIGHT;
            },
            backgroundColor: "#f4f4f4"
        }
    }, function (get) {
        return new Promise(function (resolve, reject) {
            __webpack_require__.e/* require.ensure */(0).then((function (require) {
                get(__webpack_require__(8).default, resolve, reject);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        });
    }]
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mapView = __webpack_require__(5);

var _mapView2 = _interopRequireDefault(_mapView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by heju on 2017/7/14.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MainController = function (_window$Monk$Controll) {
    _inherits(MainController, _window$Monk$Controll);

    function MainController(component) {
        _classCallCheck(this, MainController);

        var _this = _possibleConstructorReturn(this, (MainController.__proto__ || Object.getPrototypeOf(MainController)).call(this, component));

        _this.registerEvent("$onViewLoaded", function () {
            _this.fileView = _this.viewState.getComponentById("fileView");

            var mainView = _this.viewState.getComponentById("mainView");
            mainView.registerEvent("click", _this.onClickRoot.bind(_this));
        });
        return _this;
    }

    _createClass(MainController, [{
        key: "showFileView",
        value: function showFileView(e) {
            this.fileView.active = !this.fileView.active;
            e.stopPropagation();
        }
    }, {
        key: "onClickRoot",
        value: function onClickRoot() {
            this.fileView.active = false;
        }
    }, {
        key: "openNewMapDlg",
        value: function openNewMapDlg(e) {
            var _this2 = this;

            var newMapWindow = this.viewState.getComponentById("new_map_window");
            newMapWindow.controller.clearForm();
            newMapWindow.controller.openWindow({
                okCallback: function okCallback(data) {
                    console.log(data);

                    var parent = _this2.component.getComponentById("edit_area");
                    var mapRect = new window.Monk.components.Rect(parent);
                    mapRect.initCfg((0, _mapView2.default)());
                    parent.appendChildren(mapRect);
                }
            }).center();
        }
    }]);

    return MainController;
}(window.Monk.Controller);

exports.default = MainController;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mapController = __webpack_require__(6);

var _mapController2 = _interopRequireDefault(_mapController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return {
        name: "mapCom",
        controller: _mapController2.default,
        type: "rect",
        style: {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            backgroundColor: "#c8c8c8"
        }
    };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapController = function (_window$Monk$Controll) {
    _inherits(MapController, _window$Monk$Controll);

    function MapController(component) {
        _classCallCheck(this, MapController);

        return _possibleConstructorReturn(this, (MapController.__proto__ || Object.getPrototypeOf(MapController)).call(this, component));
    }

    return MapController;
}(window.Monk.Controller);

exports.default = MapController;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nav = __webpack_require__(0);

exports.default = function (TOP_HEIGHT) {
    return {
        id: "fileView",
        type: "rect",
        style: {
            x: 10,
            y: TOP_HEIGHT,
            width: 100,
            autoHeight: true,
            backgroundColor: "#DCDCDC",
            borderWidth: 1,
            borderColor: "#ABABAB",
            layout: {
                type: "linearLayout",
                orientation: "vertical"
            },
            zIndex: 2
        },
        active: false,
        children: [{
            type: "button",
            style: _nav.navItemStyle.style,
            text: "新建地图",
            animation: _nav.navItemStyle.animation,
            events: {
                "click": "openNewMapDlg"
            }
        }, {
            type: "rect",
            style: _nav.navDivider.style
        }, {
            type: "button",
            style: _nav.navItemStyle.style,
            text: "加载地图",
            animation: _nav.navItemStyle.animation
        }]
    };
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map