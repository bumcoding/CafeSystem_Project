import BaristaAutomation from '../CoffeeMachine/BaristaAutomation.js';
import Customer from '../Customer.js';
import { createOrder, getOrders } from './OrderModule.js';

class OrderSystem {
    constructor() {
        this.baristaAutomation = new BaristaAutomation();
    }

    takeOrder(customerName, menu) {
        createOrder(menu);
        const order = getOrders()[getOrders().length - 1];
        const customer = new Customer(customerName, order);
        customer.placeOrder(this.baristaAutomation);
    }

    printOrders() {
        const orders = getOrders();
        console.log("\n현재 주문 리스트: \n", orders);
    }
}

export default OrderSystem;