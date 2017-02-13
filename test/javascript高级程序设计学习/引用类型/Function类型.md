做厉害的函数类型就是Call 和 apply 

function sum(arg1,arg2){
    return arg1 + arg2;
}

function callSum(num1,num2){
    console.log(this);
    return sum.apply(this,arguments);//传入对象
}
callSum(1,1);
//callSum1()在执行sum函数时传入了this 作为this值 因为是在全局作用域中调用，所以传入的就是window

function callSum2(num1,num2){
    console.log(this);
    return sum.apply(this,[num1,num2]);
}
//第二个传入也是windows 


call() 方法与 apply()方法的作用相同 他们的区别仅在于接受参数的不同。对于call而言 第一个参数this的值没有变化，变化的是其余参数都直接传递变量 

function sum(arg1,arg2){
    return arg1 + arg2;
}

function callSum(num1,num2){
    console.log(this);
    return sum.call(this,num1,num2);//传入对象
}
callSum(1,1);