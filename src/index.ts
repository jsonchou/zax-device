/**
 * Device module.
 * @description support browser & server side.
 * @module zaxDevice
 * @see https://github.com/jsonchou/zax-device/tree/master/docs
 * @see https://github.com/faisalman/ua-parser-js
 * @see https://demo.mobiledetect.net/
 */

type Nothing = {} // jsdoc2md bugs, do not remove this line

// 'Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR) NewsArticle/6.3.1 okhttp/3.7.0.2'
// 'Aweme/2.3.1 (iPhone; iOS 11.4.1; Scale/2.00)'

export const webviewMapping = {
	alipay: 'AliApp',
	wechat: 'MicroMessenger',
	toutiao: 'NewsArticle',
	douyin: 'Aweme'
}

export type AppListDescriptor = keyof typeof webviewMapping 

function extendLiteral<T>(obj: T, key: string, val: string): T & Record<string, string> {
	return {
		...obj,
		[key]: val
	}
}

function isUndef(tp: any): boolean {
	return tp === 'undefined'
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
export function setAppMapping(key: string, regexFlag: string): Record<string, string> {
	webviewMapping[key] = regexFlag
	return extendLiteral(webviewMapping, key, regexFlag)
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
export function getAppMapping(): Record<string, string> {
	return webviewMapping
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

export function isClientSide(): boolean {
	return !isUndef(typeof window) && !isUndef(typeof document)
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
export function isServerSide(): boolean {
	return !isUndef(typeof process) && !!(process.versions && process.versions.node)
}

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
export function isIOS(ua: string = ''): boolean {
	if (isClientSide()) {
		ua = navigator.userAgent
	}
	return /iPad|iPhone|iPod/i.test(ua)
}

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
export function isAndroid(ua: string = ''): boolean {
	if (isClientSide()) {
		ua = navigator.userAgent
	}
	return /android/i.test(ua)
}

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
export function isWechat(ua: string = ''): boolean {
	return isApp('wechat', ua)
}

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
export function isAlipay(ua: string = ''): boolean {
	return isApp('alipay', ua)
}

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
export function isToutiao(ua: string = ''): boolean {
	return isApp('toutiao', ua)
}

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
export function isDouyin(ua: string = ''): boolean {
	return isApp('douyin', ua)
}

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
export function isWechatMiniApp(ua: string = ''): boolean {
	if (isClientSide()) {
		ua = navigator.userAgent
	}
	if (ua) {
		return /MicroMessenger/i.test(ua) && /miniProgram/i.test(ua)
	}
	/* istanbul ignore next */
	return !isUndef(typeof wx) && wx !== null && (!isUndef(wx.login) || !isUndef(wx.miniProgram))
}

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
export function isAlipayMiniApp(ua: string = ''): boolean {
	if (isClientSide()) {
		ua = navigator.userAgent
	}
	if (ua) {
		return /AlipayClient/i.test(ua)
	}
	/* istanbul ignore next */
	return !isUndef(typeof my) && my !== null && !isUndef(my.alert)
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
export function isBaiduMiniApp(ua: string = ''): boolean {
	if (isClientSide()) {
		ua = navigator.userAgent
	}
	if (ua) {
		return /swan/i.test(ua)
	}
	/* istanbul ignore next */
	return !isUndef(typeof swan) && swan !== null
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
export function isBytedanceMiniApp(ua: string = ''): boolean {
	if (isClientSide()) {
		ua = navigator.userAgent
	}
	if (ua) {
		return /ToutiaoMicroApp/i.test(ua)
	}
	/* istanbul ignore next */
	return !isUndef(typeof tt) && tt !== null
}

/**
 * isApp
 *
 * ```js
 * isApp('za','YOUR CUSTOM FLAG');// ZhongAnWebView
 * //=> true
 * isApp('alipay');
 * //=> true
 * ```
 * @params ua { String } user agent
 * @returns { Boolean } result
 */
export function isApp(appFlag: AppListDescriptor, ua: string = ''): boolean {
	if (isClientSide()) {
		ua = navigator.userAgent
	}
	if (ua) {
		let rex = webviewMapping && webviewMapping[appFlag]
		/* istanbul ignore next */
		if (!rex) {
			return false
		}
		return new RegExp(rex, 'i').test(ua)
	}
	return false
}

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
export function isMiniApp(ua: string = ''): boolean {
	return isWechatMiniApp(ua) || isAlipayMiniApp(ua) || isBytedanceMiniApp(ua) || isBaiduMiniApp(ua)
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
}
