"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Device module.
 * @description support browser & server side.
 * @module zaxDevice
 * @namespace ZaxDevice
 * @see https://github.com/jsonchou/zax-device/tree/master/docs
 * @see https://github.com/faisalman/ua-parser-js
 * @see https://demo.mobiledetect.net/
 */
var ZaxDevice = /** @class */ (function () {
    function ZaxDevice(options) {
        this.ua = '';
        this.appMapping = {
            alipay: 'AliApp',
            wechat: 'MicroMessenger',
            toutiao: 'NewsArticle',
            douyin: 'Aweme'
        };
        if (options) {
            this.options = options;
        }
        this.isClientSide = this.isClientSide.bind(this);
        this.isServerSide = this.isServerSide.bind(this);
        this.isApp = this.isApp.bind(this);
        this.isIOS = this.isIOS.bind(this);
        this.isAndroid = this.isAndroid.bind(this);
        this.isWechat = this.isWechat.bind(this);
        this.isAlipay = this.isAlipay.bind(this);
        this.isToutiao = this.isToutiao.bind(this);
        this.isDouyin = this.isDouyin.bind(this);
        this.isMiniApp = this.isMiniApp.bind(this);
        this.isBaiduMiniApp = this.isBaiduMiniApp.bind(this);
        this.isBytedanceMiniApp = this.isBytedanceMiniApp.bind(this);
        this.isWechatMiniApp = this.isWechatMiniApp.bind(this);
        this.isAlipayMiniApp = this.isAlipayMiniApp.bind(this);
    }
    /**
     * setAppMapping
     *
     * ```js
     * setAppMapping('dax','jsonchou');
     * //=>
     * {
     * 	alipay: 'AliApp',
     * 	wechat: 'MicroMessenger',
     * 	toutiao: 'NewsArticle',
     * 	douyin: 'Aweme',
     * 	dax: 'jsonchou'
    }
     * ```
     * @params key { String } short cut of user agent
     * @params regexFlag { String } core part of user agent
     * @returns { ZaxDeviceOptions } result
     */
    ZaxDevice.prototype.setAppMapping = function (key, regexFlag) {
        var appMapping = this.appMapping;
        appMapping[key] = regexFlag;
        return this.options;
    };
    /**
     * setUA
     *
     * ```js
     * setUA('Aweme/2.3.1 (iPhone; iOS 11.4.1; Scale/2.00)');
     * //=>
     * {
     *     ua: 'Aweme/2.3.1 (iPhone; iOS 11.4.1; Scale/2.00)',
     *     appMapping: {
     *       alipay: 'AliApp',
     *       wechat: 'MicroMessenger',
     *       toutiao: 'NewsArticle',
     *       douyin: 'Aweme'
     *     }
     *   }
     * ```
     * @params key { String } short cut of user agent
     * @returns { ZaxDeviceOptions } options
     */
    ZaxDevice.prototype.setUA = function (ua) {
        this.ua = ua;
        return this.options;
    };
    Object.defineProperty(ZaxDevice.prototype, "options", {
        get: function () {
            var options = {
                ua: this.ua,
                appMapping: this.appMapping
            };
            return options;
        },
        /* istanbul ignore next */
        set: function (options) {
            var opt = __assign(__assign({}, this.options), options);
            /* istanbul ignore next */
            if (!opt.ua) {
                if (this.isClientSide()) {
                    opt.ua = navigator.userAgent;
                }
            }
            /* istanbul ignore next */
            this.ua = opt.ua || '';
            this.appMapping = __assign(__assign({}, this.appMapping), options.appMapping);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * isClientSide
     *
     * ```js
     * isClientSide();
     * //=> true
     * ```
     *
     * @returns { Boolean } result
     */
    ZaxDevice.prototype.isClientSide = function () {
        return !isUndef(typeof window) && !isUndef(typeof document);
    };
    /**
     * isServerSide
     *
     * ```js
     * isServerSide();
     * //=> false
     * ```
     *
     * @returns { Boolean } result
     */
    ZaxDevice.prototype.isServerSide = function () {
        return !isUndef(typeof process) && !!(process.versions && process.versions.node);
    };
    /**
     * isIOS
     *
     * not support miniprogram
     *
     * ```js
     * isIOS();
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    ZaxDevice.prototype.isIOS = function () {
        return /iPad|iPhone|iPod/i.test(this.ua);
    };
    /**
     * isAndroid
     *
     * not support miniprogram
     *
     * ```js
     * isAndroid();
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    ZaxDevice.prototype.isAndroid = function () {
        return /android/i.test(this.ua);
    };
    /**
     * isWechat
     *
     * ```js
     * isWechat();//MicroMessenger
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    ZaxDevice.prototype.isWechat = function () {
        return this.isApp('wechat');
    };
    /**
     * isAlipay
     *
     * ```js
     * isAlipay();//AlipayClient
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    ZaxDevice.prototype.isAlipay = function () {
        return this.isApp('alipay');
    };
    /**
     * isToutiao
     *
     * ```js
     * isToutiao();//NewsArticle
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    ZaxDevice.prototype.isToutiao = function () {
        return this.isApp('toutiao');
    };
    /**
     * isDouyin
     *
     * ```js
     * isDouyin();//Aweme
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    ZaxDevice.prototype.isDouyin = function () {
        return this.isApp('douyin');
    };
    /**
     * isWechatMiniApp
     *
     * ```js
     * isWechatMiniApp();//MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN miniProgram
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    ZaxDevice.prototype.isWechatMiniApp = function () {
        if (this.ua) {
            return /MicroMessenger/i.test(this.ua) && /miniProgram/i.test(this.ua);
        }
        /* istanbul ignore next */
        return !isUndef(typeof wx) && wx !== null && (!isUndef(wx.login) || !isUndef(wx.miniProgram));
    };
    /**
     * isAlipayMiniApp
     *
     * ```js
     * isAlipayMiniApp();//AlipayClient/10.1.82.9020
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    ZaxDevice.prototype.isAlipayMiniApp = function () {
        if (this.ua) {
            return /AlipayClient/i.test(this.ua);
        }
        /* istanbul ignore next */
        return !isUndef(typeof my) && my !== null && !isUndef(my.alert);
    };
    /**
     * isBaiduMiniApp
     *
     * ```js
     * isBaiduMiniApp('');
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    ZaxDevice.prototype.isBaiduMiniApp = function () {
        if (this.ua) {
            return /swan/i.test(this.ua);
        }
        /* istanbul ignore next */
        return !isUndef(typeof swan) && swan !== null;
    };
    /**
     * isBytedanceMiniApp
     *
     * ```js
     * isBytedanceMiniApp('');
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    ZaxDevice.prototype.isBytedanceMiniApp = function () {
        if (this.ua) {
            return /ToutiaoMicroApp/i.test(this.ua);
        }
        /* istanbul ignore next */
        return !isUndef(typeof tt) && tt !== null;
    };
    /**
     * isApp
     *
     * ```js
     * isApp('za','YOUR CUSTOM FLAG');// ZhongAnWebView
     * //=>
     * {
     *  	alipay: 'AliApp',
     *  	wechat: 'MicroMessenger',
     *  	tt: 'ToutiaoMicroApp',
     * }
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    ZaxDevice.prototype.isApp = function (appFlag) {
        var _this = this;
        if (this.ua) {
            if (appFlag) {
                var rex = this.appMapping && this.appMapping[appFlag];
                /* istanbul ignore next */
                if (!rex) {
                    return false;
                }
                return new RegExp(rex, 'i').test(this.ua);
            }
            else {
                // match all of appMapping list
                var obj = Object.keys(this.appMapping).find(function (item) {
                    var rex = _this.appMapping[item];
                    return new RegExp(rex, 'i').test(_this.ua);
                });
                return !!obj;
            }
        }
        return false;
    };
    /**
     * isMiniApp
     *
     * ```js
     * isMiniApp('');
     * //=> true
     * ```
     * @params ua { String } user agent
     * @returns { Boolean } result
     */
    ZaxDevice.prototype.isMiniApp = function () {
        return this.isWechatMiniApp() || this.isAlipayMiniApp() || this.isBytedanceMiniApp() || this.isBaiduMiniApp();
    };
    return ZaxDevice;
}());
exports.default = ZaxDevice;
function isUndef(tp) {
    return tp === 'undefined';
}
//# sourceMappingURL=index.js.map