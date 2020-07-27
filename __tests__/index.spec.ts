jest.setTimeout(30000)

import * as fs from 'fs'
import * as path from 'path'

import { log } from '../src/_utils/index'
import ZaxDevice, { ZaxDeviceOptions } from '../src/index'

const html = fs.readFileSync(path.resolve(__dirname, '../__mocks__', 'index.html'), 'utf8')

let waitObj = {
	k: 0
}

const uaList = require('../__mocks__/ua-list')

let zaxDevice = new ZaxDevice({
	ua: uaList.fix,
	appMapping: {

	}
})

const { setAppMapping, setUA, isWechat, isAlipay, isToutiao, isDouyin, isApp, isMiniApp, isAndroid, isIOS, isClientSide, isServerSide, isWechatMiniApp, isAlipayMiniApp, isBytedanceMiniApp, isBaiduMiniApp, ua, appMapping } = zaxDevice

describe('zaxDevice', () => {
	beforeEach(() => {
		//set default client environment
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.fix, configurable: true, writable: true })
		Object.defineProperty(window, 'document', { value: window.document, configurable: true, writable: true })
		Object.defineProperty(window, 'onload', { value: console.log, configurable: true, writable: true })
	})

	let keys = Object.keys(zaxDevice)
	keys.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(zaxDevice).toHaveProperty(par)
		})
	})

	it(`should be correct isClientSide function result `, () => {
		expect(isClientSide()).toEqual(true)
	})

	it(`should be correct isServerSide function result `, () => {
		Object.defineProperty(process, 'versions', {
			value: {
				node: '0.0.1'
			},
			configurable: true,
			writable: true
		})
		expect(isServerSide()).toEqual(true)

		Object.defineProperty(process, 'versions', {
			value: '',
			configurable: true,
			writable: true
		})
		expect(isServerSide()).toEqual(false)

		Object.defineProperty(process, 'versions', {
			value: null,
			configurable: true,
			writable: true
		})
		expect(isServerSide()).toEqual(false)
	})

	it(`should be correct isIOS function result `, () => {
		expect(isIOS()).toEqual(false)
		setUA(uaList.ios)
		expect(isIOS()).toEqual(true)
	})

	it(`should be correct isAndroid function result `, () => {
		expect(isAndroid()).toEqual(false)
		setUA(uaList.android)
		expect(isAndroid()).toEqual(true)
	})

	it(`should be correct isWechat function result `, () => {
		expect(isWechat()).toEqual(false)
		setUA(uaList.wechat)
		expect(isWechat()).toEqual(true)
	})

	it(`should be correct isAlipay function result `, () => {
		expect(isAlipay()).toEqual(false)
		setUA(uaList.alipay)
		expect(isAlipay()).toEqual(true)
	})

	it(`should be correct isToutiao function result `, () => {
		expect(isToutiao()).toEqual(false)
		setUA(uaList.toutiao)
		expect(isToutiao()).toEqual(true)
	})

	it(`should be correct isDouyin function result `, () => {
		expect(isDouyin()).toEqual(false)
		setUA(uaList.douyin)
		expect(isDouyin()).toEqual(true)
	})

	it(`should be correct isWechatMiniApp function result `, () => {
		expect(isWechatMiniApp()).toEqual(false)

		Object.defineProperty(window, 'wx', {
			value: {
				login: console
			},
			configurable: true,
			writable: true
		})
		setUA('')
		expect(isWechatMiniApp()).toEqual(true)

		setUA('')
		Object.defineProperty(window, 'wx', {
			value: null,
			configurable: true,
			writable: true
		})
		expect(isWechatMiniApp()).toEqual(false)
		setUA(uaList.wechatMiniApp)
		expect(isWechatMiniApp()).toEqual(true)
	})

	it(`should be correct isAlipayMiniApp function result `, () => {
		expect(isAlipayMiniApp()).toEqual(false)

		Object.defineProperty(window, 'my', {
			value: {
				login: console
			},
			configurable: true,
			writable: true
		})
		setUA('')
		expect(isAlipayMiniApp()).toEqual(true)

		setUA('')
		Object.defineProperty(window, 'my', {
			value: null,
			configurable: true,
			writable: true
		})
		expect(isAlipayMiniApp()).toEqual(false)

		setUA(uaList.alipayMiniApp)
		expect(isAlipayMiniApp()).toEqual(true)
	})

	it(`should be correct isBaiduMiniApp function result `, () => {
		expect(isBaiduMiniApp()).toEqual(false)

		Object.defineProperty(window, 'swan', {
			value: {
				login: console
			},
			configurable: true,
			writable: true
		})
		setUA('')
		expect(isBaiduMiniApp()).toEqual(true)

		setUA('')
		Object.defineProperty(window, 'swan', {
			value: null,
			configurable: true,
			writable: true
		})
		expect(isBaiduMiniApp()).toEqual(false)

		setUA(uaList.baiduMiniApp)
		expect(isBaiduMiniApp()).toEqual(true)
	})

	it(`should be correct isBytedanceMiniApp function result `, () => {
		expect(isBytedanceMiniApp()).toEqual(false)

		Object.defineProperty(window, 'tt', {
			value: {
				login: console
			},
			configurable: true,
			writable: true
		})
		setUA('')
		expect(isBytedanceMiniApp()).toEqual(true)

		setUA('')
		Object.defineProperty(window, 'tt', {
			value: null,
			configurable: true,
			writable: true
		})
		expect(isBytedanceMiniApp()).toEqual(false)

		setUA(uaList.bytedanceMiniApp)
		expect(isBytedanceMiniApp()).toEqual(true)
	})

	it(`should be correct isMiniApp function result `, () => {
		setUA('')
		expect(isMiniApp()).toEqual(false)

		setAppMapping('za', 'ZhongAnWebView')
		setUA('xiaojiaqiang android 11')
		expect(isApp('za')).toEqual(false)

		let myua = `Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36ZhongAnWebView`
		setUA(myua)
		expect(isMiniApp()).toEqual(false)
		expect(isApp('za')).toEqual(true)
		if (appMapping) {
			expect(Object.keys(appMapping).length).toEqual(5)
		}
	})

	it(`should be correct isApp function result `, () => {
		setUA('')
		expect(isApp('za')).toEqual(false)
		let myua = `Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36ZhongAnWebView`
		setUA(myua)
		setAppMapping('za', 'ZhongAnWebView')
		expect(isApp('za')).toEqual(true)

		if (appMapping) {
			expect(appMapping).toEqual({
				alipay: 'AliApp',
				wechat: 'MicroMessenger',
				toutiao: 'NewsArticle',
				douyin: 'Aweme',
				za: "ZhongAnWebView"
			})
		}
	})

	it(`set app mapping`, () => {
		setUA('')

		if (appMapping) {
			expect(appMapping).toEqual({
				alipay: 'AliApp',
				wechat: 'MicroMessenger',
				toutiao: 'NewsArticle',
				douyin: 'Aweme',
				za: "ZhongAnWebView"
			})
		}

		let res = setAppMapping('dax', 'jsonchou')

		expect(isApp('dax')).toEqual(false)
		const myua = `Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36jsonchou`
		setUA(myua)
		expect(isApp('dax')).toEqual(true)
		expect(isApp()).toEqual(true)
		expect(appMapping).toEqual({
			alipay: 'AliApp',
			wechat: 'MicroMessenger',
			toutiao: 'NewsArticle',
			douyin: 'Aweme',
			za: "ZhongAnWebView",
			dax: 'jsonchou'
		})
	})

	it(`simulate server side `, () => {

		Object.defineProperty(window, 'document', { value: undefined, configurable: true, writable: true })
		Object.defineProperty(window.navigator, 'userAgent', { value: null, configurable: true, writable: true })
		Object.defineProperty(window, 'onload', { value: undefined, configurable: true, writable: true })

		Object.defineProperty(process, 'versions', {
			value: {
				node: '0.0.1'
			},
			configurable: true,
			writable: true
		})

		expect(isClientSide()).toEqual(false)
		expect(isServerSide()).toEqual(true)
		expect(isApp('za')).toEqual(false)

		expect(isMiniApp()).toEqual(false)
		expect(isIOS()).toEqual(false)
		expect(isAndroid()).toEqual(true)
		expect(isWechat()).toEqual(false)
		expect(isAlipay()).toEqual(false)
		expect(isToutiao()).toEqual(false)
		expect(isDouyin()).toEqual(false)
		expect(isWechatMiniApp()).toEqual(false)
		expect(isAlipayMiniApp()).toEqual(false)
		expect(isBaiduMiniApp()).toEqual(false)
		expect(isBytedanceMiniApp()).toEqual(false)


		setAppMapping('za', 'ZhongAnWebView')
		let myua = `Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36ZhongAnWebView`
		setUA(myua)
		expect(isApp()).toEqual(true)

	})
})

describe('log', () => {
	it('should invoke success', () => {
		let res = log('test')
		expect(log).toBeInstanceOf(Function)
		expect(res).toBeTruthy()
	})

	it('should return a function', () => {
		let res = log('test')
		expect(log).toBeInstanceOf(Function)
		expect(res).toBeTruthy()
		expect(res).toBeInstanceOf(Function)

		let res2 = log('test', 'extra param')
		expect(log).toBeInstanceOf(Function)
		expect(res2).toBeTruthy()
		expect(res2).toBeInstanceOf(Function)

		let res3 = log()
		expect(res3).toBeTruthy()
		expect(res3).toBeInstanceOf(Function)
	})
})
