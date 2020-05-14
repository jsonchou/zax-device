jest.setTimeout(30000)

import zaxDevice, { getAppMapping, setAppMapping, isWechat, isAlipay, isToutiao, isDouyin, isApp, isMiniApp, isAndroid, isIOS, isClientSide, isServerSide, isWechatMiniApp, isAlipayMiniApp, isBytedanceMiniApp, isBaiduMiniApp, webviewMapping, AppListDescriptor } from '../src/index'

import * as fs from 'fs'
import * as path from 'path'

import { log } from '../src/_utils/index'

const html = fs.readFileSync(path.resolve(__dirname, '../__mocks__', 'index.html'), 'utf8')

let waitObj = {
	k: 0
}

const uaList = require('../__mocks__/ua-list')

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
			expect(zaxDevice[par]).toBeInstanceOf(Function)
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
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.ios, configurable: true, writable: true })
		expect(isIOS(uaList.ios)).toEqual(true)
	})

	it(`should be correct isAndroid function result `, () => {
		expect(isAndroid()).toEqual(false)
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.android, configurable: true, writable: true })
		expect(isAndroid(uaList.android)).toEqual(true)
	})

	it(`should be correct isWechat function result `, () => {
		expect(isWechat()).toEqual(false)
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.wechat, configurable: true, writable: true })
		expect(isWechat(uaList.wechat)).toEqual(true)
	})

	it(`should be correct isAlipay function result `, () => {
		expect(isAlipay()).toEqual(false)
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.alipay, configurable: true, writable: true })
		expect(isAlipay(uaList.alipay)).toEqual(true)
	})

	it(`should be correct isToutiao function result `, () => {
		expect(isToutiao()).toEqual(false)
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.toutiao, configurable: true, writable: true })
		expect(isToutiao(uaList.toutiao)).toEqual(true)
	})

	it(`should be correct isDouyin function result `, () => {
		expect(isDouyin()).toEqual(false)
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.douyin, configurable: true, writable: true })
		expect(isDouyin(uaList.douyin)).toEqual(true)
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
		Object.defineProperty(window.navigator, 'userAgent', { value: null, configurable: true, writable: true })
		expect(isWechatMiniApp()).toEqual(true)

		Object.defineProperty(window.navigator, 'userAgent', { value: null, configurable: true, writable: true })
		Object.defineProperty(window, 'wx', {
			value: null,
			configurable: true,
			writable: true
		})
		expect(isWechatMiniApp(uaList.wechatMiniApp)).toEqual(false)

		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.wechatMiniApp, configurable: true, writable: true })
		expect(isWechatMiniApp(uaList.wechatMiniApp)).toEqual(true)
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
		Object.defineProperty(window.navigator, 'userAgent', { value: null, configurable: true, writable: true })
		expect(isAlipayMiniApp()).toEqual(true)

		Object.defineProperty(window.navigator, 'userAgent', { value: null, configurable: true, writable: true })
		Object.defineProperty(window, 'my', {
			value: null,
			configurable: true,
			writable: true
		})
		expect(isAlipayMiniApp(uaList.alipayMiniApp)).toEqual(false)

		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.alipayMiniApp, configurable: true, writable: true })
		expect(isAlipayMiniApp(uaList.alipayMiniApp)).toEqual(true)
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
		Object.defineProperty(window.navigator, 'userAgent', { value: null, configurable: true, writable: true })
		expect(isBaiduMiniApp()).toEqual(true)

		Object.defineProperty(window.navigator, 'userAgent', { value: null, configurable: true, writable: true })
		Object.defineProperty(window, 'swan', {
			value: null,
			configurable: true,
			writable: true
		})
		expect(isBaiduMiniApp(uaList.baiduMiniApp)).toEqual(false)

		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.baiduMiniApp, configurable: true, writable: true })
		expect(isBaiduMiniApp(uaList.baiduMiniApp)).toEqual(true)
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
		Object.defineProperty(window.navigator, 'userAgent', { value: null, configurable: true, writable: true })
		expect(isBytedanceMiniApp()).toEqual(true)

		Object.defineProperty(window.navigator, 'userAgent', { value: null, configurable: true, writable: true })
		Object.defineProperty(window, 'tt', {
			value: null,
			configurable: true,
			writable: true
		})
		expect(isBytedanceMiniApp(uaList.bytedanceMiniApp)).toEqual(false)

		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.bytedanceMiniApp, configurable: true, writable: true })
		expect(isBytedanceMiniApp(uaList.bytedanceMiniApp)).toEqual(true)
	})

	it(`should be correct isMiniApp function result `, () => {
		expect(isMiniApp('za')).toEqual(false)
		let myua = `Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36ZhongAnWebView`
		Object.defineProperty(window.navigator, 'userAgent', { value: myua, configurable: true, writable: true })
		expect(isMiniApp()).toEqual(false)
		expect(isMiniApp(myua)).toEqual(false)
		expect(Object.keys(webviewMapping).length).toEqual(4)
	})

	it(`should be correct isApp function result `, () => {
		expect(isApp('za')).toEqual(false)
		let myua = `Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36ZhongAnWebView`
		Object.defineProperty(window.navigator, 'userAgent', { value: myua, configurable: true, writable: true })
		expect(isApp('za', myua)).toEqual(false)
		expect(isApp('za')).toEqual(false)
		expect(Object.keys(webviewMapping).length).toEqual(4)
	})

	it(`set app mapping`, () => {
		let res = setAppMapping('dax', 'jsonchou')
		console.log(res, window.navigator.userAgent || 'empty user agent')
		expect(isApp('dax')).toEqual(false)
		const myua = `Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36jsonchou`
		Object.defineProperty(window.navigator, 'userAgent', { value: myua, configurable: true, writable: true })
		expect(isApp('dax', myua)).toEqual(true)
		expect(isApp('dax')).toEqual(true)
		expect(webviewMapping).toEqual({
			alipay: 'AliApp',
			wechat: 'MicroMessenger',
			toutiao: 'NewsArticle',
			douyin: 'Aweme',
			dax: 'jsonchou'
		})
	})

	it(`get app mapping`, () => {
		let res = getAppMapping()
		expect(res).toEqual({
			alipay: 'AliApp',
			wechat: 'MicroMessenger',
			toutiao: 'NewsArticle',
			douyin: 'Aweme',
			dax: 'jsonchou'
		})

		expect(res).toEqual(webviewMapping)
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
		expect(isAndroid()).toEqual(false)
		expect(isWechat()).toEqual(false)
		expect(isAlipay()).toEqual(false)
		expect(isToutiao()).toEqual(false)
		expect(isDouyin()).toEqual(false)
		expect(isWechatMiniApp()).toEqual(false)
		expect(isAlipayMiniApp()).toEqual(false)
		expect(isBaiduMiniApp()).toEqual(false)
		expect(isBytedanceMiniApp()).toEqual(false)
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
