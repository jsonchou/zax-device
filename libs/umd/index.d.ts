/**
 * Device module.
 * @description support browser & server side.
 * @module zaxDevice
 * @see https://github.com/jsonchou/zax-device/tree/master/docs
 * @see https://github.com/faisalman/ua-parser-js
 * @see https://demo.mobiledetect.net/
 */
export declare const AppList: {
    za: string;
    alipay: string;
    wechat: string;
};
export declare type AppListDescriptor = keyof typeof AppList | 'test';
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
export declare function isClientSide(): boolean;
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
export declare function isServerSide(): boolean;
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
export declare function isIOS(ua?: string): boolean;
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
export declare function isAndroid(ua?: string): boolean;
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
export declare function isWechat(ua?: string): boolean;
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
export declare function isWechatMiniprogram(ua?: string): boolean;
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
export declare function isAlipay(ua?: string): boolean;
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
export declare function isAlipayMiniprogram(ua?: string): boolean;
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
export declare function isApp(appFlag: AppListDescriptor, ua?: string): boolean;
declare const _default: {
    isClientSide: typeof isClientSide;
    isServerSide: typeof isServerSide;
    isApp: typeof isApp;
    isIOS: typeof isIOS;
    isAndroid: typeof isAndroid;
    isWechat: typeof isWechat;
    isAlipay: typeof isAlipay;
    isWechatMiniprogram: typeof isWechatMiniprogram;
    isAlipayMiniprogram: typeof isAlipayMiniprogram;
};
export default _default;
