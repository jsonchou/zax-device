/**
 * Device module.
 * @description support browser & server side.
 * @module zaxDevice
 * @see https://github.com/jsonchou/zax-device/tree/master/docs
 * @see https://github.com/faisalman/ua-parser-js
 * @see https://demo.mobiledetect.net/
 */
// 'Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR) NewsArticle/6.3.1 okhttp/3.7.0.2'
// 'Aweme/2.3.1 (iPhone; iOS 11.4.1; Scale/2.00)'
export const webviewMapping = {
    alipay: 'AliApp',
    wechat: 'MicroMessenger',
    toutiao: 'NewsArticle',
    douyin: 'Aweme'
};
function extendLiteral(obj, key, val) {
    return Object.assign(Object.assign({}, obj), { [key]: val });
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
export function setAppMapping(key, regexFlag) {
    webviewMapping[key] = regexFlag;
    return extendLiteral(webviewMapping, key, regexFlag);
}
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
export function getAppMapping() {
    return webviewMapping;
}
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
export function isClientSide() {
    return !isUndef(typeof window) && !!window['onload'];
}
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
export function isServerSide() {
    return !isUndef(typeof process) && !!(process.versions && process.versions.node);
}
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
export function isIOS(ua = '') {
    if (isClientSide()) {
        ua = navigator.userAgent;
    }
    return /iPad|iPhone|iPod/i.test(ua);
}
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
export function isAndroid(ua = '') {
    if (isClientSide()) {
        ua = navigator.userAgent;
    }
    return /android/i.test(ua);
}
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
export function isWechat(ua = '') {
    return isApp('wechat', ua);
}
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
export function isAlipay(ua = '') {
    return isApp('alipay', ua);
}
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
export function isToutiao(ua = '') {
    return isApp('toutiao', ua);
}
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
export function isDouyin(ua = '') {
    return isApp('douyin', ua);
}
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
export function isWechatMiniApp(ua = '') {
    if (isClientSide()) {
        ua = navigator.userAgent;
    }
    if (ua) {
        return /MicroMessenger/i.test(ua);
    }
    /* istanbul ignore next */
    return !isUndef(typeof wx) && wx !== null && (!isUndef(wx.login) || !isUndef(wx.miniProgram));
}
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
export function isAlipayMiniApp(ua = '') {
    if (isClientSide()) {
        ua = navigator.userAgent;
    }
    if (ua) {
        return /AlipayClient/i.test(ua);
    }
    /* istanbul ignore next */
    return !isUndef(typeof my) && my !== null && !isUndef(my.alert);
}
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
export function isBaiduMiniApp(ua = '') {
    if (isClientSide()) {
        ua = navigator.userAgent;
    }
    if (ua) {
        return /swan/i.test(ua);
    }
    /* istanbul ignore next */
    return !isUndef(typeof swan) && swan !== null;
}
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
export function isBytedanceMiniApp(ua = '') {
    if (isClientSide()) {
        ua = navigator.userAgent;
    }
    if (ua) {
        return /ToutiaoMicroApp/i.test(ua);
    }
    /* istanbul ignore next */
    return !isUndef(typeof tt) && tt !== null;
}
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
export function isApp(appFlag, ua = '') {
    if (isClientSide()) {
        ua = navigator.userAgent;
    }
    if (ua) {
        let rex = webviewMapping && webviewMapping[appFlag];
        /* istanbul ignore next */
        if (!rex) {
            return false;
        }
        return new RegExp(rex, 'i').test(ua);
    }
    return false;
}
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
export function isMiniApp(ua = '') {
    return isWechatMiniApp(ua) || isAlipayMiniApp(ua) || isBytedanceMiniApp(ua) || isBaiduMiniApp(ua);
}
export default {
    setAppMapping,
    getAppMapping,
    isClientSide,
    isServerSide,
    isApp,
    isMiniApp,
    isIOS,
    isAndroid,
    isWechat,
    isAlipay,
    isToutiao,
    isDouyin,
    isWechatMiniApp,
    isAlipayMiniApp,
    isBytedanceMiniApp,
    isBaiduMiniApp
};
//# sourceMappingURL=index.js.map