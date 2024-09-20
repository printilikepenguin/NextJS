const num: number = 10;
console.log(num)

// 기본 자료형
let str1: string = "A";
let str2: String = "A";
// 위에 두개는 다른 겁니덩,, 대문자면 객체, 소문자면 자료
let num1: number = 10;
let bol: boolean = true;
let und: undefined = undefined;
let nul: null = null;
let sym: symbol = Symbol()

// 침조 자료형 (함수는 화살표)
// 배열
let arr1: number[] = [10, 20]; // 트렌디
let arr2: Array<number> = [10, 20]; // 구닥다리 ㅠㅠ
// 튜플
let arr3: [number, string] = [10, "A"]
// 객체
let obj: {a: string, b: number, c: boolean} = {
  a: 'd',
  b:2,
  c: true,
};
let fn: () => void = function(){}

// 객체타입
let user: {
  readonly name3: string; // 읽기전용속성
  age: number;
  gender?: string; // 옵셔널 속성(있등가없등가)
} = {
  name3: "J", 
  age: 20,
}
// 인덱스시그니처 {[key:keyType]:valueType}
let person: { [key: string]: string};
person = {
  name: "jon",
  sex: "f",
  add: "seoul"
}
// 함수 시그니처:함수타입지정하는법->매개변수앤나 반환값에 타입지정
function sum(n1:number, n2:number): number {
  return n1 + n2
}
// 함수 표현식
const sum2 = function sum(n1:number, n2:number):number {
  return n1+n2
}
// 화살표 표현~
const sum3:(n1:number, n2:number) => number = function sum(n1, n2) {
  return n1+n2
}