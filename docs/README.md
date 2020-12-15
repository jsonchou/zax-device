<a name="ZaxDevice"></a>

## ZaxDevice : <code>object</code>
<p>support browser &amp; server side.</p>

**Kind**: global namespace  
**See**

- https://github.com/jsonchou/zax-device/tree/master/docs
- https://github.com/faisalman/ua-parser-js
- https://demo.mobiledetect.net/


* [ZaxDevice](#ZaxDevice) : <code>object</code>
    * [.setAppMapping()](#ZaxDevice+setAppMapping) ⇒ <code>ZaxDeviceOptions</code>
    * [.setUA()](#ZaxDevice+setUA) ⇒ <code>ZaxDeviceOptions</code>
    * [.isClientSide()](#ZaxDevice+isClientSide) ⇒ <code>Boolean</code>
    * [.isServerSide()](#ZaxDevice+isServerSide) ⇒ <code>Boolean</code>
    * [.isIOS()](#ZaxDevice+isIOS) ⇒ <code>Boolean</code>
    * [.isAndroid()](#ZaxDevice+isAndroid) ⇒ <code>Boolean</code>
    * [.isWechat()](#ZaxDevice+isWechat) ⇒ <code>Boolean</code>
    * [.isAlipay()](#ZaxDevice+isAlipay) ⇒ <code>Boolean</code>
    * [.isToutiao()](#ZaxDevice+isToutiao) ⇒ <code>Boolean</code>
    * [.isDouyin()](#ZaxDevice+isDouyin) ⇒ <code>Boolean</code>
    * [.isWechatMiniApp()](#ZaxDevice+isWechatMiniApp) ⇒ <code>Boolean</code>
    * [.isAlipayMiniApp()](#ZaxDevice+isAlipayMiniApp) ⇒ <code>Boolean</code>
    * [.isBaiduMiniApp()](#ZaxDevice+isBaiduMiniApp) ⇒ <code>Boolean</code>
    * [.isBytedanceMiniApp()](#ZaxDevice+isBytedanceMiniApp) ⇒ <code>Boolean</code>
    * [.isApp()](#ZaxDevice+isApp) ⇒ <code>Boolean</code>
    * [.isMiniApp()](#ZaxDevice+isMiniApp) ⇒ <code>Boolean</code>

<a name="ZaxDevice+setAppMapping"></a>

### zaxDevice.setAppMapping() ⇒ <code>ZaxDeviceOptions</code>
<p>setAppMapping</p>
<pre class="prettyprint source lang-js"><code>setAppMapping('dax','jsonchou');
//=>
{
	alipay: 'AliApp',
	wechat: 'MicroMessenger',
	toutiao: 'NewsArticle',
	douyin: 'Aweme',
	dax: 'jsonchou'
  }
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>ZaxDeviceOptions</code> - <p>result</p>  
**Params**: key { String } short cut of user agent  
**Params**: regexFlag { String } core part of user agent  
<a name="ZaxDevice+setUA"></a>

### zaxDevice.setUA() ⇒ <code>ZaxDeviceOptions</code>
<p>setUA</p>
<pre class="prettyprint source lang-js"><code>setUA('Aweme/2.3.1 (iPhone; iOS 11.4.1; Scale/2.00)');
//=>
{
    ua: 'Aweme/2.3.1 (iPhone; iOS 11.4.1; Scale/2.00)',
    appMapping: {
      alipay: 'AliApp',
      wechat: 'MicroMessenger',
      toutiao: 'NewsArticle',
      douyin: 'Aweme'
    }
  }
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>ZaxDeviceOptions</code> - <p>options</p>  
**Params**: key { String } short cut of user agent  
<a name="ZaxDevice+isClientSide"></a>

### zaxDevice.isClientSide() ⇒ <code>Boolean</code>
<p>isClientSide</p>
<pre class="prettyprint source lang-js"><code>isClientSide();
//=> true
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
<a name="ZaxDevice+isServerSide"></a>

### zaxDevice.isServerSide() ⇒ <code>Boolean</code>
<p>isServerSide</p>
<pre class="prettyprint source lang-js"><code>isServerSide();
//=> false
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
<a name="ZaxDevice+isIOS"></a>

### zaxDevice.isIOS() ⇒ <code>Boolean</code>
<p>isIOS</p>
<p>not support miniprogram</p>
<pre class="prettyprint source lang-js"><code>isIOS();
//=> true
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="ZaxDevice+isAndroid"></a>

### zaxDevice.isAndroid() ⇒ <code>Boolean</code>
<p>isAndroid</p>
<p>not support miniprogram</p>
<pre class="prettyprint source lang-js"><code>isAndroid();
//=> true
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="ZaxDevice+isWechat"></a>

### zaxDevice.isWechat() ⇒ <code>Boolean</code>
<p>isWechat</p>
<pre class="prettyprint source lang-js"><code>isWechat();//MicroMessenger
//=> true
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="ZaxDevice+isAlipay"></a>

### zaxDevice.isAlipay() ⇒ <code>Boolean</code>
<p>isAlipay</p>
<pre class="prettyprint source lang-js"><code>isAlipay();//AlipayClient
//=> true
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="ZaxDevice+isToutiao"></a>

### zaxDevice.isToutiao() ⇒ <code>Boolean</code>
<p>isToutiao</p>
<pre class="prettyprint source lang-js"><code>isToutiao();//NewsArticle
//=> true
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="ZaxDevice+isDouyin"></a>

### zaxDevice.isDouyin() ⇒ <code>Boolean</code>
<p>isDouyin</p>
<pre class="prettyprint source lang-js"><code>isDouyin();//Aweme
//=> true
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="ZaxDevice+isWechatMiniApp"></a>

### zaxDevice.isWechatMiniApp() ⇒ <code>Boolean</code>
<p>isWechatMiniApp</p>
<pre class="prettyprint source lang-js"><code>isWechatMiniApp();//MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN miniProgram
//=> true
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="ZaxDevice+isAlipayMiniApp"></a>

### zaxDevice.isAlipayMiniApp() ⇒ <code>Boolean</code>
<p>isAlipayMiniApp</p>
<pre class="prettyprint source lang-js"><code>isAlipayMiniApp();//AlipayClient/10.1.82.9020
//=> true
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="ZaxDevice+isBaiduMiniApp"></a>

### zaxDevice.isBaiduMiniApp() ⇒ <code>Boolean</code>
<p>isBaiduMiniApp</p>
<pre class="prettyprint source lang-js"><code>isBaiduMiniApp('');
//=> true
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="ZaxDevice+isBytedanceMiniApp"></a>

### zaxDevice.isBytedanceMiniApp() ⇒ <code>Boolean</code>
<p>isBytedanceMiniApp</p>
<pre class="prettyprint source lang-js"><code>isBytedanceMiniApp('');
//=> true
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="ZaxDevice+isApp"></a>

### zaxDevice.isApp() ⇒ <code>Boolean</code>
<p>isApp</p>
<pre class="prettyprint source lang-js"><code>isApp('za','YOUR CUSTOM FLAG');// ZhongAnWebView
//=>
{
 	alipay: 'AliApp',
 	wechat: 'MicroMessenger',
 	tt: 'ToutiaoMicroApp',
}
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
<a name="ZaxDevice+isMiniApp"></a>

### zaxDevice.isMiniApp() ⇒ <code>Boolean</code>
<p>isMiniApp</p>
<pre class="prettyprint source lang-js"><code>isMiniApp('');
//=> true
</code></pre>

**Kind**: instance method of [<code>ZaxDevice</code>](#ZaxDevice)  
**Returns**: <code>Boolean</code> - <p>result</p>  
**Params**: ua { String } user agent  
