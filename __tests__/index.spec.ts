jest.setTimeout(30000)

import zaxDevice, {getAppMapping, setAppMapping, isAlipay, isAlipayMiniprogram, isApp, isAndroid, isClientSide, isIOS, isServerSide, isWechat, isWechatMiniprogram, AppList } from '../src/index'

import * as fs from 'fs'
import * as path from 'path'

import { log } from '../src/_utils/index'

const html = fs.readFileSync(path.resolve(__dirname, '../__mocks__', 'index.html'), 'utf8')

let waitObj = {
	k: 0
}

const uaList = require('../__mocks__/ua-list')

// Object.defineProperty(window.navigator, 'userAgent', { value: uaList.alipay, configurable: true, writable: true });

describe('zaxDevice', () => {
	beforeEach(() => {
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.fix, configurable: true, writable: true })
		Object.defineProperty(window, 'document', { value: window.document, configurable: true, writable: true })
	})

	let keys = Object.keys(zaxDevice)
	keys.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(zaxDevice).toHaveProperty(par)
			expect(zaxDevice[par]).toBeInstanceOf(Function)
		})
	})

	it(`should be correct isClientSide function result `, () => {
		expect(zaxDevice.isClientSide()).toEqual(true)
	})

	it(`should be correct isServerSide function result `, () => {
		expect(zaxDevice.isServerSide()).toEqual(false)
	})

	it(`should be correct isIOS function result `, () => {
		expect(zaxDevice.isIOS()).toEqual(false)
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.ios, configurable: true, writable: true })
		expect(zaxDevice.isIOS(uaList.ios)).toEqual(true)
	})

	it(`should be correct isAndroid function result `, () => {
		expect(zaxDevice.isAndroid()).toEqual(false)
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.android, configurable: true, writable: true })
		expect(zaxDevice.isAndroid(uaList.android)).toEqual(true)
	})

	it(`should be correct isWechat function result `, () => {
		expect(zaxDevice.isWechat()).toEqual(false)
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.wechat, configurable: true, writable: true })
		expect(zaxDevice.isWechat(uaList.wechat)).toEqual(true)
	})

	it(`should be correct isAlipay function result `, () => {
		expect(zaxDevice.isAlipay()).toEqual(false)
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.alipay, configurable: true, writable: true })
		expect(zaxDevice.isAlipay(uaList.alipay)).toEqual(true)
	})

	it(`should be correct isWechatMiniprogram function result `, () => {
		expect(zaxDevice.isWechatMiniprogram()).toEqual(false)
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.wechatMiniprogram, configurable: true, writable: true })
		expect(zaxDevice.isWechatMiniprogram(uaList.wechatMiniprogram)).toEqual(true)
	})

	it(`should be correct isAlipayMiniprogram function result `, () => {
		expect(zaxDevice.isAlipayMiniprogram()).toEqual(false)
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.alipayMiniprogram, configurable: true, writable: true })
		expect(zaxDevice.isAlipayMiniprogram(uaList.alipayMiniprogram)).toEqual(true)
	})

	it(`should be correct isApp function result `, () => {
		expect(zaxDevice.isApp('za')).toEqual(false)
		let myua = `Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36ZhongAnWebView`
		Object.defineProperty(window.navigator, 'userAgent', { value: myua, configurable: true, writable: true })
		expect(zaxDevice.isApp('za', myua)).toEqual(false)
		expect(zaxDevice.isApp('za')).toEqual(false)
		expect(Object.keys(AppList).length).toEqual(2)
	})

	it(`set app mapping`, () => {
		let res = setAppMapping('dax', 'jsonchou')
		console.log(res, window.navigator.userAgent || 'empty user agent')
		expect(zaxDevice.isApp('dax')).toEqual(false)
		const myua = `Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36jsonchou`
		Object.defineProperty(window.navigator, 'userAgent', { value: myua, configurable: true, writable: true })
		expect(zaxDevice.isApp('dax', myua)).toEqual(true)
		expect(zaxDevice.isApp('dax')).toEqual(true)
		expect(AppList).toEqual({
			alipay: 'AliApp',
			wechat: 'MicroMessenger',
			dax: 'jsonchou'
		})
	})

	it(`get app mapping`, () => {
		let res = getAppMapping()
		expect(res).toEqual({
			alipay: 'AliApp',
			wechat: 'MicroMessenger',
			dax: 'jsonchou'
		})

		expect(res).toEqual(AppList)

	})


	it(`simulation server side `, () => {
		Object.defineProperty(window, 'document', { value: undefined, configurable: true, writable: true })
		Object.defineProperty(window.navigator, 'userAgent', { value: uaList.server, configurable: true, writable: true })
		// console.log(777777, document)
		// console.log(777777, navigator.userAgent)

		expect(zaxDevice.isClientSide()).toEqual(false)
		expect(zaxDevice.isServerSide()).toEqual(true)
		expect(zaxDevice.isApp('za')).toEqual(false)
		expect(zaxDevice.isIOS()).toEqual(false)
		expect(zaxDevice.isAndroid()).toEqual(false)
		expect(zaxDevice.isWechat()).toEqual(false)
		expect(zaxDevice.isAlipay()).toEqual(false)
		expect(zaxDevice.isWechatMiniprogram()).toEqual(false)
		expect(zaxDevice.isAlipayMiniprogram()).toEqual(false)
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
