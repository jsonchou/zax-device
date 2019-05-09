/**
 * device module with server & client side
 */

import func from './func'
export default function() {
    if (typeof document != 'undefined') {
        return func(navigator.userAgent.toLowerCase())
    } else {
        return func(this.request.header['user-agent'].toLowerCase())
    }
}