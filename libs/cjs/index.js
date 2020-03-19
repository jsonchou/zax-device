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
// 'Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR) NewsArticle/6.3.1 okhttp/3.7.0.2'
// 'Aweme/2.3.1 (iPhone; iOS 11.4.1; Scale/2.00)'
exports.webviewMapping = {
    alipay: 'AliApp',
    wechat: 'MicroMessenger',
    toutiao: 'NewsArticle',
    douyin: 'Aweme'
};
function extendLiteral(obj, key, val) {
    var _a;
    return __assign(__assign({}, obj), (_a = {}, _a[key] = val, _a));
}
function isUndef(tp) {
    return tp === 'undefined';
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
 *  tt: 'ToutiaoMicroApp',
 * }
 * ```
 * @params key { String } short cut of user agent
 * @params regexFlag { String } core part of user agent
 * @returns { Record<string, string> } result
 */
function setAppMapping(key, regexFlag) {
    exports.webviewMapping[key] = regexFlag;
    return extendLiteral(exports.webviewMapping, key, regexFlag);
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
 *  tt: 'ToutiaoMicro',
 * }
 * ```
 *
 * @returns { Record<string, string> } result
 */
function getAppMapping() {
    return exports.webviewMapping;
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
    return !isUndef(typeof window) && !isUndef(typeof document);
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
    return !isUndef(typeof process) && !!(process.versions && process.versions.node);
}
exports.isServerSide = isServerSide;
/**
 * isIOS
 *
 * not support miniprogram
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
    if (ua === void 0) { ua = ''; }
    if (isClientSide()) {
        ua = navigator.userAgent;
    }
    return /iPad|iPhone|iPod/i.test(ua);
}
exports.isIOS = isIOS;
/**
 * isAndroid
 *
 * not support miniprogram
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
    if (ua === void 0) { ua = ''; }
    if (isClientSide()) {
        ua = navigator.userAgent;
    }
    return /android/i.test(ua);
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
    if (ua === void 0) { ua = ''; }
    return isApp('wechat', ua);
}
exports.isWechat = isWechat;
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
    if (ua === void 0) { ua = ''; }
    return isApp('alipay', ua);
}
exports.isAlipay = isAlipay;
/**
 * isToutiao
 *
 * ```js
 * isToutiao('Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR) NewsArticle/6.3.1 okhttp/3.7.0.2');
 * //=> true
 * isToutiao();
 * //=> false
 * ```
 * @params ua { String } user agent
 * @returns { Boolean } result
 */
function isToutiao(ua) {
    if (ua === void 0) { ua = ''; }
    return isApp('toutiao', ua);
}
exports.isToutiao = isToutiao;
/**
 * isDouyin
 *
 * ```js
 * isDouyin('Aweme/2.3.1 (iPhone; iOS 11.4.1; Scale/2.00)');
 * //=> true
 * isDouyin();
 * //=> false
 * ```
 * @params ua { String } user agent
 * @returns { Boolean } result
 */
function isDouyin(ua) {
    if (ua === void 0) { ua = ''; }
    return isApp('douyin', ua);
}
exports.isDouyin = isDouyin;
/**
 * isWechatMiniApp
 *
 * ```js
 * isWechatMiniApp('Mozilla/5.0 (Linux; Android 7.1.1; MI 6 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN miniProgram');
 * //=> true
 * isWechatMiniApp();
 * //=> false
 * ```
 * @params ua { String } user agent
 * @returns { Boolean } result
 */
function isWechatMiniApp(ua) {
    if (ua === void 0) { ua = ''; }
    if (isClientSide()) {
        ua = navigator.userAgent;
    }
    if (ua) {
        return /MicroMessenger/i.test(ua);
    }
    /* istanbul ignore next */
    return !isUndef(typeof wx) && wx !== null && (!isUndef(wx.login) || !isUndef(wx.miniProgram));
}
exports.isWechatMiniApp = isWechatMiniApp;
/**
 * isAlipayMiniApp
 *
 * ```js
 * isAlipayMiniApp('Mozilla/5.0 (Linux; U; Android 9; zh-CN; HLK-AL00 Build/HONORHLK-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.21.0.73 Mobile Safari/537.36 UCBS/3.21.0.73_191212221923 NebulaSDK/1.8.100112 Nebula AlipayDefined(nt:WIFI,ws:360|0|3.0) AliApp(AP/10.1.82.9020) AlipayClient/10.1.82.9020 Language/zh-Hans useStatusBar/true isConcaveScreen/false Region/CN');
 * //=> true
 * isAlipayMiniApp();
 * //=> false
 * ```
 * @params ua { String } user agent
 * @returns { Boolean } result
 */
function isAlipayMiniApp(ua) {
    if (ua === void 0) { ua = ''; }
    if (isClientSide()) {
        ua = navigator.userAgent;
    }
    if (ua) {
        return /AlipayClient/i.test(ua);
    }
    /* istanbul ignore next */
    return !isUndef(typeof my) && my !== null && !isUndef(my.alert);
}
exports.isAlipayMiniApp = isAlipayMiniApp;
/**
 * isBaiduMiniApp
 *
 * ```js
 * isBaiduMiniApp('');
 * //=> true
 * isBaiduMiniApp();
 * //=> false
 * ```
 * @params ua { String } user agent
 * @returns { Boolean } result
 */
function isBaiduMiniApp(ua) {
    if (ua === void 0) { ua = ''; }
    if (isClientSide()) {
        ua = navigator.userAgent;
    }
    if (ua) {
        return /swan/i.test(ua);
    }
    /* istanbul ignore next */
    return !isUndef(typeof swan) && swan !== null;
}
exports.isBaiduMiniApp = isBaiduMiniApp;
/**
 * isBytedanceMiniApp
 *
 * ```js
 * isBytedanceMiniApp('');
 * //=> true
 * isBytedanceMiniApp();
 * //=> false
 * ```
 * @params ua { String } user agent
 * @returns { Boolean } result
 */
function isBytedanceMiniApp(ua) {
    if (ua === void 0) { ua = ''; }
    if (isClientSide()) {
        ua = navigator.userAgent;
    }
    if (ua) {
        return /ToutiaoMicroApp/i.test(ua);
    }
    /* istanbul ignore next */
    return !isUndef(typeof tt) && tt !== null;
}
exports.isBytedanceMiniApp = isBytedanceMiniApp;
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
    if (ua === void 0) { ua = ''; }
    if (isClientSide()) {
        ua = navigator.userAgent;
    }
    if (ua) {
        var rex = exports.webviewMapping && exports.webviewMapping[appFlag];
        /* istanbul ignore next */
        if (!rex) {
            return false;
        }
        return new RegExp(rex, 'i').test(ua);
    }
    return false;
}
exports.isApp = isApp;
/**
 * isMiniApp
 *
 * ```js
 * isMiniApp('za','Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36ZhongAnWebView');
 * //=> true
 * isMiniApp('alipay');
 * //=> true
 * ```
 * @params ua { String } user agent
 * @returns { Boolean } result
 */
function isMiniApp(ua) {
    if (ua === void 0) { ua = ''; }
    return isWechatMiniApp(ua) || isAlipayMiniApp(ua) || isBytedanceMiniApp(ua) || isBaiduMiniApp(ua);
}
exports.isMiniApp = isMiniApp;
exports.default = {
    setAppMapping: setAppMapping,
    getAppMapping: getAppMapping,
    isClientSide: isClientSide,
    isServerSide: isServerSide,
    isApp: isApp,
    isMiniApp: isMiniApp,
    isIOS: isIOS,
    isAndroid: isAndroid,
    isWechat: isWechat,
    isAlipay: isAlipay,
    isToutiao: isToutiao,
    isDouyin: isDouyin,
    isWechatMiniApp: isWechatMiniApp,
    isAlipayMiniApp: isAlipayMiniApp,
    isBytedanceMiniApp: isBytedanceMiniApp,
    isBaiduMiniApp: isBaiduMiniApp
};
//# sourceMappingURL=index.js.map