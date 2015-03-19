var str = '문자열';
var str2 = str;
str = '문자열 수정';
console.log(str);

var arr = ['A','B','C'];
var arr2 = arr;
arr.push('D');
console.log(arr2);

arr2 = null;
console.log(arr);

function 함수(첫번째, 두번째) {
    console.log(arguments[1]);
}
함수(11,22,33);

var 변수 = 1;
function 함수(첫번째, 두번째) {
    var 변수 = 2;
//    var local;
//    console.log(변수);
    console.log(window.변수);
}
함수('가','나','다');
//window.('가','나','다'); window가 생략되어 있다.
//window.parseInt
console.log(this);

var obj = {
    fn : function() {
        console.log(this);
    }
};
obj.fn();

var person = {
    name : '김태곤',
    sayName : function() {
        console.log(this.name);
    }
};
var shin = {
//    name : person.name,
    name : '신승엽',
    sayName : person.sayName
};
shin.sayName = person.sayName;

person.sayName();
shin.sayName();


//문제: 다음 함수를 작성하여 결과를 완성하라.

function fn() {
    return this.width * this.height; 
};

var rec1 = {
    width : 30,
    height : 10,
    getArea : fn
};
console.log( rec1.getArea() ) //300;

var rec2 = {
    width : 20,
    height : 10,
    getArea : fn
};
console.log( rec2.getArea() ) //200;

// 익명(anonymous) 함수
function fn() {
    
}
var fn = function() {
    
};
(function(str){
     console.log(str);
})('aaa');

// 콜백 함수: 특정 상황이 되었을 때 실행하기 위해 전달하는 함수.
// 용도에 의해 구분되는 것이므로 평범하게 만들어진 함수도 콜백 함수가 될 수 있다.

var timerId = setTimeout(function(){
    console.log('5초지남');
}, 5000);
console.log(timerId);
clearTimeout(timerId);

function 오초뒤() {
    console.log('5초지남');
}
//setTimeout(오초뒤, 5000);
// "전역 함수라면" 함수 이름을 문자열로 전달할 숭도 있다. (권장안함)
//setTimeout('오초뒤', 5000);


















