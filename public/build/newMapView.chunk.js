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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newMapController = __webpack_require__(10);

var _newMapController2 = _interopRequireDefault(_newMapController);

var _window = __webpack_require__(12);

var _window2 = _interopRequireDefault(_window);

var _common = __webpack_require__(13);

var _form = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORM_ROW_HEIGHT = 60;
var FORM_LABEL_WIDTH = 100;
var FORM_INPUT_PADDING = 15;
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
            children: (0, _form.formInputStyle)("mapName", "地图名称：", {
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
            children: [{
                name: "input_50p",
                type: "rect",
                style: {
                    width: "50%",
                    height: "100%",
                    layout: {
                        type: "linearLayout",
                        orientation: "horizontal"
                    }
                },
                children: (0, _form.formInputStyle)("width", "宽：", {
                    formRowHeight: FORM_ROW_HEIGHT,
                    formLabelWidth: FORM_LABEL_WIDTH,
                    formInputPadding: FORM_INPUT_PADDING
                })
            }, {
                name: "input_50p",
                type: "rect",
                style: {
                    width: "50%",
                    height: "100%",
                    layout: {
                        type: "linearLayout",
                        orientation: "horizontal"
                    }
                },
                children: (0, _form.formInputStyle)("height", "高：", {
                    formRowHeight: FORM_ROW_HEIGHT,
                    formLabelWidth: FORM_LABEL_WIDTH,
                    formInputPadding: FORM_INPUT_PADDING
                })
            }]
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
            children: [{
                name: "input_50p",
                type: "rect",
                style: {
                    width: "50%",
                    height: "100%",
                    layout: {
                        type: "linearLayout",
                        orientation: "horizontal"
                    }
                },
                children: (0, _form.formInputStyle)("size", "格子大小：", {
                    formRowHeight: FORM_ROW_HEIGHT,
                    formLabelWidth: FORM_LABEL_WIDTH,
                    formInputPadding: FORM_INPUT_PADDING
                })
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

exports.default = (0, _window2.default)(_newMapController2.default, {
    id: "new_map_window",
    title: "新建地图",
    width: 400,
    height: 300,
    contentStyle: contentStyle
});

/***/ }),
/* 10 */
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

var NewMapController = function (_BaseWindowController) {
    _inherits(NewMapController, _BaseWindowController);

    function NewMapController(component) {
        _classCallCheck(this, NewMapController);

        var _this = _possibleConstructorReturn(this, (NewMapController.__proto__ || Object.getPrototypeOf(NewMapController)).call(this, component));

        _this.registerEvent("$onViewLoaded", function () {});
        return _this;
    }

    _createClass(NewMapController, [{
        key: "clearForm",
        value: function clearForm() {
            var mapNameCom = this.component.getComponentById("mapName");
            var widthCom = this.component.getComponentById("width");
            var heightCom = this.component.getComponentById("height");
            var sizeCom = this.component.getComponentById("size");

            mapNameCom.setText("");
            widthCom.setText("");
            heightCom.setText("");
            sizeCom.setText("");
        }
    }, {
        key: "onOk",
        value: function onOk() {
            var mapNameCom = this.component.getComponentById("mapName");
            var widthCom = this.component.getComponentById("width");
            var heightCom = this.component.getComponentById("height");
            var sizeCom = this.component.getComponentById("size");
            this.closeWindow({
                mapName: mapNameCom.getText(),
                width: widthCom.getText(),
                height: heightCom.getText(),
                size: sizeCom.getText()
            });
        }
    }, {
        key: "onCancel",
        value: function onCancel() {
            this.closeWindow();
        }
    }]);

    return NewMapController;
}(_baseWindowController2.default);

exports.default = NewMapController;

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
var formInputStyle = exports.formInputStyle = function formInputStyle(id, title, opts) {
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
            name: "input",
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

/***/ })
]);
//# sourceMappingURL=newMapView.chunk.js.map