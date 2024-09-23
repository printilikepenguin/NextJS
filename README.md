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
