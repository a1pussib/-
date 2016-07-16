
var xhr= {
    xhr: window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP'),
    get: function (url, callback) {
        'use strict';
        this.xhr.open('get',url);
        this.onreadystatechange(callback,this.xhr);
        this.xhr.send(null);
    },
    post:function(url,data,callback) {
        this.xhr.open('post', url);
        this.xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        this.onreadystatechange(callback,this.xhr);
        this.xhr.send(data);
    },
    onreadystatechange: function(fn,_xhr){
        _xhr.onreadystatechange=function() {
             if(_xhr.readyState==4){
             	if(_xhr.status==200){
             		fn(_xhr.responseText);
             	}
             }
        }
    }
};
var xhr=createXHR();
xhr.onreadystatechange=function() {
	if(xhr.readyState==4){
		if((xhr.status>=200&&xhr.status<300)||xhr.sttus==304){
			alert(xhr.responseText);
		}else{
			alert('Request was unsuccessful'+xhr.status);
		}
	}
};
xhr.open('get','example.txt',true);
xhr.setRequestHeader('Myheader','true');
xhr.send(null);

var myHeader= xhr.getResponseHeader('Myheader');
var allHeaders= xhr.getAllResponseHeaders();

function addURLParam(url, name, value) {
	url += (url.indexOf("?")==-1 ? "?" : "&");
	url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
	return url;
};
function submitData() {
	var xhr=createXHR();
	xhr.onreadystatechange=function() {
		if(xhr.readyState==4){
			if((xhr.status>=200&&xhr.status<300)||xhr.sttus==304){
				alert(xhr.responseText);
			}else{
				alert('Request was unsuccessful'+xhr.status);
			}
		}
	};
	xhr.open('post', 'postexample.php' , true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(serialize(form))
};
var tAjax = function(config) {
	var url = config.url;
	var complete = config.complete;
	var xhr = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');
	xhr.open('post', url);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.onreadystatechange = function() {
		if(xhr.readyState==4){
			if((xhr.status>=200&&xhr.status<300)||xhr.sttus==304){
				alert(xhr.responseText);
			}else{
				alert('Request was unsuccessful'+xhr.status);
			}
		}
	}
	xhr.send();
};
var tAjax2 = function(config) {
	var doneFn;
	var url = config.url;
	var complete = config.complete;
	var xhr = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');
	xhr.open('post', url);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.onreadystatechange = function() {
		if(xhr.readyState==4){
			if((xhr.status>=200&&xhr.status<300)||xhr.sttus==304){
				doneFn(xhr.responseText);
				complete(xhr.responseText);
			}
		}
	}
	xhr.send(xhr.responseText);
	return {
		done : function(ourfn) {
			doneFn = ourfn;
		}
	};
}

