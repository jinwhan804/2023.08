// 할인
interface Discount {
    // 함수만 선언
    getDiscountPrice(price : number) : number
}

// 단순 가격 수정
class FlatDiscount implements Discount{
    private amount : number
    constructor(amount : number){
        this.amount = amount;
    }

    getDiscountPrice(price: number): number {
        return price - this.amount;
    }
}

// 퍼센트로 가격 수정
class PercentDiscount implements Discount{
    private amount : number;
    constructor(amount : number){
        this.amount = amount;
    }

    getDiscountPrice(price : number):number{
        return price * (1 - this.amount / 100);
    }
}

// 둘 다 적용
class FlatPercentDiscount implements Discount{
    private flatAmount : number
    private percent : number
    constructor(flatAmount : number, percent : number){
        this.flatAmount = flatAmount;
        this.percent = percent;
    }

    getDiscountPrice(price: number): number {
        const FlatDiscountAmount = price - this.flatAmount;
        return FlatDiscountAmount * (1 - this.percent / 100);
    }
}

// 할인의 기능에 대한 유지 보수가 좋아진다.
// 클래스 하나만 더 추가하면 끝

class Products{
    private name : string
    private price : number

    constructor(name : string, price : number){
        this.name = name;
        this.price = price;
    }

    getName (): string{
        return this.name;
    }

    getPrice (): number{
        return this.price;
    }
}

class ProductDiscount {
    private product : Products
    private discount : Discount

    constructor(product : Products, discount : Discount){
        this.product = product;
        this.discount = discount;
    }

    getPrice(): void{
        console.log(this.discount.getDiscountPrice(this.product.getPrice()))
    }
}

const _product = new Products('mac',100000);
const _product2 = new Products('window',2000);

const productDiscount = new PercentDiscount(10);
const productDiscount2 = new FlatDiscount(1000);
const productDiscount3 = new FlatPercentDiscount(1000,10);

const productWithDiscount = new ProductDiscount(_product,productDiscount2);
productWithDiscount.getPrice();

const productWithDiscount2 = new ProductDiscount(_product2,productDiscount3);
productWithDiscount2.getPrice();