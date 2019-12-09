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
let zaxDevice = require('zax-device')
...
zaxDevice = zaxDevice.call(ctx)// in some server function with ctx
...
```


### client side

``` javascript
import zaxDevice from 'zax-device'
zaxDevice = zaxDevice()
```