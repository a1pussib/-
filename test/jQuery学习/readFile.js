var fs = require('fs');

fs.readFile('./jquery-1.10.2__read.js','utf8',function(err,data){
    
    // 以下的两种方式都可以  // sodino.com
//    var reg1 = /\/\/.*/g;
//    var reg2 = /\/\*[\s\S]*?\*\//g;
    var reg = /(\/\/.*)|(\/\*[\s\S]*?\*\/)/g;
    var result = 
        // code.replace(reg1, '').replace(reg2, '');
        data.replace(reg, '');
    result = result.replace(/\s+\n/g,'');
    fs.writeFile('./jquery-1.10.2__read.js',result,'utf8',function(err){
        console.log('done');
    })

})