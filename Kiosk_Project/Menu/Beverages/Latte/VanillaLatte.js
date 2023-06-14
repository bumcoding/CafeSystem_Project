import Beverage from '../Beverage.js';

class VanillaLatte extends Beverage {
    constructor() {
        super();
        this.name = "바닐라라떼";
        this.price = 5.5;
    }
}

export default VanillaLatte;