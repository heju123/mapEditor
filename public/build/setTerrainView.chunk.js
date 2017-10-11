webpackJsonp([0],[
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _setTerrainController = __webpack_require__(16);

var _setTerrainController2 = _interopRequireDefault(_setTerrainController);

var _window = __webpack_require__(12);

var _window2 = _interopRequireDefault(_window);

var _common = __webpack_require__(13);

var _form = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORM_ROW_HEIGHT = 60;
var FORM_LABEL_WIDTH = 100;
var FORM_INPUT_PADDING = 15;
var FORM_BUTTON_HEIGHT = 30;

var CHECKBOX_WIDTH = 20;
var CHECKBOX_HEIGHT = 20;
var CHECKBOX_LINEWIDTH = 3;

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
            autoHeight: true,
            layout: {
                type: "linearLayout",
                orientation: "vertical"
            }
        },
        children: [{
            name: "input_row",
            type: "rect",
            style: {
                width: "100%",
                height: FORM_ROW_HEIGHT,
                layout: {
                    type: "linearLayout",
                    orientation: "horizontal"
                }
            },
            children: (0, _form.formInputStyle)(undefined, "terrain", "设置地形：", {
                formRowHeight: FORM_ROW_HEIGHT,
                formLabelWidth: FORM_LABEL_WIDTH,
                formInputPadding: FORM_INPUT_PADDING
            })
        }, {
            name: "input_row",
            type: "rect",
            style: {
                width: "100%",
                height: FORM_ROW_HEIGHT,
                layout: {
                    type: "linearLayout",
                    orientation: "horizontal"
                }
            },
            children: (0, _form.formCheckboxStyle)(undefined, "setTerrainBlock", "设置地形为障碍物", {
                formRowHeight: FORM_ROW_HEIGHT,
                width: CHECKBOX_WIDTH,
                height: CHECKBOX_HEIGHT,
                lineWidth: CHECKBOX_LINEWIDTH
            })
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
                height: FORM_ROW_HEIGHT,
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
            }), {
                name: "button_div",
                type: "rect",
                style: {
                    width: "20",
                    height: FORM_ROW_HEIGHT
                }
            }, (0, _common.buttonStyle)("取消", {
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

exports.default = (0, _window2.default)(_setTerrainController2.default, {
    id: "set_terrain_window",
    title: "设置地形",
    width: 300,
    height: 250,
    contentStyle: contentStyle
});

/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
                borderRadius: 3
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
            }
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
                    console.log(this.parent);
                }
            }
        }
    }];
};

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseWindowController = __webpack_require__(11);

var _baseWindowController2 = _interopRequireDefault(_baseWindowController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SetTerrainController = function (_BaseWindowController) {
    _inherits(SetTerrainController, _BaseWindowController);

    function SetTerrainController(component) {
        _classCallCheck(this, SetTerrainController);

        var _this = _possibleConstructorReturn(this, (SetTerrainController.__proto__ || Object.getPrototypeOf(SetTerrainController)).call(this, component));

        _this.registerEvent("$onViewLoaded", function () {});
        return _this;
    }

    _createClass(SetTerrainController, [{
        key: "onOk",
        value: function onOk() {
            var terrain = this.component.getComponentByName("terrain");
            this.closeWindow({
                terrain: terrain.getText()
            });
        }
    }, {
        key: "onCancel",
        value: function onCancel() {
            this.closeWindow();
        }
    }]);

    return SetTerrainController;
}(_baseWindowController2.default);

exports.default = SetTerrainController;

/***/ })
]);
//# sourceMappingURL=setTerrainView.chunk.js.map