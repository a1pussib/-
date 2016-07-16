var xhr;
function getXMLHttpRequest() {
    'use strict';
    if (XMlHttpRequest !== 'undefined') {
        xhr = new XMLHttpRequest();
        xhr.switch()
    } else if (typeof ActiveXObject !== 'undefined') {
        return xhr = new ActiveXObject();
    } else {
        throw new Error('No XHR object available');
    }
}