// class는 주로 유지 보수를 편하게 하기 위해 사용한다.

// 상품의 구조 정의
// interface IProduct{
//     name : string
//     price : number
// }

class Product{
    // private : 접근 불가 키워드, 참조가 불가한 값
    private name : string
    private price : number
    private discountAmount : number

    constructor(name : string, price : number){
        this.name = name;
        this.price = price;
        this.discountAmount = 0;
    }

    // private 키워드로 직접 참조가 불가하기 때문에 확인하고 싶으면 get 메서드로 값을 호충한다.
    getName() : string{
        return this.name;
    }

    getPrice() : number{
        return this.price - this.discountAmount;
    }

    getProduct(){
        return {name : this.name, price : this.getPrice()}
    }

    // 할인가 조정 : set 메서드 사용
    setDiscountAmount(amount : number) : void {
        this.discountAmount = amount;
    }
}

const product = new Product('블록',1000);

product.setDiscountAmount(200);

console.log(product.getProduct());