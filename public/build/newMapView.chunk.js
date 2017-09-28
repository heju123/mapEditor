webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newMapController = __webpack_require__(7);

var _newMapController2 = _interopRequireDefault(_newMapController);

var _window = __webpack_require__(9);

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORM_ROW_HEIGHT = 40;
var FORM_LABEL_WIDTH = 100;
var FORM_INPUT_PADDING = 5;
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
            children: [{
                name: "input_label",
                type: "rect",
                style: {
                    width: FORM_LABEL_WIDTH,
                    height: "100%",
                    lineHeight: FORM_ROW_HEIGHT,
                    textAlign: "center"
                },
                text: "地图名称："
            }, {
                name: "input_area",
                type: "rect",
                style: {
                    width: function width() {
                        return this.parent.getInnerWidth() - FORM_LABEL_WIDTH;
                    },
                    height: "100%"
                },
                children: [{
                    name: "input",
                    type: "input",
                    style: {
                        x: FORM_INPUT_PADDING,
                        y: FORM_INPUT_PADDING,
                        width: function width() {
                            return this.parent.getInnerWidth() - FORM_INPUT_PADDING * 2;
                        },
                        height: function height() {
                            return this.parent.getInnerHeight() - FORM_INPUT_PADDING * 2;
                        },
                        borderWidth: 1,
                        borderColor: "#dfdfdf",
                        borderRadius: 3
                    }
                }]
            }]
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _baseWindowController = __webpack_require__(8);

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

    return NewMapController;
}(_baseWindowController2.default);

exports.default = NewMapController;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseWindowController = function (_window$Monk$Controll) {
    _inherits(BaseWindowController, _window$Monk$Controll);

    function BaseWindowController(component) {
        _classCallCheck(this, BaseWindowController);

        return _possibleConstructorReturn(this, (BaseWindowController.__proto__ || Object.getPrototypeOf(BaseWindowController)).call(this, component));
    }

    _createClass(BaseWindowController, [{
        key: "openWindow",
        value: function openWindow() {
            this.component.parent.active = true;
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
            });
            return this;
        }
    }]);

    return BaseWindowController;
}(window.Monk.Controller);

exports.default = BaseWindowController;

/***/ }),
/* 9 */
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

/***/ })
]);
//# sourceMappingURL=newMapView.chunk.js.map