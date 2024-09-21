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
