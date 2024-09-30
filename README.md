📚매일 공부 내용을 작성합니다

<details>
<summary>0920</summary>
<div markdown="1">

웹브라우저는 어떤 파일을 읽어낼 수 있을까? 대표적으로 HTML
내부 스크립트 js 혹은 외부 js 가져와서 쓸 수 있음
**defer, async 옵션**
: 자스 실행할때 스크립트 실행 시점 조절
[참고](https://ko.javascript.info/script-async-defer)
defer: html 파싱과정에서 다운로드도 실행도 병렬로 수행

함수의 본질: 코드를 일괄적으로 실행시키는 것

내 작업공간이 루트폴더가 되도록
새폴더 생성 후 cd

```
npm init -y
npm install typescript -D (루트폴더에만)
npm install -D ts-node (루트폴더에만)
npx tsc -v
npx ts-node -v
```

view -> command Pallete -> 맨 아래 code runner 추가

```
# setting
# code-runner.excutorMap 추가
"code-runner.clearPreviousOutput": true,
"code-runner.executorMap": {
  "typescript": "node_modules/.bin/ts-node"
},
```

npx tsc -init

Symbol 타입 첨봄 ㅁㅊ
자스는 함수도 객체로 취급한다. 일급객체 검색 ㄱ
안녕

</div>
</details>

<details>
<summary>0923</summary>
<div markdown="2">

[엔피엠 트렌드](https://npmtrends.com)

리액트에서 클래스를 사용하지 않게된 계기
[확인](https://ko.legacy.reactjs.org/docs/hooks-intro-html#motivation)

가상 DOM이 실제 DOM보다 무조건적으로 빠른 것은 아니다
리액트는 실제 DOM을 기반으로 가상 DOM을 2개 만들고, 뭔가 업데이트가 생기면 업데이트 전/후 가상 DOM을 비교하면서 변경된 부분을 찾게 되는데요, 이 과정이 바로 Diffing(디핑)입니다.

```
업데이트 전
<div>
	<p>안녕하세요</p>
</div>

업데이트 후
<div>
	<p>안녕히계세요!</p>
</div>
```

상태가 변경될수 있는 동적인 콘텐츠보다 정적인 콘텐츠가 더 많다면, 특정 상황에서는 가상 DOM에서 Diffing을 진행하는 과정이 비효율적이고 느리다고 볼 수 있을 것 같습니다.
다만 그렇다고 해도 일반적인 경우에는 가상 DOM이 충분히 빠르기 때문에 굳이 이러한 이유로 가상 DOM을 사용하는 리액트를 기피해야 할 이유는 전혀 없다고 생각합니다

</div>
</details>

<details>
<summary>0924</summary>
<div markdown="3">

html+css 공부 필수다 꼭 해라 예..
프레임워크와 라이브러리의 차이: 개발자의 자유도 유무

```
npm create vite@latest (.)
cd 플젝명
```

[테일윈드 설치법](https://tailwindcss.com/docs/guides/vite)

npm: node package manager설치
npx: node package excute 실행

깃은 SSH로 쓰세용.. 넵
https://algoroot.tistory.com/16

```
로컬에 확인된 내용
git config --list
로컬명에 지정하기
git config --local user.name
git config --local user.email
```

나만의 스타터팩을 만들어서 활용하면 좋다!!

tailwindCss extension intelliSense어쩌구 깔면 편함

```
"css.lint.unknownAtRules": "ignore", // 추가 or 업데이트
```

모바일에서 호버 뻬기(잘 안되고 느려지니..)

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
}
```

링크든 뭐든 적용하면 그만~!
링크태그가 더 퍼포먼스가 좋음
input, url 불러오는건 CSS에서 파싱이 됨

리액트는 깊이우선탐색(DFS)으로 렌더링됨
콘솔 두번찍히는데 컴포넌트에 오류있는지 확인하려고 pre렌더링 후 보여줌
개발모드에서 찍히는데 strict모드 해제하면 해결되긴 함 크게 신경안써도됨

이벤트 객체 타입추론하는법

```
const onClick = (event: any) => {
    console.log(event);
  };

      <button
        onClick={(event) => onClick(event)}
```

우선 애니로 박고, 인라인 함수 만들어서 마우스 올려보면 객체값 나옴
'React.MouseEvent<HTMLButtonElement, MouseEvent>' 이런식으로

SPA의 특징 알아둘 것
type 빼놓는 파일 확장자가 ~.d.ts 이면 import 안해도 자동으로 인식함

```
export default function App() {
  const printHello = (name: string) => {
    alert("Hello, " + name);
  };
  return (
    <div>
      <h1>app component</h1>
      // 매개변수의 여부에 따라 달라짐
      1. 이벤트핸들러
      <button onClick={printHello}>click</button>
      2. 함수 호출
      <button onClick={() => printHello("jon")}>click</button>
    </div>
  );
}
```

props내릴때 요소말고 {children}:{children:ReactNode}로 내리는 이유: HTML 태그 인식됨
`<strong>얌미</strong>`

</div>
</details>

<details>
<summary>0925</summary>
<div markdown="4">

React.ComponentPropsWithoutRef<"HTML태그">
많이씁니덩
웹접근성!!! 마크업 단어 잘 쓸 것!!
번들러!!!!
항상 빌드속도와 렌더링을 신경쓸것

useId 리액트 훅 들어본사람... 완성되어있는 기능을 제공해주는 함수

```
<Input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
```

validation 검증패키지 : 조드 ... 확인필

나 유효성 검사

```
 // 유효성 검사
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [sendcode, setSendcode] = useState(false)
```

이렇게 했는데

```
const loginValid = email.trim() === password.trim()
이런식으로 트루만들기도 하네염
```

html은 조작이 가능하기 때문에 js로 유효성 검증필필

useRef는 JSX 요소 참조할 때 사용

```
 // 특정 JSX 요소 참조하고 시플때!!!
  const inputEl = useRef<HTMLInputElement>(null); //document.auerySelector('input')같은 거
    const onClickHandler = () => {
    if (email.trim() === "") {
      alert("이메일입력플리즈");
      inputEl.current?.focus();
      return;
    }
    if (password.trim() === "") {
      alert("비번입력플리즈");
      inputEl.current?.focus();
      return;
    }
  };

```

이럼 알림뜨고 커서가 자동으로 깜빡임 내가 원하는 인풋창에...

```
        <Input
          ref={inputEl}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        일케했으 ㄹ때
        아래 오류남 without을 with으로 해줘야하는데 그럼 타입 지랄남
        type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "color";
};

그럼 어케 하냐?..

export default function Input(props: InputProps) {
  이 함수 표현식을 const로 수정하는 거임...
  글고 두번째 매개변수를 ref로 넘겨줌...
const Input = forwardRef<HTML.InputElement, InputProps>((props, ref) => {
  return ();
})

// Ref 속성 받을 때 쓰는 리액트만의 함수....
forwardRef()
```

자,, 고차원 컴포넌트가 뭔지 알면 댐....

</div>
</details>

<details>
<summary>0926</summary>
<div markdown="5">

생명주기는 useEffect로 다 관리가능
마운트/언마운트, 생성 등..
useEffect는 컴포넌트 관점임..
UI가 흔들리는건 신경X

부하있는컴포넌트에서 화면흔들리는게 보여주기싫다면 useLayoutEffect가 있음
레이아웃중심이라 컴포넌트 렌더링 후 UI 정리될때까지 화면노출X
상태값따라 컴포넌트가 달라지는 경우 사용

```
import { useLayoutEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Artificial delay -- do nothing for 200ms
  }

  useLayoutEffect(() => {
    if (count === 10) setCount(0);
    console.log("useEffect");
  }, [count]);

  return (
    <>
      <div>count: {count}</div>
      <button onClick={() => setCount(10)}>upupup</button>
      {/* <Todo /> */}
    </>
  );
}

```

state lifting

UUID: 고유 아이디 만들어주는 라이브러리인데 id가 스트링으로 들어옴 ㅠㅠ
컴포넌트 분리안하면 리렌터링 효율적으로 제어 불가
리액트는 변경될때마다 렌더링되기땜에 메모이제이션 사용하는 편

**메모이제이션**
어차피 같은 값이면 재렌더링하지말고 메모리저장해놨다가 가져다 쓰자!!
가장 첫단계!!! 컴포넌트를 메모이제이션

자기값, props 변경되면 메모이제이션 작동안함

React.memo: 컴포넌트 메모이제이션할 때 씀
useCallback: 함수를 메모이제이션할 때
useMemo: 값을 메모이제이션할 때

useState는 렌더링의 영향을 안받음(약간 자동메모이제이션된것처럼)
그래서 투두만들때 투두리스트아이템 컴포넌트랑 삭제등록 함수만 메모이제이션해주면 투두리스트는 재렌더링여러번안됨

```
이전값참조할거면useCallback은 value로 써주어댐
todos.filter((todo)=>todo.id!==id) // 이렇게하면안댐
// 아래처럼
setTodos((todos) => todos.filter((todo) => todo.id !== id));
```

반복문에만 메모이제이션 잘해줘도 렌더링 문제 괘안아짐

**컨택스트**
프롭스 드릴링 해결하는 전역상태와
스케이트관리

useReducer(reducer, initialState)
( 리듀서 정의함수와, 초기값)

```

const reducer = (state: number, action: string) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

export default function App() {
  // 리듀서썼을 때
  const [cnt, setCnt] = useReducer(reducer, 0);

  // 안썼을 때
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };
```

리듀서는 보통 src아래 reducer라고 폴더 따로 빼둠
useState라고 생각하면 편함

**context API**

1. createContext: 공급자 생성 (context 생성 혹은 Provide 생성)
2. 공급범위 지정 -> 생성된 공급자로 공급할 컴포넌트를 감싸줌
3. useContext(context): 공급한 데이터를 가져와서 사용

context 폴더 따로 빼서 관리하는 경우 많음
프롭스 넘 깊은데 전역관리애매한 변수일 때 굿인듯?
근데 렌더링 이슈 감안해야함 최적화필

</div>
</details>

<details>
<summary>0927</summary>
<div markdown="5">

```
const [formState, setFormState] = useSttate({
  name: "",
  email: ""
})

const conChangeFormState = (e) => {
  setFormState((formState) => ({
    ...formState,
    [e.target.name] : e.tartget.value
  }))
}
```

함수 로직 내부사이에 특정기능을 위해리액트 훅이 사용되었다면 커스텀훅
아니면 그냥 함수
**커스텀훅!!**
기존 훅을 더 디벨롭시키고 싶을 때

**REST API**
데이터 통신의 아키텍처 패턴 중 하나
상태를 표현하여 전송하는 API
자원기반
HTTM Method 사용

API 가 항상 빨리 올거라고 예상하지 마라!!!!!
사용자경험의 향상을 신경쓸 것!!

fetchData는 상위? 하위? 어디서 일어나야할까?
API의 성능에 따라 달라지겟지 위치는 크게 신경쓰이지 않겠지만
컴포넌트를 어케 구성하느냐에 따라
상위가 아니면 안되는 경우가 있다
설계차이지 성능차이는 없을거임

navigate("/") <- 이런식으로 쓰는걸 '프로그래밍 방식 페이지 이동'이라고 함
Link태그랑 차이?

reactrouterProvider router={router}
https://velog.io/@adultlee/createBrowserRouter를-통한-Router기능-추가

**Next.JS**

hydration: NExt.JS에서 자바스크립트를 입히는 과정
메말라있는 페이지가 hydration이 되면 자스가 뿌려지면 인터랙션이 생긴다
SEO 친화적으로 가려면 버튼쓰지말고
버튼처럼 생긴거 a태그로 하는게 조음

`npx create-next-app@latest`

</div>
</details>

---

<details>
<summary>0930</summary>
<div markdown="5">

**next.js 시작하기**

```
npx create-next-app@latest my-project --typescript --eslint
cd my-project
```

**스타일링**
모듈 CSS 추천, 테일윈드가 베스트

```
import styles from "./OOO.module.css"

{styles.title}
```

구글폰트 패키지가 있음
`next/font/google`
폰트함수 인스턴스는 폰트명에 올리면 확인 가능
서브셋 활용하면 특정 언어 글꼴만 불러와서 폰트 최적화 가능
한국어는 서브셋이 없지만, 애초에 \_KR 같이 preload를 false 하는 법도 있음

로컬에서 폰트사용하려면

```
// public/fonts/local_fonts.ts
import localFont from "next/font/local";
export const 글꼴 = localFont({
  src: [
    {
      path: "./local/글꼴.woff2",
    },
    {
      path: "./local/글꼴.woff",
    },
  ],
});
```

외부 이미지 가져올 때 추가설정 필

```
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "주소.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
```

Image태그에 width, heigth 필수
로딩 priority ={true} 설정하면 시의적절하게 중요한 페이지에서 사용가능

**라우팅, 라우터, 라우트**
: 사용자가 요청한 URL에 따라 어떤 페이지 보여줄지 결정하는 과정
앱라우팅으로 URL과 페이지 파일 연결

라우터: 라우팅 관리하고 처리하는 기능 제공 도구
next/navigation

라우트: URL과 특정 컴포넌트간 매핑

**앱라우팅**

```
중첩 다이나믹
app/
└── diary/
    ├── page.tsx - /diary
    └── [id]/
        ├── page.tsx -- /diary/1 or /diary/2 or /diary/3...
        └── comment/
            └── [reviewId]/
                └── page.tsx. -- /diary/2/comment/1
```

```
포괄적 경로(실무잘안씀)
const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  console.log(params); // /docs 이후의 경로가 배열로 들어감 ex_/docs/1/user/1 -> [1, user, 1]
  return (
    <>
      <h1>Docs Component</h1>
    </>
  );
};
export default Docs;
```

그룹폴더 (폴더명): 괄호씌운 폴더는 개발에서만 묶여있고 실제론 X, layout 같은 공통 컴포넌트 슬쩍 묶을 때 굿..
프라이빗 폴더: 폴더 앞에 \_utils 이런식으로 언더스코어 붙이기

layout에 html, body 태그 쓰는 건 최상위만

**시스템파일**
page.tsx
중첩..?
layout.tsx
중첩가능 최상위루트만 html, body태그 사용 가능하고 나머지는 안쓰는게 좋음
not-found.tsx
중첩사용 가능하지만 navigation의 notFount(); 호출해서 써야함
error.tsx
"use client" 필수

타입 알고싶을 때 consolo.log(props) 해봇셈

**메타데이터**

function gemerateMetadate({props}: {parks})

</div>
</details>\

---

<details>
<summary>템플릿</summary>
<div markdown="5">

</div>
</details>
dpd==
