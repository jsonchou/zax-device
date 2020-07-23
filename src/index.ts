

type Nothing = {} // jsdoc2md bugs, do not remove this line

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
	ua: string = ''
	appMapping: Record<string, string> = {
		alipay: 'AliApp',
		wechat: 'MicroMessenger',
		toutiao: 'NewsArticle',
		douyin: 'Aweme'
	}
	constructor(options?: ZaxDeviceOptions) {
		if (options) {
			this.options = options
		}
		this.isClientSide = this.isClientSide.bind(this)
		this.isApp = this.isApp.bind(this)
		this.isMiniApp = this.isMiniApp.bind(this)
		this.isBaiduMiniApp = this.isBaiduMiniApp.bind(this)
		this.isBytedanceMiniApp = this.isBytedanceMiniApp.bind(this)
		this.isWechatMiniApp = this.isWechatMiniApp.bind(this)
		this.isAlipayMiniApp = this.isAlipayMiniApp.bind(this)
	}

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
	setAppMapping(key: string, regexFlag: string): ZaxDeviceOptions {
		let { appMapping } = this
		appMapping[key] = regexFlag
		return this.options
	}
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
	setUA(ua: string): ZaxDeviceOptions {
		this.ua = ua
		return this.options
	}

	get options(): ZaxDeviceOptions {
		let options = {
			ua: this.ua,
			appMapping: this.appMapping
		}
		return options
	}

	/* istanbul ignore next */
	set options(options: ZaxDeviceOptions) {
		let opt = { ...this.options, ...options }
		/* istanbul ignore next */
		if (!opt.ua) {
			if (this.isClientSide()) {
				opt.ua = navigator.userAgent
			}
		}
		/* istanbul ignore next */
		this.ua = opt.ua || ''
		this.appMapping = { ...this.appMapping, ...options.appMapping }
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

	isClientSide(): boolean {
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
	isServerSide(): boolean {
		return !isUndef(typeof process) && !!(process.versions && process.versions.node)
	}

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
	isIOS(): boolean {
		return /iPad|iPhone|iPod/i.test(this.ua)
	}

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
	isAndroid(): boolean {
		return /android/i.test(this.ua)
	}

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
	isWechat(): boolean {
		return this.isApp('wechat')
	}

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
	isAlipay(): boolean {
		return this.isApp('alipay')
	}

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
	isToutiao(): boolean {
		return this.isApp('toutiao')
	}

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
	isDouyin(): boolean {
		return this.isApp('douyin')
	}

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
	isWechatMiniApp(): boolean {
		if (this.ua) {
			return /MicroMessenger/i.test(this.ua) && /miniProgram/i.test(this.ua)
		}
		/* istanbul ignore next */
		return !isUndef(typeof wx) && wx !== null && (!isUndef(wx.login) || !isUndef(wx.miniProgram))
	}

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
	isAlipayMiniApp(): boolean {
		if (this.ua) {
			return /AlipayClient/i.test(this.ua)
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
	 * ```
	 * @params ua { String } user agent
	 * @returns { Boolean } result
	 */
	isBaiduMiniApp(): boolean {
		if (this.ua) {
			return /swan/i.test(this.ua)
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
	 * ```
	 * @params ua { String } user agent
	 * @returns { Boolean } result
	 */
	isBytedanceMiniApp(): boolean {
		if (this.ua) {
			return /ToutiaoMicroApp/i.test(this.ua)
		}
		/* istanbul ignore next */
		return !isUndef(typeof tt) && tt !== null
	}

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
	isApp(appFlag?: string): boolean {
		if (this.ua) {
			if (appFlag) {
				let rex = this.appMapping && this.appMapping[appFlag]
				/* istanbul ignore next */
				if (!rex) {
					return false
				}
				return new RegExp(rex, 'i').test(this.ua)
			} else {
				// match all of appMapping list
				let obj = Object.keys(this.appMapping).find(item => {
					let rex = this.appMapping[item]
					return new RegExp(rex, 'i').test(this.ua)
				})
				return !!obj
			}
		}
		return false
	}

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
	isMiniApp(): boolean {
		return this.isWechatMiniApp() || this.isAlipayMiniApp() || this.isBytedanceMiniApp() || this.isBaiduMiniApp()
	}

}


export type ZaxDeviceOptions = { ua?: string, appMapping?: Record<string, string> }

function isUndef(tp: any): boolean {
	return tp === 'undefined'
}
