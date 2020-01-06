<a name="module_zaxDevice"></a>

## zaxDevice
<p>support browser &amp; server side.</p>

**See**

- https://github.com/jsonchou/zax-device/tree/master/docs
- https://github.com/faisalman/ua-parser-js
- https://demo.mobiledetect.net/


* [zaxDevice](#module_zaxDevice)
    * [~setAppMapping()](#module_zaxDevice..setAppMapping) ⇒ <code>Boolean</code>
    * [~isClientSide()](#module_zaxDevice..isClientSide) ⇒ <code>Boolean</code>
    * [~isServerSide()](#module_zaxDevice..isServerSide) ⇒ <code>Boolean</code>
    * [~isIOS()](#module_zaxDevice..isIOS) ⇒ <code>Boolean</code>
    * [~isAndroid()](#module_zaxDevice..isAndroid) ⇒ <code>Boolean</code>
    * [~isWechat()](#module_zaxDevice..isWechat) ⇒ <code>Boolean</code>
    * [~isWechatMiniprogram()](#module_zaxDevice..isWechatMiniprogram) ⇒ <code>Boolean</code>
    * [~isAlipay()](#module_zaxDevice..isAlipay) ⇒ <code>Boolean</code>
    * [~isAlipayMiniprogram()](#module_zaxDevice..isAlipayMiniprogram) ⇒ <code>Boolean</code>
    * [~isApp()](#module_zaxDevice..isApp) ⇒ <code>Boolean</code>

<a name="module_zaxDevice..setAppMapping"></a>

### zaxDevice~setAppMapping() ⇒ <code>Boolean</code>
<p>setAppMapping</p>
<pre class="prettyprint source lang-js"><code>setAppMapping('tt','toutiao');
//=>
{
 alipay: 'AliApp',
 wechat: 'MicroMessenger',
 tt: 'toutiao',
}
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
<a name="module_zaxDevice..isClientSide"></a>

### zaxDevice~isClientSide() ⇒ <code>Boolean</code>
<p>isClientSide</p>
<pre class="prettyprint source lang-js"><code>isClientSide();
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
<a name="module_zaxDevice..isServerSide"></a>

### zaxDevice~isServerSide() ⇒ <code>Boolean</code>
<p>isServerSide</p>
<pre class="prettyprint source lang-js"><code>isServerSide();
//=> false
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
<a name="module_zaxDevice..isIOS"></a>

### zaxDevice~isIOS() ⇒ <code>Boolean</code>
<p>isIOS</p>
<pre class="prettyprint source lang-js"><code>isIOS('Mozilla/5.0 (iPhone; CPU iPhone OS 13_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Mobile/15E148 Safari/604.1');
//=> true
isIOS();
//=> false
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="module_zaxDevice..isAndroid"></a>

### zaxDevice~isAndroid() ⇒ <code>Boolean</code>
<p>isAndroid</p>
<pre class="prettyprint source lang-js"><code>isAndroid('Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.61 Mobile Safari/537.36');
//=> true
isAndroid();
//=> false
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="module_zaxDevice..isWechat"></a>

### zaxDevice~isWechat() ⇒ <code>Boolean</code>
<p>isWechat</p>
<pre class="prettyprint source lang-js"><code>isWechat('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 MicroMessenger/6.5.2.501 NetType/WIFI WindowsWechat');
//=> true
isWechat();
//=> false
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="module_zaxDevice..isWechatMiniprogram"></a>

### zaxDevice~isWechatMiniprogram() ⇒ <code>Boolean</code>
<p>isWechatMiniprogram</p>
<pre class="prettyprint source lang-js"><code>isWechatMiniprogram('Mozilla/5.0 (Linux; Android 7.1.1; MI 6 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN miniProgram');
//=> true
isWechatMiniprogram();
//=> false
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="module_zaxDevice..isAlipay"></a>

### zaxDevice~isAlipay() ⇒ <code>Boolean</code>
<p>isAlipay</p>
<pre class="prettyprint source lang-js"><code>isAlipay('Mozilla/5.0 (Linux; U; Android 9; zh-CN; HLK-AL00 Build/HONORHLK-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.21.0.73 Mobile Safari/537.36 UCBS/3.21.0.73_191212221923 NebulaSDK/1.8.100112 Nebula AlipayDefined(nt:WIFI,ws:360|0|3.0) AliApp(AP/10.1.82.9020) AlipayClient/10.1.82.9020 Language/zh-Hans useStatusBar/true isConcaveScreen/false Region/CN');
//=> true
isAlipay();
//=> false
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="module_zaxDevice..isAlipayMiniprogram"></a>

### zaxDevice~isAlipayMiniprogram() ⇒ <code>Boolean</code>
<p>isAlipayMiniprogram</p>
<pre class="prettyprint source lang-js"><code>isAlipayMiniprogram('Mozilla/5.0 (Linux; U; Android 9; zh-CN; HLK-AL00 Build/HONORHLK-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.21.0.73 Mobile Safari/537.36 UCBS/3.21.0.73_191212221923 NebulaSDK/1.8.100112 Nebula AlipayDefined(nt:WIFI,ws:360|0|3.0) AliApp(AP/10.1.82.9020) AlipayClient/10.1.82.9020 Language/zh-Hans useStatusBar/true isConcaveScreen/false Region/CN');
//=> true
isAlipayMiniprogram();
//=> false
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="module_zaxDevice..isApp"></a>

### zaxDevice~isApp() ⇒ <code>Boolean</code>
<p>isApp</p>
<pre class="prettyprint source lang-js"><code>isApp('za','Mozilla/5.0 (Linux; Android 9; HLK-AL00 Build/HONORHLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 Mobile Safari/537.36ZhongAnWebView');
//=> true
isApp('alipay');
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
