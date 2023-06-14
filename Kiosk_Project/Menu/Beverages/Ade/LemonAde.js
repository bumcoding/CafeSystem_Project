import Beverage from '../Beverage.js';

class LemonAde extends Beverage {
    constructor() {
        super();
        this.name = "레몬에이드";
        this.price = 4.5;
    }
}

export default LemonAde;