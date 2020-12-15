# Zax Device

## support SSR & Miniprogram & Browser side

[![NPM version](https://img.shields.io/npm/v/zax-device.svg?style=flat)](https://www.npmjs.com/package/zax-device)
[![Build Status](https://travis-ci.org/jsonchou/zax-device.svg?branch=master)](https://travis-ci.org/jsonchou/zax-device)
[![codecov](https://codecov.io/gh/jsonchou/zax-device/branch/master/graph/badge.svg)](https://codecov.io/gh/jsonchou/zax-device)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

util module

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE8+ Edge+                                                                                                                                                                                                      | last 10 versions                                                                                                                                                                                                  | last 10 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## Install

```base
npm i zax-device -S
```

## usage

```javascript
import ZaxDevice,{ isWechat, isAlipay, isToutiao, isDouyin, isApp, isMiniApp, isAndroid, isIOS, isClientSide, isServerSide, isWechatMiniApp, isAlipayMiniApp, isBytedanceMiniApp, isBaiduMiniApp } from 'zax-device'
let device = new ZaxDevice({
	ua: 'CUSTOM UA OR NULL',
	appMapping: {
		dax: 'WEBVIEW_FLAG'
	}
})

// or
import { device } from 'zax-device'
//dax.options

// client side
device.setAppMapping('dax', 'DAX_REGEX_FLAG') //
device.setUA(ctx.reqeust.header['user-agent']) // set server ua
device.isWechat() //
device.isAlipay() //
device.isToutiao() //
device.isDouyin() //
device.isApp('douyin') // same as isDouyin()
device.isApp(') //
device.isMiniApp() //
device.isAndroid() //
device.isIOS() //
device.isClientSide() //
device.isServerSide() //
device.isWechatMiniApp() //
device.isAlipayMiniApp() //
device.isBytedanceMiniApp() //
device.isBaiduMiniApp() //

//server side
isIOS(ctx.reqeust.header['user-agent'])
```

## [Docs](https://github.com/jsonchou/zax-device/tree/master/docs)

## [Test Case](https://github.com/jsonchou/zax-device/blob/master/__tests__/index.spec.ts)
