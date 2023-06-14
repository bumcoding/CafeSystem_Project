import Beverage from '../Beverage.js';

class Americano extends Beverage {
    constructor() {
        super();
        this.name = "아메리카노";
        this.price = 2.5;
    }
}

export default Americano;