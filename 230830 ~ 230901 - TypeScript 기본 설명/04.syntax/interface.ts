// interface : 객체의 구조를 정의하는 타입

interface IBlock {
    id : number
    title : string
    content : string
    date : number
    like : number
    // 객체의 구조에서 옵션 체이닝을 사용하면 해당 값이 있어도, 없어도 생성 가능하게 해준다.
    hit? : number
}

const Block : IBlock = {
    id : 2,
    title : 'rrr',
    content : 'rr',
    date : 22,
    like : 22,
    hit : 3
}

const Block2 : IBlock = {
    id : 2,
    title : 'rrr',
    content : 'rr',
    date : 22,
    like : 22
}

// interface는 추상적 개념

// class

// Implements : class 구조에 만족하는지 여부를 확인하는 것.
// interface IProduct{
//     name : string
//     price? : number
// }

// class product implements IProduct {
//     name: string
//     price: number
//     constructor(name: string, price : number){
//         this.name = name;
//         this.price = price;
//     }
// }