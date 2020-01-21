# ZAX Device Util
## support SSR Miniprogram Browser side

## install

``` base
npm i zax-device -S
```

## usage

``` javascript
let zaxDevice, { getAppMapping, setAppMapping, isWechat, isAlipay, isToutiao, isDouyin, isApp, isMiniApp, isAndroid, isIOS, isClientSide, isServerSide, isWechatMiniprogram, isAlipayMiniprogram, isBytedanceMiniprogram, isBaiduMiniprogram, webviewMapping } = require('zax-device')

let zaxDevice, { getAppMapping, setAppMapping, isWechat, isAlipay, isToutiao, isDouyin, isApp, isMiniApp, isAndroid, isIOS, isClientSide, isServerSide, isWechatMiniprogram, isAlipayMiniprogram, isBytedanceMiniprogram, isBaiduMiniprogram, webviewMapping } from 'zax-device'

...
let foo = isAndroid(ctx.reqeust.header['user-agent'])// in koa middleware way
...
```

## [Docs](https://github.com/jsonchou/zax-url/tree/master/docs)

## [Test Case](https://github.com/jsonchou/zax-url/blob/master/__tests__/index.spec.ts)

