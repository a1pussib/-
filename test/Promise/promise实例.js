  return new Promise(function(resolve, reject) {
    that
      .fetchAccessToken()
      .then(function(data) {
        var url = api.permanent.batch + 'access_token=' + data.access_token

        request({method: 'POST', url: url, body: options, json: true}).then(function(response) {
          var _data = response.body

          if (_data) {
            resolve(_data)
          }
          else {
            throw new Error('batch material fails')
          }
        })
        .catch(function(err) {
          reject(err)
        })
      })
  })
  /*一个Promise代表一个异步操作返回的结果，总之可以让你的回调变得很好维护，尤其是在多种异步的情况下，根据then 函数逐层传递参数，从而保证执行顺数，从而防止多层嵌套。*/