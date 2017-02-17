(function(window,undefined){
    var readyList ,
    rootjQuery,
    core_strundefined = typeof undefined,
    location = window.location,
    document = window.document,
    docElement = document.documentElement,
    _jQuery = window.jQuery,
    _$ = window.$,
    class2type = {},
    core_version = '1.10.2',
    core_deletedIds = [],
    core_concat = core_deletedIds.concat,
    core_push = core_deletedIds.push,
    core_slice = core_deletedIds.slice,
    core_indexOf = core_deletedIds.indexOf,
    core_toString = core_deletedIds.toString,
    core_hasOwn = core_deletedIds.hasOwnProperty,
    core_trim = core_deletedIds.trim,
    jQuery = function(selector, context){
        return new jQuery.fn.init(selector,context,roojQuery);
    },
    core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    core_rnotwhite = /\S+/g,
    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    rvalidchars = /^[\],:{}\s]*$/,
    rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
    rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    rmsPrefix = /^-ms-/,
    rdashAlpha = /-([\da-z])/gi,
    fcamelCase = function(all,letter){
        return letter.toUpperCase();
    },
    completed = function(event){
        if(document.addEventListener ||  event.type === 'load' || ){
            detach();
            jQuery.ready();
        }
    }，
    detach = function(){
        if(document.addEventListener){
            document.addEventListener('DOMContentLoaded',completed,false);
            window.removeEventListener('load',completed,false);
        }else {
            document.detachEvent('onreadystatechange',completed);
            window.detachEvent('onload',completed);
        }
    };
    jQuery.fn = jQuery.prototype = {
        jquery : core_version,
        constructor : jQuery,
        init : function(selector,context,rootjQuery){
            var match, elem;
        if (!selector) {
            return this;
        }
        if (typeof selector === "string") {
            if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                match = [null, selector, null];            } else {
                match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;
                    jQuery.merge(this, jQuery.parseHTML(
                        match[1],
                        context && context.nodeType ? context.ownerDocument || context : document,
                        true
                    ));
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        for (match in context) {                            if (jQuery.isFunction(this[match])) {
                                this[match](context[match]);                            } else {
                                this.attr(match, context[match]);
                            }
                        }
                    }
                    return this;
                } else {                    elem = document.getElementById(match[2]);                    if (elem && elem.parentNode) {                        if (elem.id !== match[2]) {                            return rootjQuery.find(selector);
                        }
                        this.length = 1;
                        this[0] = elem;
                    }
                    this.context = document;
                    this.selector = selector;
                    return this;
                }
            } else if (!context || context.jquery) {
                return (context || rootjQuery).find(selector);
            } else {
                return this.constructor(context).find(selector);
            }
        } else if (selector.nodeType) {
            this.context = this[0] = selector;
            this.length = 1;
            return this;
        } else if (jQuery.isFunction(selector)) {
            return rootjQuery.ready(selector);
        }
        if (selector.selector !== undefined) {
            this.selector = selector.selector;
            this.context = selector.context;
        }
        return jQuery.makeArray(selector, this);
        }
    }})()