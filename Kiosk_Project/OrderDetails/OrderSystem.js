import BaristaAutomation from '../CoffeeMachine/BaristaAutomation.js';
import Customer from '../Customer.js';
import PaymentFacade from '../PaymentSystem/CardPaymentFacade.js';
import { createOrder, getOrders } from './OrderModule.js';

class OrderSystem {
    constructor() {
        this.baristaAutomation = new BaristaAutomation();
        this.paymentFacade = new PaymentFacade();
    }

    takeOrder(customerName, menu) {
        createOrder(menu);
        const order = getOrders()[getOrders().length - 1];
        const customer = new Customer(customerName, order);
        
        // 주문을 먼저 생성하고 결제를 진행
        this.processPayment().then(() => {
            // 결제가 완료된 후에 음료 제조를 시작
            customer.placeOrder(this.baristaAutomation);
        });
    }

    printOrders() {
        const orders = getOrders();
        console.log("\n현재 주문 리스트: \n", orders);
    }

    processPayment() {
        // PaymentFacade의 processPayment() 메서드가 Promise를 반환하도록 변경
        return new Promise((resolve) => {
            this.paymentFacade.processPayment();
            setTimeout(resolve, 3000);  // 결제 시간이 3초라고 가정
        });
    }
}

export default OrderSystem;