// 문제 1) 변수 타입 선언

let name2: string;        // 문자열 타입
let age: number;         // 숫자 타입
let isStudent: boolean;   // 불리언 타입
let hobbies: string[];     // 문자열 배열 타입
let user: {name:string, age:number};        // 객체 타입 (name과 age를 포함)

// 문제 2) 배열 타입 정의

const arr4: number[] = [1, 2, 3];
const arr5: (number[] | number)[] = [1, [2, 3], 4];
const arr6: [number[], number[], string[]][] = [
  [
    [1, 2],
    [3, 4],
    ["a", "b"],
  ],
  [
    [5, 6],
    [7, 8],
    ["c", "d"],
  ],
];