📚매일 공부 내용을 작성합니다

<details>
<summary>0920</summary>
<div markdown="1">

### 0920

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
<summary>템플릿</summary>
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
<summary>템플릿</summary>
<div markdown="4">

</div>
</details>
