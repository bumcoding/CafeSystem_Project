// Beverage를 상속 받아 콜드브루를 정의하는 클래스
// 콜드브루의 이름과 가격이 설정되어 있다
import Beverage from '../Beverage.js';

class Coldbrew extends Beverage {
    constructor() {
        super();
        this.name = "콜드브루";
        this.price = 3.5;
    }
}

export default Coldbrew;