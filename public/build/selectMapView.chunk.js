webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _selectMapController = __webpack_require__(20);

var _selectMapController2 = _interopRequireDefault(_selectMapController);

var _window = __webpack_require__(14);

var _window2 = _interopRequireDefault(_window);

var _common = __webpack_require__(15);

var _form = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORM_BOTTOM_HEIGHT = 40;
var FORM_BUTTON_HEIGHT = 30;

var contentStyle = {
    type: "rect",
    style: {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
    },
    children: [{
        name: "form1",
        type: "rect",
        style: {
            x: 0,
            y: 0,
            width: "100%",
            height: "100%",
            layout: {
                type: "linearLayout",
                orientation: "vertical"
            }
        },
        children: [{
            name: "file_list_outer",
            type: "rect",
            style: {
                width: "100%",
                height: function height() {
                    return this.parent.getInnerHeight() - 20 - FORM_BOTTOM_HEIGHT;
                }
            },
            children: [{
                name: "file_list",
                type: "rect",
                style: {
                    x: 10,
                    y: 10,
                    width: function width() {
                        return this.parent.getInnerWidth() - 20;
                    },
                    height: function height() {
                        return this.parent.getInnerHeight() - 20;
                    },
                    backgroundColor: "#f4f4f4",
                    borderColor: "#dfdfdf",
                    borderWidth: 1,
                    borderRadius: 5,
                    layout: {
                        type: "linearLayout",
                        orientation: "horizontal"
                    }
                }
            }]
        }, {
            name: "input_row_blank",
            type: "rect",
            style: {
                width: "100%",
                height: 20,
                layout: {
                    type: "linearLayout",
                    orientation: "horizontal",
                    contentAlign: "center"
                }
            }
        }, {
            name: "input_row",
            type: "rect",
            style: {
                width: "100%",
                height: FORM_BOTTOM_HEIGHT,
                layout: {
                    type: "linearLayout",
                    orientation: "horizontal",
                    contentAlign: "center"
                }
            },
            children: [(0, _common.buttonStyle)("确定", {
                y: function y() {
                    return this.parent.getInnerHeight() / 2 - FORM_BUTTON_HEIGHT / 2;
                },
                autoWidth: true,
                height: FORM_BUTTON_HEIGHT,
                events: {
                    click: "onOk"
                }
            }), (0, _common.buttonStyle)("取消", {
                y: function y() {
                    return this.parent.getInnerHeight() / 2 - FORM_BUTTON_HEIGHT / 2;
                },
                autoWidth: true,
                height: FORM_BUTTON_HEIGHT,
                events: {
                    click: "onCancel"
                }
            })]
        }]
    }]
};

exports.default = (0, _window2.default)(_selectMapController2.default, {
    id: "select_map_window",
    title: "选择地图",
    width: 400,
    height: 300,
    contentStyle: contentStyle
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseWindowController = function (_window$monk$Controll) {
    _inherits(BaseWindowController, _window$monk$Controll);

    function BaseWindowController(component) {
        _classCallCheck(this, BaseWindowController);

        return _possibleConstructorReturn(this, (BaseWindowController.__proto__ || Object.getPrototypeOf(BaseWindowController)).call(this, component));
    }

    _createClass(BaseWindowController, [{
        key: "openWindow",
        value: function openWindow(opts) {
            this.opts = opts;
            this.component.parent.active = true;
            var y = this.component.getY();
            this.component.setStyle("y", y - 200, false);
            this.component.setStyle("y", y);
            this.component.parent.setStyle("alpha", 0.4);
            this.component.setStyle("alpha", 1);

            if (this.onOpen && typeof this.onOpen === "function") {
                this.onOpen.apply(this, []);
            }
            return this;
        }
    }, {
        key: "center",
        value: function center() {
            this.component.setStyle({
                x: this.component.parent.getInnerWidth() / 2 - this.component.getWidth() / 2,
                y: this.component.parent.getInnerHeight() / 2 - this.component.getHeight() / 2
            }, false);
            return this;
        }
    }, {
        key: "closeWindow",
        value: function closeWindow(data) {
            var _this2 = this;

            var promise1 = this.component.parent.setStyle("alpha", 0);
            var promise2 = this.component.setStyle({
                "alpha": 0,
                "y": this.component.getY() + 200
            });
            Promise.all([promise1, promise2]).then(function () {
                _this2.component.parent.active = false;

                if (_this2.opts && _this2.opts.okCallback && typeof _this2.opts.okCallback === "function") {
                    _this2.opts.okCallback.apply(_this2, [data]);
                }
            });
        }
    }]);

    return BaseWindowController;
}(window.monk.Controller);

exports.default = BaseWindowController;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var HEAD_HEIGHT = 50;

var getHeader = function getHeader(title) {
    return {
        type: "rect",
        style: {
            x: 0,
            y: 0,
            width: "100%",
            height: HEAD_HEIGHT,
            backgroundColor: "#3D3D3D"
        },
        children: [{
            type: "rect",
            style: {
                x: 10,
                y: 0,
                autoWidth: true,
                height: "100%",
                lineHeight: HEAD_HEIGHT,
                fontColor: "#919191",
                fontSize: "18px"
            },
            text: title
        }]
    };
};

var getContent = function getContent(content) {
    return {
        type: "rect",
        style: {
            x: 0,
            y: HEAD_HEIGHT,
            width: "100%",
            height: function height() {
                return this.parent.getInnerHeight() - HEAD_HEIGHT;
            },
            backgroundColor: "#ffffff"
        },
        children: [content]
    };
};

exports.default = function (controller, opts) {
    return {
        type: "rect",
        active: false,
        style: {
            x: 0,
            y: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#000000",
            zIndex: 9998,
            alpha: 0
        },
        animation: {
            alpha: {
                duration: "500ms",
                easeType: "Linear",
                easing: "ease"
            }
        },
        children: [{
            id: opts.id,
            controller: controller,
            type: "rect",
            style: {
                x: opts.x || 0,
                y: opts.y || "20%",
                width: opts.width,
                height: opts.height,
                backgroundColor: "#dfdfdf",
                borderColor: "#3D3D3D",
                borderWidth: 1,
                borderRadius: 5,
                zIndex: 9999,
                alpha: 0
            },
            animation: {
                alpha: {
                    duration: "500ms",
                    easeType: "Linear",
                    easing: "ease"
                },
                y: {
                    duration: "300ms",
                    easeType: "Linear",
                    easing: "ease"
                }
            },
            children: [getHeader(opts.title), getContent(opts.contentStyle)]
        }]
    };
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//按钮
var buttonStyle = exports.buttonStyle = function buttonStyle(text, opts) {
    var style = {};
    style.x = opts.x;
    style.y = opts.y;
    if (opts.width !== undefined) {
        style.width = opts.width;
    } else {
        style.autoWidth = true;
    }
    style.height = opts.height;
    style.borderWidth = 1;
    style.borderColor = "#dfdfdf";
    style.backgroundColor = "#ffffff";
    style.hover = {
        backgroundColor: "#337ab7",
        borderColor: "#337ab7",
        fontColor: "#fff"
    };
    style.active = {
        backgroundColor: "#3170AB",
        borderColor: "#3170AB",
        fontColor: "#fff"
    };

    return {
        name: "button",
        type: "button",
        style: style,
        text: text,
        events: opts.events
    };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//表单输入框
var formInputStyle = exports.formInputStyle = function formInputStyle(id, name, title, opts) {
    return [{
        name: "input_label",
        type: "rect",
        style: {
            width: opts.formLabelWidth,
            height: "100%",
            lineHeight: opts.formRowHeight,
            textAlign: "center"
        },
        text: title
    }, {
        name: "input_area",
        type: "rect",
        style: {
            width: function width() {
                return this.parent.getInnerWidth() - opts.formLabelWidth;
            },
            height: "100%"
        },
        children: [{
            id: id,
            name: name || "input",
            type: "input",
            style: {
                x: opts.formInputPadding,
                y: opts.formInputPadding,
                width: function width() {
                    return this.parent.getInnerWidth() - opts.formInputPadding * 2;
                },
                height: function height() {
                    return this.parent.getInnerHeight() - opts.formInputPadding * 2;
                },
                borderWidth: 1,
                borderColor: "#dfdfdf",
                borderRadius: 3,
                readOnly: opts.readOnly
            }
        }]
    }];
};

var formCheckboxStyle = exports.formCheckboxStyle = function formCheckboxStyle(id, name, title, opts) {
    return [{
        type: "rect",
        style: {
            width: 40,
            height: "100%"
        },
        children: [{
            id: id,
            name: name || "checkbox",
            type: "checkbox",
            style: {
                x: function x() {
                    return this.parent.getWidth() / 2 - opts.width / 2;
                },
                y: function y() {
                    return this.parent.getHeight() / 2 - opts.height / 2;
                },
                width: opts.width,
                height: opts.height,
                lineWidth: opts.lineWidth
            },
            events: {
                "click": opts.onChecked
            },
            checked: opts.checked
        }]
    }, {
        type: "rect",
        style: {
            autoWidth: true,
            height: "100%",
            lineHeight: opts.formRowHeight
        },
        text: title,
        events: {
            "click": {
                callback: function callback() {
                    var checkbox = this.parent.getComponentsByType("checkbox");
                    if (checkbox && checkbox.length > 0) {
                        checkbox[0].triggerEvent("click");
                    }
                }
            }
        }
    }];
};

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseWindowController = __webpack_require__(13);

var _baseWindowController2 = _interopRequireDefault(_baseWindowController);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _fileListItemView = __webpack_require__(21);

var _fileListItemView2 = _interopRequireDefault(_fileListItemView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectMapController = function (_BaseWindowController) {
    _inherits(SelectMapController, _BaseWindowController);

    function SelectMapController(component) {
        _classCallCheck(this, SelectMapController);

        return _possibleConstructorReturn(this, (SelectMapController.__proto__ || Object.getPrototypeOf(SelectMapController)).call(this, component));
    }

    _createClass(SelectMapController, [{
        key: "onOpen",
        value: function onOpen() {
            this.getMapList();
        }
    }, {
        key: "getMapList",
        value: function getMapList() {
            var _this2 = this;

            window.monk.httpUtil.get(_config2.default.serverUrl + "/getMapList").then(function (data) {
                data = JSON.parse(data);
                if (data.code === 200) {
                    _this2.fileList = data.list;
                    var item = void 0;
                    var parent = _this2.component.getComponentByName("file_list");
                    _this2.fileList.forEach(function (file) {
                        item = new window.monk.components.Rect(parent);
                        item.initCfg((0, _fileListItemView2.default)(file));
                        parent.appendChildren(item);
                    });
                }
            });
        }
    }, {
        key: "onOk",
        value: function onOk() {}
    }, {
        key: "onCancel",
        value: function onCancel() {
            this.closeWindow();
        }
    }]);

    return SelectMapController;
}(_baseWindowController2.default);

exports.default = SelectMapController;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FILE_LIST_ITEM_WIDTH = 60;
var FILE_LIST_ITEM_HEIGHT = 60;

exports.default = function (name) {
    return {
        name: "file_list_item_outer",
        type: "rect",
        style: {
            width: 80,
            height: 80
        },
        children: [{
            name: "file_list_item",
            type: "rect",
            style: {
                x: function x() {
                    return this.parent.getWidth() / 2 - FILE_LIST_ITEM_WIDTH / 2;
                },
                y: function y() {
                    return this.parent.getHeight() / 2 - FILE_LIST_ITEM_HEIGHT / 2;
                },
                width: FILE_LIST_ITEM_WIDTH,
                height: FILE_LIST_ITEM_HEIGHT,
                hover: function hover() {
                    this.getComponentByName("file_list_item_img").setStyle("backgroundImage", "/src/images/map_on.png");
                    this.getComponentByName("file_list_item_text").setStyle("fontColor", "#337ab7");
                    this.setStyle("scale", "1.1,1.1");
                },
                hoverout: function hoverout() {
                    this.getComponentByName("file_list_item_img").setStyle("backgroundImage", "/src/images/map.png");
                    this.getComponentByName("file_list_item_text").setStyle("fontColor", "#333");
                    this.setStyle("scale", "1,1");
                },
                layout: {
                    type: "linearLayout",
                    orientation: "vertical"
                }
            },
            animation: {
                scale: {
                    duration: "200ms",
                    easeType: "Linear",
                    easing: "easeOut"
                }
            },
            children: [{
                name: "file_list_item_img",
                type: "rect",
                style: {
                    width: "100%",
                    height: 40,
                    backgroundImage: "/src/images/map.png"
                }
            }, {
                name: "file_list_item_text",
                type: "rect",
                style: {
                    width: "100%",
                    height: 20,
                    lineHeight: 20,
                    textAlign: "center"
                },
                text: name
            }]
        }]
    };
};

/***/ })
]);
//# sourceMappingURL=selectMapView.chunk.js.map