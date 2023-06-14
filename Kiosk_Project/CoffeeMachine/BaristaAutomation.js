import BeverageMachine from './BeverageMachine.js';

class BaristaAutomation {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(drink) {
        this.observers.forEach(obs => obs.update(drink));
    }

    makeDrink(order) {
        console.log(`자동화 시스템: 주문하신 ${order.menuName} 제조를 시작합니다.`);
        let drink = BeverageMachine.brewDrink(order.menuName);
        this.notifyObservers(drink);
    }
};

export default BaristaAutomation;
