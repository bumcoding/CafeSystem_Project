class Customer {
    constructor(name, order) {
        this.name = name;
        this.order = order;
    }

    update(drink) {
        if (drink.name === this.order.menuName) {
            console.log(`${this.name}: ${drink.name} 완성! 진동벨 울림.`);
        }
    }

    placeOrder(baristaAutomation) {
        baristaAutomation.addObserver(this);
        baristaAutomation.makeDrink(this.order);
    }
}

export default Customer;