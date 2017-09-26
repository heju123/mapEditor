webpackJsonp([1],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    header: {
        style: function style(headHeight) {
            return {
                type: "rect",
                style: {
                    x: 0,
                    y: 0,
                    width: "100%",
                    height: headHeight,
                    backgroundColor: "#3D3D3D"
                }
            };
        }
    },
    content: {
        style: function style(headHeight, content) {
            return {
                type: "rect",
                style: {
                    x: 0,
                    y: headHeight,
                    width: "100%",
                    height: function height() {
                        return this.parent.getInnerHeight() - headHeight;
                    },
                    backgroundColor: "#ffffff"
                },
                children: [content]
            };
        }
    }
};

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newMapController = __webpack_require__(8);

var _newMapController2 = _interopRequireDefault(_newMapController);

var _window = __webpack_require__(10);

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HEAD_HEIGHT = 45;

var content = {
    type: "rect",
    style: {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
    },
    text: "123"
};

exports.default = {
    controller: _newMapController2.default,
    type: "panel",
    style: {
        x: 10,
        y: 10,
        width: 400,
        height: 300,
        backgroundColor: "#dfdfdf",
        borderColor: "#3D3D3D",
        borderWidth: 1,
        borderRadius: 5,
        zIndex: 9999
    },
    children: [_window2.default.header.style(HEAD_HEIGHT), _window2.default.content.style(HEAD_HEIGHT, content)]
};

/***/ }),

/***/ 8:
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

/***/ })

});
//# sourceMappingURL=newMapView.chunk.js.map