import Beverage from '../Beverage.js';

class GreenTeaLatte extends Beverage {
    constructor() {
        super();
        this.name = "녹차라떼";
        this.price = 5.5;
    }
}

export default GreenTeaLatte;