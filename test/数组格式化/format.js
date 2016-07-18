function formatMessage(result) {
  /*作为存储介质*/
  var message = {};
  /*对对象进行判断*/
  if(typeof result === 'object') {
      var keys = Object.keys(result);
          for(var i=0; i<keys.length; i++) {
            var item = result[keys[i]]；
                  var key = keys[i];
                  if(!(item instanceof Array) || item.length === 0) {
                    continue;
                  }
                  /*当数组长度为1的时候*/
                  if(item.length === 1) {
                    var val = item[0];
                  /*对获得数组中的对象进一步判断*/
                    if(typeof val === 'object') {
                      message[key] = formatMessage(val);
                    } else {
                      message[key] = (val||'').trim();
                    }
                  } else {//数组总还包括多个对象
                      message[key] = [];
                      for(var j=0 , k=item.length; j<k; j++) {
                        /*推入对象*/
                          message[key].push(formatMessage(item[j]))
                      }
                  }
          }
  }
  return message;
}