"use strict";function _defineProperty(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},i=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),i.forEach(function(n){_defineProperty(e,n,o[n])})}return e}function func(e){let n={_ua:e,client:void 0!==typeof document,server:void 0===typeof document,linux:!0,windows:!0,weixin:"micromessenger"==e.match(/micromessenger/i),app:"zhonganwebview"==e.match(/zhonganwebview/i),ipad:"ipad"==e.match(/ipad/i),iphone:"iphone os"==e.match(/iphone os/i),android:"android"==e.match(/android/i),wc:"windows ce"==e.match(/windows ce/i),wm:"windows mobile"==e.match(/windows mobile/i),wp:"windows phone"==e.match(/windows phone/i),webos:"webos"==e.match(/webos/i),blackberry:"blackberry"==e.match(/blackberry/i),uc:"ucweb"==e.match(/ucweb/i)||"ucbrowser"==e.match(/ucbrowser/i)};return _objectSpread({},n,{pc:!(n.ipad||n.iphone||n.android||n.wc||n.wm||n.wp||n.webos||n.blackberry||n.uc||n.weixin)})}function zaxDevice(){return"undefined"!=typeof document?func(navigator.userAgent.toLowerCase()):func(this.request.header["user-agent"].toLowerCase())}module.exports=zaxDevice;
