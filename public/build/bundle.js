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
/******/ 		3: 0
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
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"selectMapView","1":"setTerrainView","2":"newMapView"}[chunkId]||chunkId) + ".chunk.js";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
        hover: {
            backgroundColor: "#bfbfbf"
        },
        active: {
            backgroundColor: "#FF8501",
            fontColor: "#ffffff"
        },
        focus: {
            backgroundColor: "#f1f1f1"
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


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    serverUrl: "http://localhost:3000"
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _route = __webpack_require__(3);

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

    var monk = new window.monk.Main("mainBox");

    monk.run(_route2.default);
};

var main = new Main();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mainView = __webpack_require__(4);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mainController = __webpack_require__(5);

var _mainController2 = _interopRequireDefault(_mainController);

var _fileView = __webpack_require__(8);

var _fileView2 = _interopRequireDefault(_fileView);

var _mapView = __webpack_require__(9);

var _mapView2 = _interopRequireDefault(_mapView);

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
                    "click": {
                        callback: "showDropdownView",
                        param: function param(self) {
                            return [0, self];
                        }
                    }
                }
            }, {
                type: "button",
                style: _nav.navButtonStyle.style,
                text: "地图",
                animation: _nav.navButtonStyle.animation,
                events: {
                    "click": {
                        callback: "showDropdownView",
                        param: function param(self) {
                            return [1, self];
                        }
                    }
                }
            }]
        }, {
            id: "top_tool_terrainShowLabel",
            type: "rect",
            style: {
                x: function x() {
                    return this.parent.getWidth() - 180;
                },
                y: 0,
                autoWidth: true,
                autoLine: false,
                height: "100%",
                lineHeight: TOP_HEIGHT,
                fontSize: "16px",
                fontColor: "#666666"
            },
            active: false
        }]
    }, (0, _fileView2.default)(TOP_HEIGHT), (0, _mapView2.default)(TOP_HEIGHT),
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
            __webpack_require__.e/* require.ensure */(2).then((function (require) {
                get(__webpack_require__(10).default, resolve, reject);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        });
    }, function (get) {
        return new Promise(function (resolve, reject) {
            __webpack_require__.e/* require.ensure */(1).then((function (require) {
                get(__webpack_require__(11).default, resolve, reject);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        });
    }, function (get) {
        return new Promise(function (resolve, reject) {
            __webpack_require__.e/* require.ensure */(0).then((function (require) {
                get(__webpack_require__(12).default, resolve, reject);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        });
    }]
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mapView = __webpack_require__(6);

var _mapView2 = _interopRequireDefault(_mapView);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by heju on 2017/7/14.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MainController = function (_window$monk$Controll) {
    _inherits(MainController, _window$monk$Controll);

    function MainController(component) {
        _classCallCheck(this, MainController);

        var _this = _possibleConstructorReturn(this, (MainController.__proto__ || Object.getPrototypeOf(MainController)).call(this, component));

        _this.registerEvent("$onViewLoaded", function () {
            _this.dropdownViews = [];
            _this.dropdownViews.push(_this.viewState.getComponentById("dropdown_fileView"));
            _this.dropdownViews.push(_this.viewState.getComponentById("dropdown_mapView"));

            var mainView = _this.viewState.getComponentById("mainView");
            mainView.registerEvent("click", _this.onClickRoot.bind(_this));
        });
        return _this;
    }

    _createClass(MainController, [{
        key: "hideAllDropdownViews",
        value: function hideAllDropdownViews() {
            this.dropdownViews.forEach(function (view) {
                view.active = false;
            });
        }
    }, {
        key: "showDropdownView",
        value: function showDropdownView(param, e) {
            this.hideAllDropdownViews();
            var x = param[1].getX() + param[1].parent.getX();
            this.dropdownViews[param[0]].setX(x);
            this.dropdownViews[param[0]].active = true;
            e.stopPropagation();
        }
    }, {
        key: "onClickRoot",
        value: function onClickRoot() {
            this.hideAllDropdownViews();
        }
    }, {
        key: "openNewMapDlg",
        value: function openNewMapDlg(e) {
            var _this2 = this;

            var newMapWindow = this.viewState.getComponentById("new_map_window");
            newMapWindow.controller.clearForm();
            newMapWindow.controller.center().openWindow({
                okCallback: function okCallback(data) {
                    var parent = _this2.component.getComponentById("edit_area");
                    _this2.mapComponent = new window.monk.components.Rect(parent);
                    _this2.mapComponent.initCfg((0, _mapView2.default)(data));
                    parent.appendChildren(_this2.mapComponent);
                }
            });
        }
    }, {
        key: "openSetTerrainDlg",
        value: function openSetTerrainDlg(e) {
            var _this3 = this;

            var setTerrainWindow = this.viewState.getComponentById("set_terrain_window");
            setTerrainWindow.controller.center().openWindow({
                okCallback: function okCallback(data) {
                    if (_this3.mapComponent) {
                        if (data.trrainBlock) //选中“设置地形为障碍物”标识当前正在设置障碍物
                            {
                                _this3.mapComponent.controller.isSetTerrain = false;
                            } else {
                            _this3.mapComponent.controller.isSetTerrain = true;
                        }
                        _this3.mapComponent.controller.terrain = data.terrain;
                        var terrainShowLabel = _this3.viewState.getComponentById("top_tool_terrainShowLabel");
                        if (data.terrain && data.terrain !== "0") {
                            terrainShowLabel.setText("当前设置地形：" + data.terrain);
                        } else {
                            terrainShowLabel.setText("");
                        }
                        terrainShowLabel.setX(terrainShowLabel.parent.getWidth() - terrainShowLabel.getWidth());
                        terrainShowLabel.active = true;
                    }
                }
            });
        }
    }, {
        key: "saveMap",
        value: function saveMap(e) {
            window.monk.httpUtil.post(_config2.default.serverUrl + "/saveMap", {
                mapName: this.mapComponent.controller.mapName,
                width: this.mapComponent.controller.width,
                height: this.mapComponent.controller.height,
                size: this.mapComponent.controller.size,
                mapData: JSON.stringify(this.mapComponent.controller.mapData)
            }).then(function (data) {
                data = JSON.parse(data);
                if (data.code === 200) {
                    window.monk.commonUtil.popMessageTooltip("保存成功！");
                }
            });
        }
    }, {
        key: "loadMap",
        value: function loadMap() {
            var _this4 = this;

            var selectMapWindow = this.viewState.getComponentById("select_map_window");
            selectMapWindow.controller.center().openWindow({
                okCallback: function okCallback(data) {
                    var parent = _this4.component.getComponentById("edit_area");
                    _this4.mapComponent = new window.monk.components.Rect(parent);
                    _this4.mapComponent.initCfg((0, _mapView2.default)(data));
                    parent.appendChildren(_this4.mapComponent);
                }
            });
        }
    }]);

    return MainController;
}(window.monk.Controller);

exports.default = MainController;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mapController = __webpack_require__(7);

var _mapController2 = _interopRequireDefault(_mapController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (data) {
    return {
        name: "mapCom",
        controller: _mapController2.default,
        controllerParam: data,
        type: "rect",
        style: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            backgroundColor: "#c8c8c8",
            draggable: true
        }
    };
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapController = function (_window$monk$Controll) {
    _inherits(MapController, _window$monk$Controll);

    function MapController(component, data) {
        _classCallCheck(this, MapController);

        var _this = _possibleConstructorReturn(this, (MapController.__proto__ || Object.getPrototypeOf(MapController)).call(this, component));

        _this.mapName = data.mapName;
        _this.width = parseInt(data.width, 10);
        _this.height = parseInt(data.height, 10);
        _this.size = parseInt(data.size, 10);

        _this.startCoors = undefined; //多选开始坐标
        _this.endCoors = undefined; //多选结束坐标
        _this.selectedCoors = undefined; //选中的坐标集合
        _this.terrain = undefined; //当前指定的地形
        _this.isSetTerrain = false; //是否正在设置地形

        _this.mapData = data.mapData;
        if (!_this.mapData) {
            _this.initMapData();
        }

        _this.component.setStyle({
            width: _this.width * _this.size,
            height: _this.height * _this.size
        });

        _this.component.registerEvent("mousedown", function (e) {
            if (e.button === 2) //右键点击
                {
                    //鼠标相对于面板的x,y值
                    var mx = e.pageX - _this.component.getRealX();
                    var my = e.pageY - _this.component.getRealY();

                    var x = Math.floor(mx / _this.size);
                    var y = Math.floor(my / _this.size);
                    _this.startCoors = { x: x, y: y };
                }
        });
        _this.component.registerEvent("mousemove", function (e) {
            if (_this.startCoors) {
                //鼠标相对于面板的x,y值
                var mx = e.pageX - _this.component.getRealX();
                var my = e.pageY - _this.component.getRealY();

                var x = Math.floor(mx / _this.size);
                var y = Math.floor(my / _this.size);

                _this.endCoors = { x: x, y: y };
            }
        });
        _this.component.registerEvent("mouseup", function (e) {
            if (e.button === 2) //右键点击
                {
                    if (_this.startCoors && _this.endCoors) //批量设置
                        {
                            var minX = Math.min(_this.startCoors.x, _this.endCoors.x);
                            var maxX = Math.max(_this.startCoors.x, _this.endCoors.x);
                            var minY = Math.min(_this.startCoors.y, _this.endCoors.y);
                            var maxY = Math.max(_this.startCoors.y, _this.endCoors.y);
                            if (_this.isSetTerrain) {
                                _this.setMapDataBatch(minX, maxX, minY, maxY, "terrain", _this.terrain);
                            } else {
                                _this.setMapDataBatch(minX, maxX, minY, maxY, "block", !_this.mapData[minX][minY].block);
                            }

                            _this.selectedCoors = {
                                minX: minX,
                                maxX: maxX,
                                minY: minY,
                                maxY: maxY
                            };
                        } else {
                        //鼠标相对于面板的x,y值
                        var mx = e.pageX - _this.component.getRealX();
                        var my = e.pageY - _this.component.getRealY();

                        var x = Math.floor(mx / _this.size);
                        var y = Math.floor(my / _this.size);
                        if (_this.isSetTerrain) {
                            _this.setMapData(x, y, "terrain", _this.terrain);
                        } else {
                            _this.setMapData(x, y, "block", !_this.mapData[x][y].block);
                        }

                        _this.selectedCoors = {
                            x: x,
                            y: y
                        };
                    }
                    _this.startCoors = undefined;
                    _this.endCoors = undefined;
                }
        });
        return _this;
    }

    //初始化地图数据


    _createClass(MapController, [{
        key: "initMapData",
        value: function initMapData() {
            this.mapData = [];
            for (var x = 0; x < this.height; x++) {
                this.mapData[x] = [];
                for (var y = 0; y < this.width; y++) {
                    this.mapData[x][y] = {
                        block: false, //是否障碍物
                        terrain: 0 //地形：无
                    };
                }
            }
        }

        //设置指定位置的地图数据

    }, {
        key: "setMapData",
        value: function setMapData(x, y, key, value) {
            this.mapData[x][y][key] = value;
        }
        //批量设置指定位置的地图数据

    }, {
        key: "setMapDataBatch",
        value: function setMapDataBatch(minX, maxX, minY, maxY, key, value) {
            for (var x = minX; x <= maxX; x++) {
                for (var y = minY; y <= maxY; y++) {
                    this.setMapData(x, y, key, value);
                }
            }
        }
    }, {
        key: "draw",
        value: function draw(ctx) {
            //绘制地图方格
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#6a6a6a";
            ctx.globalAlpha = 1;

            for (var y = 0; y <= this.width; y++) {
                for (var x = 0; x <= this.height; x++) {
                    //绘制障碍物
                    ctx.beginPath();
                    ctx.fillStyle = "#000000";
                    if (this.mapData && this.mapData[x] && this.mapData[x][y] && this.mapData[x][y].block && y < this.width && x < this.height) {
                        ctx.rect(this.component.getRealX() + x * this.size, this.component.getRealY() + y * this.size, this.size, this.size);
                        ctx.fill();
                    }
                    ctx.closePath();

                    //绘制地形
                    ctx.beginPath();
                    if (this.mapData && this.mapData[x] && this.mapData[x][y] && this.mapData[x][y].terrain && this.mapData[x][y].terrain !== "0") {
                        var FONT_SIZE = 15;
                        ctx.font = FONT_SIZE + "px Microsoft YaHei";
                        ctx.fillStyle = "#ff0000";
                        ctx.textBaseline = "hanging";
                        ctx.fillText(this.mapData[x][y].terrain, this.component.getRealX() + x * this.size, this.component.getRealY() + y * this.size + (this.size / 2 - FONT_SIZE / 2));
                    }
                    ctx.closePath();
                }
            }

            //画线
            ctx.beginPath();
            for (var _y = 0; _y <= this.width; _y++) {
                for (var _x = 0; _x <= this.height; _x++) {
                    ctx.moveTo(this.component.getRealX(), this.component.getRealY() + _x * this.size);
                    ctx.lineTo(this.component.getRealX() + this.component.getWidth(), this.component.getRealY() + _x * this.size);
                    ctx.moveTo(this.component.getRealX() + _y * this.size, this.component.getRealY());
                    ctx.lineTo(this.component.getRealX() + _y * this.size, this.component.getRealY() + this.component.getHeight());
                }
            }
            ctx.stroke();
            ctx.closePath();

            //绘制多选区域
            if (this.startCoors && this.endCoors) {
                ctx.beginPath();
                ctx.fillStyle = "#337ab7";
                ctx.globalAlpha = 0.6;
                var minX = Math.min(this.startCoors.x, this.endCoors.x);
                var maxX = Math.max(this.startCoors.x, this.endCoors.x);
                var minY = Math.min(this.startCoors.y, this.endCoors.y);
                var maxY = Math.max(this.startCoors.y, this.endCoors.y);
                ctx.rect(this.component.getRealX() + minX * this.size, this.component.getRealY() + minY * this.size, maxX * this.size - minX * this.size + this.size, maxY * this.size - minY * this.size + this.size);
                ctx.fill();
                ctx.closePath();
            }
        }
    }]);

    return MapController;
}(window.monk.Controller);

exports.default = MapController;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nav = __webpack_require__(0);

exports.default = function (TOP_HEIGHT) {
    return {
        id: "dropdown_fileView",
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
            animation: _nav.navItemStyle.animation,
            events: {
                "click": "loadMap"
            }
        }, {
            type: "rect",
            style: _nav.navDivider.style
        }, {
            type: "button",
            style: _nav.navItemStyle.style,
            text: "保存地图",
            animation: _nav.navItemStyle.animation,
            events: {
                "click": "saveMap"
            }
        }]
    };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nav = __webpack_require__(0);

exports.default = function (TOP_HEIGHT) {
    return {
        id: "dropdown_mapView",
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
            text: "设置地形",
            animation: _nav.navItemStyle.animation,
            events: {
                "click": "openSetTerrainDlg"
            }
        }]
    };
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map