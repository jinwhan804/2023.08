# tsconfig.json

- compilerOptions : typescript 파일을 컴파일 진행시 어떤 형태로 컴파일을 진행할 지 속성 정의 하는 부분
- include : 컴파일을 진행할 폴더 지정
- exclude : 컴파일을 제외할 폴더 지정

## compilerOptions

- module : 모듈 시스템 지정
- outDir : 내보낼 경로 지정
- target : 번들링 문법 지정 ex> es5, es6...
- esModuleInterop : true </br>
(import/export 문법을 자연스럽게 변경해주는 행위) 보통 true로 설정. CommonJS 형식과 ES6 형식의 혼용을 자연스럽게 통합해주는 속성
- script : true로 설정
- baseUrl : 모듈의 상대 경로를 지정 ./src
- paths : "baseUrl" 경로를 기준으로 상대 위치를 가져오는 매핑값(경로를 변수처럼 사용한다.)


```json
{
    "compilerOptions" : {
        "module" : "CommonJS",
        "outDir" : "./dist",
        "target" : "ES6",
        "esModuleInterop" : true,
        "strict" : true,
        "baseUrl" : "./src",
        "paths" : {
            "@user/*" : ["user/*"]
        }
    },
    "include" : ["src/**/*"],
    "exclude" : ["**/*.test.ts"]
    // .test.ts 확장자가 붙은 파일 제외
}
```

```json
// package.json 추가
{
    "build" : "tsc"
}
```

### 문제 경로가 @user 이 부분이 컴파일 되고나서 변환이 안 됨
### tsc-alias
### 빌드 시에 별칭 그대로 경로가 들어가는데 별칭이 경로로 지정되면 문제 발생 여부가 높다
### 이를 막기위해 별칭을 경로로 변환해주는 패키지

```sh
npm install -D tsc-alias
```

```json
// package.json
{
    "build" : "tsc && tsc-alias"
}
```