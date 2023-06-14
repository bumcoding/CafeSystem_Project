import Beverage from '../Beverage.js';

class Espresso extends Beverage {
    constructor() {
        super();
        this.name = "에스프레소";
        this.price = 2.5;
    }
}

export default Espresso;