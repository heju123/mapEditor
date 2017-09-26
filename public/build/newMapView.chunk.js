webpackJsonp([0],{

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newMapController = __webpack_require__(7);

var _newMapController2 = _interopRequireDefault(_newMapController);

var _window = __webpack_require__(8);

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentStyle = {
    type: "rect",
    style: {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
    },
    text: "123"
};

exports.default = (0, _window2.default)(_newMapController2.default, {
    title: "新建地图",
    x: 10,
    y: 10,
    width: 400,
    height: 300,
    contentStyle: contentStyle
});

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var newMapController = function (_window$Monk$Controll) {
    _inherits(newMapController, _window$Monk$Controll);

    function newMapController(panel) {
        _classCallCheck(this, newMapController);

        var _this = _possibleConstructorReturn(this, (newMapController.__proto__ || Object.getPrototypeOf(newMapController)).call(this, panel));

        _this.registerEvent("$onViewLoaded", function () {});
        return _this;
    }

    return newMapController;
}(window.Monk.Controller);

exports.default = newMapController;

/***/ }),

/***/ 8:
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
        controller: controller,
        type: "panel",
        style: {
            x: opts.x,
            y: opts.y,
            width: opts.width,
            height: opts.height,
            backgroundColor: "#dfdfdf",
            borderColor: "#3D3D3D",
            borderWidth: 1,
            borderRadius: 5,
            zIndex: 9999,
            alpha: 0.1
        },
        children: [getHeader(opts.title), getContent(opts.contentStyle)]
    };
};

/***/ })

});
//# sourceMappingURL=newMapView.chunk.js.map