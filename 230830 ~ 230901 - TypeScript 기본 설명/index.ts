// typeScript 변수의 타입 지정

// 자바 스크립트에서는 
// 변수명 = 초기값

// 타입 스크립트
// 변수명 : 타입명 = 초기값

// ts-node : 개발 환경에서 typescript로 작성된 코드를 실행시키기 위해서 필요한 모듈
// 기본적으로 node는 ts를 해석하지 못하기 때문에 ts-node를 사용해야 한다.

// ts-node typeScript 실행 환경 : 자바스크립트로 컴파일할 필요 없이 node환경에서 실행 가능

// 1. typeScript를 컴파일 내부 컴파일러를 통해 메모리 상에 javaScript 코드로 변환 (자바스크립트 파일을 만들지 않는다.)

// 2. 컴파일된 자바스크립트 코드를 nodejs 런타임 환경으로 실행한 다음 코드 실행 결과를 출력 (타입 검사로 코드에서 발생할 오류를 미리 알려줌)

// 설치 명렁어 : npm i ts-node @types/node
// node.js는 자바스크립트 런타임 환경인데 내장 함수 및 모듈에 대한 타입 정보가 필요.
// 그래서 nodejs 타입 정보를 패키지로 설치후 사용 (설치 명령어 중 @types/node 부분)

// 실행 가이드
// 자바스크립트 : node app.js
// 타입스크립트 : npx ts-node app.ts