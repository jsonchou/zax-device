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
exports.isAlipayMiniApp = exports.isWechatMiniApp = exports.isBytedanceMiniApp = exports.isBaiduMiniApp = exports.isMiniApp = exports.isDouyin = exports.isToutiao = exports.isAlipay = exports.isWechat = exports.isAndroid = exports.isIOS = exports.isApp = exports.isServerSide = exports.isClientSide = exports.device = void 0;
/**
 * Device module.
 * @description support browser & server side.
 * @module zaxDevice
 * @namespace ZaxDevice
 * @see https://github.com/jsonchou/zax-device/tree/master/docs
 * @see https://github.com/faisalman/ua-parser-js
 * @see https://demo.mobiledetect.net/
 */
function isUndef(tp) {
    return tp === 'undefined';
}
var ZaxDevice = /** @class */ (function () {
    function ZaxDevice(options) {
        this.ua = '';
        this.appMapping = {
            alipay: 'AliApp',
            wechat: 'MicroMessenger',
            toutiao: 'NewsArticle',
            douyin: 'Aweme',
            za: 'ZhongAnWebView'
        };
        if (options) {
            this.options = options;
        }
        this.setUA = this.setUA.bind(this);
        this.setAppMapping = this.setAppMapping.bind(this);
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
                    opt.ua = window.navigator.userAgent;
                }
            }
            /* istanbul ignore next */
            this.ua = opt.ua || '';
            this.appMapping = __assign(__assign({}, this.appMapping), options.appMapping);
        },
        enumerable: false,
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
    ZaxDevice.prototype.isIOS = function (ua) {
        return /iPad|iPhone|iPod/i.test(ua || this.ua);
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
    ZaxDevice.prototype.isAndroid = function (ua) {
        return /android/i.test(ua || this.ua);
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
    ZaxDevice.prototype.isWechat = function (ua) {
        return this.isApp('wechat', ua);
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
    ZaxDevice.prototype.isAlipay = function (ua) {
        return this.isApp('alipay', ua);
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
    ZaxDevice.prototype.isToutiao = function (ua) {
        return this.isApp('toutiao', ua);
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
    ZaxDevice.prototype.isDouyin = function (ua) {
        return this.isApp('douyin', ua);
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
    ZaxDevice.prototype.isWechatMiniApp = function (ua) {
        ua = ua || this.ua;
        if (ua) {
            return /MicroMessenger/i.test(ua) && /miniProgram/i.test(ua);
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
    ZaxDevice.prototype.isAlipayMiniApp = function (ua) {
        ua = ua || this.ua;
        if (ua) {
            return /AlipayClient/i.test(ua);
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
    ZaxDevice.prototype.isBaiduMiniApp = function (ua) {
        ua = ua || this.ua;
        if (ua) {
            return /swan/i.test(ua);
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
    ZaxDevice.prototype.isBytedanceMiniApp = function (ua) {
        ua = ua || this.ua;
        if (ua) {
            return /ToutiaoMicroApp/i.test(ua);
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
    ZaxDevice.prototype.isApp = function (appFlag, ua) {
        var _this = this;
        ua = ua || this.ua;
        if (ua) {
            if (appFlag) {
                var rex = this.appMapping && this.appMapping[appFlag];
                /* istanbul ignore next */
                if (!rex) {
                    return false;
                }
                return new RegExp(rex, 'i').test(ua);
            }
            else {
                // match all of appMapping list
                var obj = Object.keys(this.appMapping).find(function (item) {
                    var rex = _this.appMapping[item];
                    return new RegExp(rex, 'i').test(ua);
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
exports.device = new ZaxDevice();
exports.isClientSide = exports.device.isClientSide;
exports.isServerSide = exports.device.isServerSide;
exports.isApp = exports.device.isApp;
exports.isIOS = exports.device.isIOS;
exports.isAndroid = exports.device.isAndroid;
exports.isWechat = exports.device.isWechat;
exports.isAlipay = exports.device.isAlipay;
exports.isToutiao = exports.device.isToutiao;
exports.isDouyin = exports.device.isDouyin;
exports.isMiniApp = exports.device.isMiniApp;
exports.isBaiduMiniApp = exports.device.isBaiduMiniApp;
exports.isBytedanceMiniApp = exports.device.isBytedanceMiniApp;
exports.isWechatMiniApp = exports.device.isWechatMiniApp;
exports.isAlipayMiniApp = exports.device.isAlipayMiniApp;
//# sourceMappingURL=index.js.map