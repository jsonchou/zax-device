# ZAX Device Util
## support SSR Miniprogram Browser side

## install

``` base
npm i zax-device -S
```

## build with rollup

``` base
npm run build
```

## use

### server side

``` javascript
let { isClientSide, isServerSide, isIOS, isAndroid, isWechat, isWechatMiniprogram, isAlipayMiniprogram } = require('zax-device')
...
let foo = isAndroid(ctx.reqeust.header['user-agent'])// in koa middleware way
...
```


### client side

``` javascript
import { isClientSide, isServerSide, isIOS, isAndroid, isWechat, isWechatMiniprogram, isAlipayMiniprogram } from 'zax-device'
```
