# ZAX Device Util
## support SSR Miniprogram Browser side

## install

``` base
npm i zax-device -S
```

## usage

``` javascript
let { getAppMapping, setAppMapping, isWechat, isAlipay, isToutiao, isDouyin, isApp, isMiniApp, isAndroid, isIOS, isClientSide, isServerSide, isWechatMiniprogram, isAlipayMiniprogram, isBytedanceMiniprogram, isBaiduMiniprogram, webviewMapping } = require('zax-device')

let { getAppMapping, setAppMapping, isWechat, isAlipay, isToutiao, isDouyin, isApp, isMiniApp, isAndroid, isIOS, isClientSide, isServerSide, isWechatMiniprogram, isAlipayMiniprogram, isBytedanceMiniprogram, isBaiduMiniprogram, webviewMapping } from 'zax-device'

...
let foo = isAndroid(ctx.reqeust.header['user-agent'])// in koa middleware way
...
```
