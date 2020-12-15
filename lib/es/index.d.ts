export declare type ZaxDeviceOptions = {
    ua?: string;
    appMapping?: Record<string, string>;
};
export default class ZaxDevice {
    ua: string;
    appMapping: Record<string, string>;
    constructor(options?: ZaxDeviceOptions);
    /**
     * setAppMapping
     *
     * ```js
     * setAppMapping('dax','jsonchou');
     * //=>
     * {
     * 	alipay: 'AliApp',
     * 	wechat: 'MicroMessenger',
     * 	toutiao: 'NewsArticle',
     * 	douyin: 'Aweme',
     * 	dax: 'jsonchou'
    }
     * ```
     * @params key { String } short cut of user agent
     * @params regexFlag { String } core part of user agent
     * @returns { ZaxDeviceOptions } result
     */
    setAppMapping(key: string, regexFlag: string): ZaxDeviceOptions;
    /**
     * setUA
     *
     * ```js
     * setUA('Aweme/2.3.1 (iPhone; iOS 11.4.1; Scale/2.00)');
     * //=>
     * {
     *     ua: 'Aweme/2.3.1 (iPhone; iOS 11.4.1; Scale/2.00)',
     *     appMapping: {
     *       alipay: 'AliApp',
     *       wechat: 'MicroMessenger',
     *       toutiao: 'NewsArticle',
     *       douyin: 'Aweme'
     *     }
     *   }
     * ```
     * @params key { String } short cut of user agent
     * @returns { ZaxDeviceOptions } options
     */
    setUA(ua: string): ZaxDeviceOptions;
    get options(): ZaxDeviceOptions;
    set options(options: ZaxDeviceOptions);
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
    isClientSide(): boolean;
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
    isServerSide(): boolean;
    /**
     * isIOS
     *
     * not support miniprogram
     *
     * ```js
     * isIOS();
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    isIOS(ua?: string): boolean;
    /**
     * isAndroid
     *
     * not support miniprogram
     *
     * ```js
     * isAndroid();
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    isAndroid(ua?: string): boolean;
    /**
     * isWechat
     *
     * ```js
     * isWechat();//MicroMessenger
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    isWechat(ua?: string): boolean;
    /**
     * isAlipay
     *
     * ```js
     * isAlipay();//AlipayClient
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    isAlipay(ua?: string): boolean;
    /**
     * isToutiao
     *
     * ```js
     * isToutiao();//NewsArticle
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    isToutiao(ua?: string): boolean;
    /**
     * isDouyin
     *
     * ```js
     * isDouyin();//Aweme
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    isDouyin(ua?: string): boolean;
    /**
     * isWechatMiniApp
     *
     * ```js
     * isWechatMiniApp();//MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN miniProgram
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    isWechatMiniApp(ua?: string): boolean;
    /**
     * isAlipayMiniApp
     *
     * ```js
     * isAlipayMiniApp();//AlipayClient/10.1.82.9020
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    isAlipayMiniApp(ua?: string): boolean;
    /**
     * isBaiduMiniApp
     *
     * ```js
     * isBaiduMiniApp('');
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    isBaiduMiniApp(ua?: string): boolean;
    /**
     * isBytedanceMiniApp
     *
     * ```js
     * isBytedanceMiniApp('');
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    isBytedanceMiniApp(ua?: string): boolean;
    /**
     * isApp
     *
     * ```js
     * isApp('za','YOUR CUSTOM FLAG');// ZhongAnWebView
     * //=>
     * {
     *  	alipay: 'AliApp',
     *  	wechat: 'MicroMessenger',
     *  	tt: 'ToutiaoMicroApp',
     * }
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    isApp(appFlag?: string, ua?: string): boolean;
    /**
     * isMiniApp
     *
     * ```js
     * isMiniApp('');
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    isMiniApp(): boolean;
}
export declare const device: ZaxDevice;
export declare const isClientSide: () => boolean;
export declare const isServerSide: () => boolean;
export declare const isApp: (appFlag?: string | undefined, ua?: string | undefined) => boolean;
export declare const isIOS: (ua?: string | undefined) => boolean;
export declare const isAndroid: (ua?: string | undefined) => boolean;
export declare const isWechat: (ua?: string | undefined) => boolean;
export declare const isAlipay: (ua?: string | undefined) => boolean;
export declare const isToutiao: (ua?: string | undefined) => boolean;
export declare const isDouyin: (ua?: string | undefined) => boolean;
export declare const isMiniApp: () => boolean;
export declare const isBaiduMiniApp: (ua?: string | undefined) => boolean;
export declare const isBytedanceMiniApp: (ua?: string | undefined) => boolean;
export declare const isWechatMiniApp: (ua?: string | undefined) => boolean;
export declare const isAlipayMiniApp: (ua?: string | undefined) => boolean;
