<a name="module_zaxDevice"></a>

## zaxDevice
<p>support browser &amp; server side.</p>

**See**

- https://github.com/jsonchou/zax-device/tree/master/docs
- https://github.com/faisalman/ua-parser-js
- https://demo.mobiledetect.net/


* [zaxDevice](#module_zaxDevice)
    * [~setAppMapping()](#module_zaxDevice..setAppMapping) ⇒ <code>Record.&lt;string, string&gt;</code>
    * [~getAppMapping()](#module_zaxDevice..getAppMapping) ⇒ <code>Record.&lt;string, string&gt;</code>
    * [~isClientSide()](#module_zaxDevice..isClientSide) ⇒ <code>Boolean</code>
    * [~isServerSide()](#module_zaxDevice..isServerSide) ⇒ <code>Boolean</code>
    * [~isIOS()](#module_zaxDevice..isIOS) ⇒ <code>Boolean</code>
    * [~isAndroid()](#module_zaxDevice..isAndroid) ⇒ <code>Boolean</code>
    * [~isWechat()](#module_zaxDevice..isWechat) ⇒ <code>Boolean</code>
    * [~isAlipay()](#module_zaxDevice..isAlipay) ⇒ <code>Boolean</code>
    * [~isToutiao()](#module_zaxDevice..isToutiao) ⇒ <code>Boolean</code>
    * [~isDouyin()](#module_zaxDevice..isDouyin) ⇒ <code>Boolean</code>
    * [~isWechatMiniApp()](#module_zaxDevice..isWechatMiniApp) ⇒ <code>Boolean</code>
    * [~isAlipayMiniApp()](#module_zaxDevice..isAlipayMiniApp) ⇒ <code>Boolean</code>
    * [~isBaiduMiniApp()](#module_zaxDevice..isBaiduMiniApp) ⇒ <code>Boolean</code>
    * [~isBytedanceMiniApp()](#module_zaxDevice..isBytedanceMiniApp) ⇒ <code>Boolean</code>
    * [~isApp()](#module_zaxDevice..isApp) ⇒ <code>Boolean</code>
    * [~isMiniApp()](#module_zaxDevice..isMiniApp) ⇒ <code>Boolean</code>

<a name="module_zaxDevice..setAppMapping"></a>

### zaxDevice~setAppMapping() ⇒ <code>Record.&lt;string, string&gt;</code>
<p>setAppMapping</p>
<pre class="prettyprint source lang-js"><code>setAppMapping('tt','toutiao');
//=>
{
 alipay: 'AliApp',
 wechat: 'MicroMessenger',
 tt: 'ToutiaoMicroApp',
}
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Record.&lt;string, string&gt;</code> - <p>result</p>  
**Params**: key { String } short cut of user agent  
**Params**: regexFlag { String } core part of user agent  
<a name="module_zaxDevice..getAppMapping"></a>

### zaxDevice~getAppMapping() ⇒ <code>Record.&lt;string, string&gt;</code>
<p>getAppMapping</p>
<pre class="prettyprint source lang-js"><code>getAppMapping();
//=>
{
 alipay: 'AliApp',
 wechat: 'MicroMessenger',
 tt: 'ToutiaoMicro',
}
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Record.&lt;string, string&gt;</code> - <p>result</p>  
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
<p>not support miniprogram</p>
<pre class="prettyprint source lang-js"><code>isIOS(ctx.request.headers['user-agent']);//(iPhone; CPU iPhone OS 13_1 like Mac OS X)
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
<p>not support miniprogram</p>
<pre class="prettyprint source lang-js"><code>isAndroid(ctx.request.headers['user-agent']);//(Linux; Android 10)
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
<pre class="prettyprint source lang-js"><code>isWechat(ctx.request.headers['user-agent']);//MicroMessenger
//=> true
isWechat();
//=> false
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="module_zaxDevice..isAlipay"></a>

### zaxDevice~isAlipay() ⇒ <code>Boolean</code>
<p>isAlipay</p>
<pre class="prettyprint source lang-js"><code>isAlipay(ctx.request.headers['user-agent']);//AlipayClient
//=> true
isAlipay();
//=> false
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="module_zaxDevice..isToutiao"></a>

### zaxDevice~isToutiao() ⇒ <code>Boolean</code>
<p>isToutiao</p>
<pre class="prettyprint source lang-js"><code>isToutiao(ctx.request.headers['user-agent']);//NewsArticle
//=> true
isToutiao();
//=> false
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="module_zaxDevice..isDouyin"></a>

### zaxDevice~isDouyin() ⇒ <code>Boolean</code>
<p>isDouyin</p>
<pre class="prettyprint source lang-js"><code>isDouyin(ctx.request.headers['user-agent']);//Aweme
//=> true
isDouyin();
//=> false
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="module_zaxDevice..isWechatMiniApp"></a>

### zaxDevice~isWechatMiniApp() ⇒ <code>Boolean</code>
<p>isWechatMiniApp</p>
<pre class="prettyprint source lang-js"><code>isWechatMiniApp(ctx.request.headers['user-agent']);//MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN miniProgram
//=> true
isWechatMiniApp();
//=> false
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="module_zaxDevice..isAlipayMiniApp"></a>

### zaxDevice~isAlipayMiniApp() ⇒ <code>Boolean</code>
<p>isAlipayMiniApp</p>
<pre class="prettyprint source lang-js"><code>isAlipayMiniApp(ctx.request.headers['user-agent']);//AlipayClient/10.1.82.9020
//=> true
isAlipayMiniApp();
//=> false
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="module_zaxDevice..isBaiduMiniApp"></a>

### zaxDevice~isBaiduMiniApp() ⇒ <code>Boolean</code>
<p>isBaiduMiniApp</p>
<pre class="prettyprint source lang-js"><code>isBaiduMiniApp('');
//=> true
isBaiduMiniApp();
//=> false
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="module_zaxDevice..isBytedanceMiniApp"></a>

### zaxDevice~isBytedanceMiniApp() ⇒ <code>Boolean</code>
<p>isBytedanceMiniApp</p>
<pre class="prettyprint source lang-js"><code>isBytedanceMiniApp('');
//=> true
isBytedanceMiniApp();
//=> false
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="module_zaxDevice..isApp"></a>

### zaxDevice~isApp() ⇒ <code>Boolean</code>
<p>isApp</p>
<pre class="prettyprint source lang-js"><code>isApp('za','YOUR CUSTOM FLAG');// ZhongAnWebView
//=> true
isApp('alipay');
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="module_zaxDevice..isMiniApp"></a>

### zaxDevice~isMiniApp() ⇒ <code>Boolean</code>
<p>isMiniApp</p>
<pre class="prettyprint source lang-js"><code>isMiniApp('');
//=> true
isMiniApp('alipay');
//=> true
</code></pre>

**Kind**: inner method of [<code>zaxDevice</code>](#module_zaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
