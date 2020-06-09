/**
 * Device module.
 * @description support browser & server side.
 * @module zaxDevice
 * @see https://github.com/jsonchou/zax-device/tree/master/docs
 * @see https://github.com/faisalman/ua-parser-js
 * @see https://demo.mobiledetect.net/
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isMiniApp = exports.isApp = exports.isBytedanceMiniApp = exports.isBaiduMiniApp = exports.isAlipayMiniApp = exports.isWechatMiniApp = exports.isDouyin = exports.isToutiao = exports.isAlipay = exports.isWechat = exports.isAndroid = exports.isIOS = exports.isServerSide = exports.isClientSide = exports.getAppMapping = exports.setAppMapping = exports.webviewMapping = void 0;
    // 'Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR) NewsArticle/6.3.1 okhttp/3.7.0.2'
    // 'Aweme/2.3.1 (iPhone; iOS 11.4.1; Scale/2.00)'
    exports.webviewMapping = {
        alipay: 'AliApp',
        wechat: 'MicroMessenger',
        toutiao: 'NewsArticle',
        douyin: 'Aweme'
    };
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
        return exports.webviewMapping;
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
     * isIOS(ctx.request.headers['user-agent']);//(iPhone; CPU iPhone OS 13_1 like Mac OS X)
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
     * isAndroid(ctx.request.headers['user-agent']);//(Linux; Android 10)
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
     * isWechat(ctx.request.headers['user-agent']);//MicroMessenger
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
     * isAlipay(ctx.request.headers['user-agent']);//AlipayClient
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
     * isToutiao(ctx.request.headers['user-agent']);//NewsArticle
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
     * isDouyin(ctx.request.headers['user-agent']);//Aweme
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
     * isWechatMiniApp(ctx.request.headers['user-agent']);//MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN miniProgram
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
            return /MicroMessenger/i.test(ua) && /miniProgram/i.test(ua);
        }
        /* istanbul ignore next */
        return !isUndef(typeof wx) && wx !== null && (!isUndef(wx.login) || !isUndef(wx.miniProgram));
    }
    exports.isWechatMiniApp = isWechatMiniApp;
    /**
     * isAlipayMiniApp
     *
     * ```js
     * isAlipayMiniApp(ctx.request.headers['user-agent']);//AlipayClient/10.1.82.9020
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
     * {
     *  	alipay: 'AliApp',
     *  	wechat: 'MicroMessenger',
     *  	tt: 'ToutiaoMicroApp',
     * }
     * isApp('za','YOUR CUSTOM FLAG');// ZhongAnWebView
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
     * isMiniApp('');
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
});
//# sourceMappingURL=index.js.map