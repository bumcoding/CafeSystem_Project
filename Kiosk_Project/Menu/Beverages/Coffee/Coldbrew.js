import Beverage from '../Beverage.js';

class Coldbrew extends Beverage {
    constructor() {
        super();
        this.name = "콜드브루";
        this.price = 3.5;
    }
}

export default Coldbrew;