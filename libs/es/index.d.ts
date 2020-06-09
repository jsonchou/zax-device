/**
 * Device module.
 * @description support browser & server side.
 * @module zaxDevice
 * @see https://github.com/jsonchou/zax-device/tree/master/docs
 * @see https://github.com/faisalman/ua-parser-js
 * @see https://demo.mobiledetect.net/
 */
export declare let webviewMapping: {
    alipay: string;
    wechat: string;
    toutiao: string;
    douyin: string;
};
export declare type AppListDescriptor = keyof typeof webviewMapping;
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
export declare function setAppMapping(key: string, regexFlag: string): Record<string, string>;
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
export declare function getAppMapping(): Record<string, string>;
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
export declare function isIOS(ua?: string): boolean;
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
export declare function isAndroid(ua?: string): boolean;
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
export declare function isWechat(ua?: string): boolean;
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
export declare function isAlipay(ua?: string): boolean;
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
export declare function isToutiao(ua?: string): boolean;
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
export declare function isDouyin(ua?: string): boolean;
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
export declare function isWechatMiniApp(ua?: string): boolean;
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
export declare function isAlipayMiniApp(ua?: string): boolean;
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
export declare function isBaiduMiniApp(ua?: string): boolean;
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
export declare function isBytedanceMiniApp(ua?: string): boolean;
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
export declare function isApp(appFlag: AppListDescriptor | string, ua?: string): boolean;
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
export declare function isMiniApp(ua?: string): boolean;
declare const _default: {
    setAppMapping: typeof setAppMapping;
    getAppMapping: typeof getAppMapping;
    isClientSide: typeof isClientSide;
    isServerSide: typeof isServerSide;
    isApp: typeof isApp;
    isMiniApp: typeof isMiniApp;
    isIOS: typeof isIOS;
    isAndroid: typeof isAndroid;
    isWechat: typeof isWechat;
    isAlipay: typeof isAlipay;
    isToutiao: typeof isToutiao;
    isDouyin: typeof isDouyin;
    isWechatMiniApp: typeof isWechatMiniApp;
    isAlipayMiniApp: typeof isAlipayMiniApp;
    isBytedanceMiniApp: typeof isBytedanceMiniApp;
    isBaiduMiniApp: typeof isBaiduMiniApp;
};
export default _default;
