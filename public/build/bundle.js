!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n=window.webpackJsonp;window.webpackJsonp=function(t,o,i){for(var a,u,l=0,c=[];l<t.length;l++)u=t[l],r[u]&&c.push(r[u][0]),r[u]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(n&&n(t,o,i);c.length;)c.shift()()};var o={},r={1:0};t.e=function(e){function n(){u.onerror=u.onload=null,clearTimeout(l);var t=r[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),r[e]=void 0)}var o=r[e];if(0===o)return new Promise(function(e){e()});if(o)return o[2];var i=new Promise(function(t,n){o=r[e]=[t,n]});o[2]=i;var a=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.timeout=12e4,t.nc&&u.setAttribute("nonce",t.nc),u.src=t.p+""+({0:"newMapView"}[e]||e)+".chunk.js";var l=setTimeout(n,12e4);return u.onerror=u.onload=n,a.appendChild(u),i},t.m=e,t.c=o,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t.oe=function(e){throw console.error(e),e},t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.navButtonStyle={style:{autoWidth:!0,height:"100%",backgroundColor:"#ddd",hover:{backgroundColor:"#f1f1f1"},active:{backgroundColor:"#FF8501",fontColor:"#ffffff"}},animation:{backgroundColor:{duration:"300ms",easeType:"Linear",easing:"ease"}}},t.navDivider={style:{width:"100%",height:1,backgroundColor:"#ABABAB"}},t.navItemStyle={style:{width:"100%",height:35,backgroundColor:"#DCDCDC",hover:{backgroundColor:"#E9E9E9"},active:{backgroundColor:"#FF8501",fontColor:"#ffffff"}},animation:{backgroundColor:{duration:"300ms",easeType:"Linear",easing:"ease"}}}},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(2),i=function(e){return e&&e.__esModule?e:{default:e}}(r),a=function e(){o(this,e);var t=document.getElementById("mainBox");t.style.width=window.innerWidth+"px",t.style.height=window.innerHeight+"px",new window.Monk.Main("mainBox").run(i.default)};new a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={id:"mainRoute",type:"route",routes:{main:{view:r.default,default:!0}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=o(r),a=n(5),u=o(a),l=n(0);t.default={id:"mainView",controller:i.default,type:"rect",style:{x:0,y:0,width:"100%",height:"100%",backgroundColor:"#ffffff"},children:[{type:"rect",style:{x:0,y:0,width:"100%",height:30,backgroundColor:"#aeaeae"},children:[{type:"rect",style:{x:10,y:0,autoWidth:!0,height:"100%",layout:{type:"linearLayout",orientation:"horizontal"}},children:[{type:"button",style:l.navButtonStyle.style,text:"文件",animation:l.navButtonStyle.animation,events:{click:"showFileView"}}]}]},(0,u.default)(30),{id:"edit_area",type:"rect",style:{x:0,y:30,width:"100%",height:function(){return this.parent.getHeight()-30},backgroundColor:"#f4f4f4"}},function(e){return new Promise(function(t,o){n.e(0).then(function(r){e(n(6).default,t,o)}.bind(null,n)).catch(n.oe)})}]}},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.registerEvent("$onViewLoaded",function(){n.fileView=n.viewState.getComponentById("fileView"),n.viewState.getComponentById("mainView").registerEvent("click",n.onClickRoot.bind(n))}),n}return i(t,e),a(t,[{key:"showFileView",value:function(e){this.fileView.active=!this.fileView.active,e.stopPropagation()}},{key:"onClickRoot",value:function(){this.fileView.active=!1}},{key:"openNewMapDlg",value:function(e){this.viewState.getComponentById("new_map_window").controller.openWindow().center()}}]),t}(window.Monk.Controller);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e){return{id:"fileView",type:"rect",style:{x:10,y:e,width:100,autoHeight:!0,backgroundColor:"#DCDCDC",borderWidth:1,borderColor:"#ABABAB",layout:{type:"linearLayout",orientation:"vertical"},zIndex:2},active:!1,children:[{type:"button",style:o.navItemStyle.style,text:"新建地图",animation:o.navItemStyle.animation,events:{click:"openNewMapDlg"}},{type:"rect",style:o.navDivider.style},{type:"button",style:o.navItemStyle.style,text:"加载地图",animation:o.navItemStyle.animation}]}}}]);