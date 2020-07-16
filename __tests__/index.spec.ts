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
	ua: '',
	appMapping: {
		'za': 'zhonganwebview'
	}
})

describe('zaxDevice', () => {
	beforeEach(() => {
		//set default client environment
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.fix, configurable: true, writable: true })
		Object.defineProperty(window, 'document', { value: window.document, configurable: true, writable: true })
		Object.defineProperty(window, 'onload', { value: console.log, configurable: true, writable: true })
		zaxDevice = new ZaxDevice(uaList.fix)
	})

	let keys = Object.keys(zaxDevice)
	keys.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(zaxDevice).toHaveProperty(par)
		})
	})

	it(`should be correct isClientSide function result `, () => {
		expect(zaxDevice.isClientSide()).toEqual(true)
	})

	it(`should be correct isServerSide function result `, () => {
		Object.defineProperty(process, 'versions', {
			value: {
				node: '0.0.1'
			},
			configurable: true,
			writable: true
		})
		expect(zaxDevice.isServerSide()).toEqual(true)

		Object.defineProperty(process, 'versions', {
			value: '',
			configurable: true,
			writable: true
		})
		expect(zaxDevice.isServerSide()).toEqual(false)

		Object.defineProperty(process, 'versions', {
			value: null,
			configurable: true,
			writable: true
		})
		expect(zaxDevice.isServerSide()).toEqual(false)
	})

	it(`should be correct isIOS function result `, () => {
		expect(zaxDevice.isIOS()).toEqual(false)
		zaxDevice.setUA(uaList.ios)
		expect(zaxDevice.isIOS()).toEqual(true)
	})

	it(`should be correct isAndroid function result `, () => {
		expect(zaxDevice.isAndroid()).toEqual(false)
		zaxDevice.setUA(uaList.android)
		expect(zaxDevice.isAndroid()).toEqual(true)
	})

	it(`should be correct isWechat function result `, () => {
		expect(zaxDevice.isWechat()).toEqual(false)
		zaxDevice.setUA(uaList.wechat)
		expect(zaxDevice.isWechat()).toEqual(true)
	})

	it(`should be correct isAlipay function result `, () => {
		expect(zaxDevice.isAlipay()).toEqual(false)
		zaxDevice.setUA(uaList.alipay)
		expect(zaxDevice.isAlipay()).toEqual(true)
	})

	it(`should be correct isToutiao function result `, () => {
		expect(zaxDevice.isToutiao()).toEqual(false)
		zaxDevice.setUA(uaList.toutiao)
		expect(zaxDevice.isToutiao()).toEqual(true)
	})

	it(`should be correct isDouyin function result `, () => {
		expect(zaxDevice.isDouyin()).toEqual(false)
		zaxDevice.setUA(uaList.douyin)
		expect(zaxDevice.isDouyin()).toEqual(true)
	})

	it(`should be correct isWechatMiniApp function result `, () => {
		expect(zaxDevice.isWechatMiniApp()).toEqual(false)

		Object.defineProperty(window, 'wx', {
			value: {
				login: console
			},
			configurable: true,
			writable: true
		})
		zaxDevice.setUA('')
		expect(zaxDevice.isWechatMiniApp()).toEqual(true)

		zaxDevice.setUA('')
		Object.defineProperty(window, 'wx', {
			value: null,
			configurable: true,
			writable: true
		})
		expect(zaxDevice.isWechatMiniApp()).toEqual(false)
		zaxDevice.setUA(uaList.wechatMiniApp)
		expect(zaxDevice.isWechatMiniApp()).toEqual(true)
	})

	it(`should be correct isAlipayMiniApp function result `, () => {
		expect(zaxDevice.isAlipayMiniApp()).toEqual(false)

		Object.defineProperty(window, 'my', {
			value: {
				login: console
			},
			configurable: true,
			writable: true
		})
		zaxDevice.setUA('')
		expect(zaxDevice.isAlipayMiniApp()).toEqual(true)

		zaxDevice.setUA('')
		Object.defineProperty(window, 'my', {
			value: null,
			configurable: true,
			writable: true
		})
		expect(zaxDevice.isAlipayMiniApp()).toEqual(false)

		zaxDevice.setUA(uaList.alipayMiniApp)
		expect(zaxDevice.isAlipayMiniApp()).toEqual(true)
	})

	it(`should be correct isBaiduMiniApp function result `, () => {
		expect(zaxDevice.isBaiduMiniApp()).toEqual(false)

		Object.defineProperty(window, 'swan', {
			value: {
				login: console
			},
			configurable: true,
			writable: true
		})
		zaxDevice.setUA('')
		expect(zaxDevice.isBaiduMiniApp()).toEqual(true)

		zaxDevice.setUA('')
		Object.defineProperty(window, 'swan', {
			value: null,
			configurable: true,
			writable: true
		})
		expect(zaxDevice.isBaiduMiniApp()).toEqual(false)

		zaxDevice.setUA(uaList.baiduMiniApp)
		expect(zaxDevice.isBaiduMiniApp()).toEqual(true)
	})

	it(`should be correct isBytedanceMiniApp function result `, () => {
		expect(zaxDevice.isBytedanceMiniApp()).toEqual(false)

		Object.defineProperty(window, 'tt', {
			value: {
				login: console
			},
			configurable: true,
			writable: true
		})
		zaxDevice.setUA('')
		expect(zaxDevice.isBytedanceMiniApp()).toEqual(true)

		zaxDevice.setUA('')
		Object.defineProperty(window, 'tt', {
			value: null,
			configurable: true,
			writable: true
		})
		expect(zaxDevice.isBytedanceMiniApp()).toEqual(false)

		zaxDevice.setUA(uaList.bytedanceMiniApp)
		expect(zaxDevice.isBytedanceMiniApp()).toEqual(true)
	})

	it(`should be correct isMiniApp function result `, () => {
		zaxDevice.setUA('')
		expect(zaxDevice.isMiniApp()).toEqual(false)
		let myua = `Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36ZhongAnWebView`
		zaxDevice.setUA(myua)
		expect(zaxDevice.isMiniApp()).toEqual(false)
		expect(zaxDevice.isMiniApp()).toEqual(false)
		if (zaxDevice.appMapping) {
			expect(Object.keys(zaxDevice.appMapping).length).toEqual(4)
		}
	})

	it(`should be correct isApp function result `, () => {
		zaxDevice.setUA('')
		expect(zaxDevice.isApp('za')).toEqual(false)
		let myua = `Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36ZhongAnWebView`
		zaxDevice.setUA(myua)
		zaxDevice.setAppMapping('za', 'ZhongAnWebView')
		expect(zaxDevice.isApp('za')).toEqual(true)

		if (zaxDevice.appMapping) {
			expect(zaxDevice.appMapping).toEqual({
				alipay: 'AliApp',
				wechat: 'MicroMessenger',
				toutiao: 'NewsArticle',
				douyin: 'Aweme',
				za: "ZhongAnWebView"
			})
		}
	})

	it(`set app mapping`, () => {
		zaxDevice.setUA('')

		if (zaxDevice.appMapping) {
			expect(zaxDevice.appMapping).toEqual({
				alipay: 'AliApp',
				wechat: 'MicroMessenger',
				toutiao: 'NewsArticle',
				douyin: 'Aweme'
			})
		}

		let res = zaxDevice.setAppMapping('dax', 'jsonchou')
		console.log('get zaxDevice.options', zaxDevice.options)

		expect(zaxDevice.isApp('dax')).toEqual(false)
		const myua = `Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36jsonchou`
		zaxDevice.setUA(myua)
		expect(zaxDevice.isApp('dax')).toEqual(true)
		expect(zaxDevice.appMapping).toEqual({
			alipay: 'AliApp',
			wechat: 'MicroMessenger',
			toutiao: 'NewsArticle',
			douyin: 'Aweme',
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

		expect(zaxDevice.isClientSide()).toEqual(false)
		expect(zaxDevice.isServerSide()).toEqual(true)
		expect(zaxDevice.isApp('za')).toEqual(false)

		expect(zaxDevice.isMiniApp()).toEqual(false)
		expect(zaxDevice.isIOS()).toEqual(false)
		expect(zaxDevice.isAndroid()).toEqual(false)
		expect(zaxDevice.isWechat()).toEqual(false)
		expect(zaxDevice.isAlipay()).toEqual(false)
		expect(zaxDevice.isToutiao()).toEqual(false)
		expect(zaxDevice.isDouyin()).toEqual(false)
		expect(zaxDevice.isWechatMiniApp()).toEqual(false)
		expect(zaxDevice.isAlipayMiniApp()).toEqual(false)
		expect(zaxDevice.isBaiduMiniApp()).toEqual(false)
		expect(zaxDevice.isBytedanceMiniApp()).toEqual(false)


		zaxDevice.setAppMapping('za', 'ZhongAnWebView')
		let myua = `Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36ZhongAnWebView`
		zaxDevice.setUA(myua)
		expect(zaxDevice.isApp()).toEqual(true)

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
