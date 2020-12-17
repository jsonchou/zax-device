jest.setTimeout(30000)

import * as fs from 'fs'
import * as path from 'path'

import { log } from '../src/_utils/index'
import ZaxDevice, { ZaxDeviceOptions, device, isWechat, isAlipay, isToutiao, isDouyin, isApp, isMiniApp, isAndroid, isIOS, isClientSide, isServerSide, isWechatMiniApp, isAlipayMiniApp, isBytedanceMiniApp, isBaiduMiniApp } from '../src/index'

const html = fs.readFileSync(path.resolve(__dirname, '../__mocks__', 'index.html'), 'utf8')

let waitObj = {
  k: 0
}

const uaList = require('../__mocks__/ua-list')

const setCustomUA = (key: string): void => {
  let val = setCustomUA[key]
  Object.defineProperty(window.navigator, 'userAgent', { value: val, configurable: true, writable: true })
  Object.defineProperty(window, 'document', { value: window.document, configurable: true, writable: true })
  Object.defineProperty(window, 'onload', { value: console.log, configurable: true, writable: true })
}

describe('zaxDevice', () => {
  beforeEach(() => {
    //set default client environment
    setCustomUA('def')
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
    expect(isIOS(uaList.ios)).toEqual(true)
  })

  it(`should be correct isAndroid function result `, () => {
    expect(isAndroid()).toEqual(false)
    expect(isAndroid(uaList.android)).toEqual(true)
  })

  it(`should be correct isWechat function result `, () => {
    expect(isWechat()).toEqual(false)
    expect(isWechat(uaList.wechat)).toEqual(true)
  })

  it(`should be correct isAlipay function result `, () => {
    expect(isAlipay()).toEqual(false)
    expect(isAlipay(uaList.alipay)).toEqual(true)
  })

  it(`should be correct isToutiao function result `, () => {
    expect(isToutiao()).toEqual(false)
    expect(isToutiao(uaList.toutiao)).toEqual(true)
  })

  it(`should be correct isDouyin function result `, () => {
    expect(isDouyin()).toEqual(false)
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
    setCustomUA('wechatMiniApp')
    expect(isWechatMiniApp()).toEqual(false)

    setCustomUA('def')
    Object.defineProperty(window, 'wx', {
      value: null,
      configurable: true,
      writable: true
    })
    expect(isWechatMiniApp()).toEqual(false)
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
    setCustomUA('alipayMiniApp')
    expect(isAlipayMiniApp()).toEqual(false)

    setCustomUA('def')
    Object.defineProperty(window, 'my', {
      value: null,
      configurable: true,
      writable: true
    })
    expect(isAlipayMiniApp()).toEqual(false)

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
    setCustomUA('baiduMiniApp')
    expect(isBaiduMiniApp()).toEqual(false)

    setCustomUA('def')
    Object.defineProperty(window, 'swan', {
      value: null,
      configurable: true,
      writable: true
    })
    expect(isBaiduMiniApp()).toEqual(false)

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
    setCustomUA('bytedanceMiniApp')
    expect(isBytedanceMiniApp()).toEqual(false)

    setCustomUA('def')
    Object.defineProperty(window, 'tt', {
      value: null,
      configurable: true,
      writable: true
    })
    expect(isBytedanceMiniApp()).toEqual(false)

    expect(isBytedanceMiniApp(uaList.bytedanceMiniApp)).toEqual(true)
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

    expect(isApp('za', uaList.za)).toEqual(true)

  })
})
