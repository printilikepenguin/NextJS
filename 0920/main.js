console.log("개졸려 ㅅㅂㅅㅂㅅㅂㅅㅂㅅㅂㅅㅂ")

// 1. 변수선언
// ES6에서 추가된 자스의 변수 선언: let, const
// 태초에 var가 있었다 -> 줏대없는 놈 쓰지마
// let과 const의 차이는 상수가 아니고 재할당 여부!
let num = 10; // 재할당 가능
num = 20;
const myAge = 28 // 재할당 불가, 일단 선언 후 값을 나중에 담아도 안댐;

// 2. 템플릿 문자열
const str = "A";
const str2 = "B";
const str3 = `10 + 20 = ${10 + 20}`; // 문자열 취급
console.log(str3)

// 3. 화살표 함수
// 함수 선언문
function sum(a, b) {
  return a + b;
};

// 함수 표현식 - 익명함수
const sum = function (a, b) {
  return a + b;
};
// 화살표?
const sum = (a, b) => {
  return a + b;
};
// 함수 표현식 - 기명함수 => 디버깅 쉬움.. 근데 요새 디버깅툴 잘나와서 이젠 장점을 느끼지 못할듯
const sum = function sum(a, b) {
  return a + b;
};
// 단축도 가능
// 기존
const add = function(n1, n2) {
  return n1 + n2
}
const add2 = (n1, n2) => n1 + n2

// 4. 비구조화 할당
// 배열
const [p, c, h] = ["penguins", "cats", "hamsters"]; 
console.log(p);
console.log(c);
console.log(h);
// 객체: 객체는 이름을 내멋대로 지정할 수 없고 똑같이 해줘야함
// const me = {
const {name,age,gender} = {
  name: "K", 
  age: 28,
  gender: "XX"
};
console.log(name) //console.log(me.name)

// 5. 전개연산자(spread 연산자)
// 문제가 되는 상황-얕은복사상황
const numArr1 = [10, 20]
const numArr2 = numArr1;
numArr2.push(30);
// ... 기호로 깊은 복사하면 댐
const numArr3 = [...numArr1];
// 배열합치깅
const num1 = [10, 30]
const num2 = [20, 40]
const combineNum = [...num1, ...num2];
// 객체합치깅
const person1 = {name: "John"};
const person2 = {...person1};
person2.name = "Su"
const person3 = {age: 20};
const combinePerson = {...person1, ...person3}; 
const combinePerson2 = {...person1, ...person2}; // 이건 맨 뒤에가 앞에걸 먹음 그래서 맨마지막객체만 뜸 
// 나머지 매개변수
const user1 = {name: "John", age: 30};
const user2 = {name: "Su", age: 28, sex: "F", address: "Seoul"};
const combineUser = {...user1, ...user2}
const printUser = (name, ...args) => {
  console.log(`${name}`)
  console.log(`${args}`)
}
printUser(combineUser)