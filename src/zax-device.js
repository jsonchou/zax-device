/**
 * device module with server & client side
 */

let _ua = '';
if (typeof document !== 'undefined') {
    _ua = navigator.userAgent.toLowerCase()
} else {
    _ua = this.request.header['user-agent'].toLowerCase()
}

export default {
    _ua,
    client: typeof document !== undefined,
    server: typeof document === undefined,
    linux: true,
    windows: true,
    miniprograme, //是否是小程序
    weixin: _ua.match(/micromessenger/i) == 'micromessenger',
    app: _ua.match(/zhonganwebview/i) == 'zhonganwebview',
    ipad: _ua.match(/ipad/i) == 'ipad',
    iphone: _ua.match(/iphone os/i) == "iphone os",
    android: _ua.match(/android/i) == "android",
    wc: _ua.match(/windows ce/i) == "windows ce",
    wm: _ua.match(/windows mobile/i) == "windows mobile",
    wp: _ua.match(/windows phone/i) == "windows phone",
    webos: _ua.match(/webos/i) == "webos",
    blackberry: _ua.match(/blackberry/i) == "blackberry",
    uc: _ua.match(/ucweb/i) == 'ucweb' || _ua.match(/ucbrowser/i) == 'ucbrowser',
    pc: function() {
        return !(this.ipad || this.iphone || this.android || this.wc || this.wm || this.wp || this.webos || this.blackberry || this.uc || this.weixin); //检测PC
    }
}