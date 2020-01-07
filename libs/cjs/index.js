"use strict";
/**
 * Device module.
 * @description support browser & server side.
 * @module zaxDevice
 * @see https://github.com/jsonchou/zax-device/tree/master/docs
 * @see https://github.com/faisalman/ua-parser-js
 * @see https://demo.mobiledetect.net/
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppList = {
    alipay: 'AliApp',
    wechat: 'MicroMessenger'
};
function extendLiteral(obj, key, val) {
    var _a;
    return __assign(__assign({}, obj), (_a = {}, _a[key] = val, _a));
}
/**
 * setAppMapping
 *
 * ```js
 * setAppMapping('tt','toutiao');
 * //=>
 * {
 *  alipay: 'AliApp',
 *  wechat: 'MicroMessenger',
 *  tt: 'toutiao',
 * }
 * ```
 *
 * @returns { Record<string, string> } result
 */
function setAppMapping(key, regexFlag) {
    exports.AppList[key] = regexFlag;
    return extendLiteral(exports.AppList, key, regexFlag);
}
exports.setAppMapping = setAppMapping;
/**
 * getAppMapping
 *
 * ```js
 * getAppMapping();
 * //=>
 * {
 *  alipay: 'AliApp',
 *  wechat: 'MicroMessenger',
 *  tt: 'toutiao',
 * }
 * ```
 *
 * @returns { Record<string, string> } result
 */
function getAppMapping() {
    return exports.AppList;
}
exports.getAppMapping = getAppMapping;
/**
 * isClientSide
 *
 * ```js
 * isClientSide();
 * //=> true
 * ```
 *
 * @returns { Boolean } result
 */
function isClientSide() {
    return typeof document !== 'undefined';
}
exports.isClientSide = isClientSide;
/**
 * isServerSide
 *
 * ```js
 * isServerSide();
 * //=> false
 * ```
 *
 * @returns { Boolean } result
 */
function isServerSide() {
    return typeof document === 'undefined';
}
exports.isServerSide = isServerSide;
/**
 * isIOS
 *
 * ```js
 * isIOS('Mozilla/5.0 (iPhone; CPU iPhone OS 13_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Mobile/15E148 Safari/604.1');
 * //=> true
 * isIOS();
 * //=> false
 * ```
 * @params ua { String } user agent
 * @returns { Boolean } result
 */
function isIOS(ua) {
    if (typeof document !== 'undefined') {
        ua = navigator.userAgent;
    }
    return ua ? /iPad|iPhone|iPod/.test(ua) : false;
}
exports.isIOS = isIOS;
/**
 * isAndroid
 *
 * ```js
 * isAndroid('Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.61 Mobile Safari/537.36');
 * //=> true
 * isAndroid();
 * //=> false
 * ```
 * @params ua { String } user agent
 * @returns { Boolean } result
 */
function isAndroid(ua) {
    if (typeof document !== 'undefined') {
        ua = navigator.userAgent;
    }
    return ua ? /android/i.test(ua) : false;
}
exports.isAndroid = isAndroid;
/**
 * isWechat
 *
 * ```js
 * isWechat('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 MicroMessenger/6.5.2.501 NetType/WIFI WindowsWechat');
 * //=> true
 * isWechat();
 * //=> false
 * ```
 * @params ua { String } user agent
 * @returns { Boolean } result
 */
function isWechat(ua) {
    return isApp('wechat');
}
exports.isWechat = isWechat;
/**
 * isWechatMiniprogram
 *
 * ```js
 * isWechatMiniprogram('Mozilla/5.0 (Linux; Android 7.1.1; MI 6 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN miniProgram');
 * //=> true
 * isWechatMiniprogram();
 * //=> false
 * ```
 * @params ua { String } user agent
 * @returns { Boolean } result
 */
function isWechatMiniprogram(ua) {
    if (typeof document !== 'undefined') {
        ua = navigator.userAgent;
        /* istanbul ignore next */
        if (!window.wx) {
            console.log('please load wechat jssdk https://res.wx.qq.com/open/js/jweixin-1.6.0.js first');
        }
    }
    return ua ? isWechat(ua) && /miniProgram/i.test(ua) : false;
}
exports.isWechatMiniprogram = isWechatMiniprogram;
/**
 * isAlipay
 *
 * ```js
 * isAlipay('Mozilla/5.0 (Linux; U; Android 9; zh-CN; HLK-AL00 Build/HONORHLK-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.21.0.73 Mobile Safari/537.36 UCBS/3.21.0.73_191212221923 NebulaSDK/1.8.100112 Nebula AlipayDefined(nt:WIFI,ws:360|0|3.0) AliApp(AP/10.1.82.9020) AlipayClient/10.1.82.9020 Language/zh-Hans useStatusBar/true isConcaveScreen/false Region/CN');
 * //=> true
 * isAlipay();
 * //=> false
 * ```
 * @params ua { String } user agent
 * @returns { Boolean } result
 */
function isAlipay(ua) {
    return isApp('alipay');
}
exports.isAlipay = isAlipay;
/**
 * isAlipayMiniprogram
 *
 * ```js
 * isAlipayMiniprogram('Mozilla/5.0 (Linux; U; Android 9; zh-CN; HLK-AL00 Build/HONORHLK-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.21.0.73 Mobile Safari/537.36 UCBS/3.21.0.73_191212221923 NebulaSDK/1.8.100112 Nebula AlipayDefined(nt:WIFI,ws:360|0|3.0) AliApp(AP/10.1.82.9020) AlipayClient/10.1.82.9020 Language/zh-Hans useStatusBar/true isConcaveScreen/false Region/CN');
 * //=> true
 * isAlipayMiniprogram();
 * //=> false
 * ```
 * @params ua { String } user agent
 * @returns { Boolean } result
 */
function isAlipayMiniprogram(ua) {
    if (typeof document !== 'undefined') {
        ua = navigator.userAgent;
        /* istanbul ignore next */
        if (!window.AlipayJSBridge) {
            console.log('please load alipay jssdk https://appx/web-view.min.js first');
        }
    }
    return ua ? isAlipay() && /AlipayClient/i.test(ua) : false;
}
exports.isAlipayMiniprogram = isAlipayMiniprogram;
/**
 * isApp
 *
 * ```js
 * isApp('za','Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36ZhongAnWebView');
 * //=> true
 * isApp('alipay');
 * //=> true
 * ```
 * @params ua { String } user agent
 * @returns { Boolean } result
 */
function isApp(appFlag, ua) {
    if (typeof document !== 'undefined') {
        ua = navigator.userAgent;
    }
    if (ua) {
        var rex = exports.AppList && exports.AppList[appFlag];
        /* istanbul ignore next */
        if (!rex) {
            return false;
        }
        return new RegExp(rex, 'i').test(ua);
    }
    return false;
}
exports.isApp = isApp;
exports.default = {
    setAppMapping: setAppMapping,
    getAppMapping: getAppMapping,
    isClientSide: isClientSide,
    isServerSide: isServerSide,
    isApp: isApp,
    isIOS: isIOS,
    isAndroid: isAndroid,
    isWechat: isWechat,
    isAlipay: isAlipay,
    isWechatMiniprogram: isWechatMiniprogram,
    isAlipayMiniprogram: isAlipayMiniprogram
};
//# sourceMappingURL=index.js.map