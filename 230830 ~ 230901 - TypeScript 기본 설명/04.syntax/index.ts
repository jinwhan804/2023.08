// 자바스크립트
let num = 20;
const str = 'javascript'
const nan = NaN;
const infinity = Infinity;
const bool = true;
const nullValue = null;
const undefinedValue = undefined;

const obj = {};
const arr = [];

const fn = (a:any)=>{
    console.log(a);
}

const sum = (a:any,b:any)=>{
    return a + b;
}

const any = '';

const unknown = '';

// 타입 스크립트
let num2 : number = 20;
const str2 : string = 'typescript'
const nan2 : number = NaN;
const infinity2 : number = Infinity;
const bool2 : boolean = true;
const nullValue2 : null = null;
const undefinedValue2 : undefined = undefined;

const obj2 : object = {};

//  <> : 제네릭 타입 설정. 배열의 요소가 number라고 지정(데이터 타입을 매개변수 시킬 수 있다.)
const arr2 : Array<number | string> = ['s', 1];

// void : 함수 실행 시 비어있다는 것을 의미, 반환값이 없는 함수라는 의미
const fn2 = (a:number):void=>{
    console.log(a);
}

// number : 함수 실행 후 반환값이 숫자형이어야 한다는 의미
const sum2 = (a:number,b:number):number=>{
    return a + b;
}

// any : 타입 상관 없이 할당할 수 있게 해주는 것. 타입 안정성 보장이 되지 않기 때문에 자주 사용하지 않는 것이 좋다.
const any2 : any = '';
console.log(any2.length);

// unknown : 어떤 타입이든 할당 가능하고 타입 안정성도 보장된다.
const unknown2 : unknown = '';

if(typeof unknown2 === 'string')
console.log(unknown2.length)