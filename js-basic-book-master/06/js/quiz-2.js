var r = prompt("반지름");
var circle1 = new Circle(r);
document.write("원의 반지름이" + r + "cm 일때 <br> 원의 둘레는 " + circle1.round() + "이고 <br> 원의 넓이는 " + circle1.area() + " cm2 이다");

function Circle(radius){
    this.radius = radius;
    this.round = function(){
        return Math.floor(Math.PI * 2 * this.radius);
    }
    this.area = function(){
        return Math.floor(Math.PI * this.radius * this.radius);
    }
}
