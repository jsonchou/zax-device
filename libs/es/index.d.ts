/**
 * Device module.
 * @description support browser & server side.
 * @module zaxDevice
 * @namespace ZaxDevice
 * @see https://github.com/jsonchou/zax-device/tree/master/docs
 * @see https://github.com/faisalman/ua-parser-js
 * @see https://demo.mobiledetect.net/
 */
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
     *     ua: '',
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
    isIOS(): boolean;
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
    isAndroid(): boolean;
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
    isWechat(): boolean;
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
    isAlipay(): boolean;
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
    isToutiao(): boolean;
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
    isDouyin(): boolean;
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
    isWechatMiniApp(): boolean;
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
    isAlipayMiniApp(): boolean;
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
    isBaiduMiniApp(): boolean;
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
    isBytedanceMiniApp(): boolean;
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
    isApp(appFlag?: string): boolean;
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
export declare type ZaxDeviceOptions = {
    ua?: string;
    appMapping?: Record<string, string>;
};
