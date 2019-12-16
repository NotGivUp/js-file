function add(a, b){ 

    var sum = a + b;
    return sum
}


var num1 = parseInt(prompt("첫번째수를 입력"));
var num2 = parseInt(prompt("두번쨰수 입력"));
var result = add(num1,num2);
document.write(result);

