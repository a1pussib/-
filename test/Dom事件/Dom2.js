var UtilEvent = {
	addHandler : function(element,type,listener) {
		if(element.addEventListener){
			element.addEventListener(type, listener,false);
		}else if(element.attachEvent) {
			element.attachEvent('on'+type,listener);
		}else{
			element['on'+type]=listener;
		}
	},
	removeHandler : function(element,type,listener) {
		if(element.removeEventListener){
			element.removeEventListener(type, listener,false);
		}else if(element.detachEvent) {
			element.detachEvent('on'+type,listener);
		}else{
			element['on'+type]=null;
		}
	} 
}
var EventUtil = {
		addHandler : function(element,type,listener) {
		if(element.addEventListener){
			element.addEventListener(type, listener, false);
		}else if(element.attachEvent) {
			element.attachEvent('on'+type, listener);
		}else{
			element['on'+type]=listener;
		}
	},
	getEvent : function(event) {
		return event ? event : window.event;
	},
	getTarget : function(event) {
		return event.target || event.srcElement;
	},
	preventDefault : function(event) {
		if(event.preventDefault) {
			event.preventDefault();
		}else {
			event.returnValue = false;
		}
	},
	removeHandler : function(element, type, listener) {
		if(element.removeEventListener){
			element.removeEventListener(type, listener,false);
		}else if(element.detachEvent) {
			element.detachEvent('on'+type,listener);
		}else{
			element['on'+type]=null;
		}
	},
	stopPropagation : function(event) {
		if(event.stopPropagation) {
			event.stopPropagation();
		}else {
			event.cancelBubble = true;
		}
	} 
}

/*test*/
// btn.onclick = function(event) {
// 	event = EventUtil.getEvent(event);
// 	var target = Event.getTarget(event);
// }