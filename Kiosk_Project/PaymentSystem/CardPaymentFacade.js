import CardPayment from './CardPayment.js';

class PaymentFacade {
    constructor() {
        this.cardPayment = new CardPayment();
    }

    processPayment() {
        this.cardPayment.insertCard();
        this.cardPayment.waitAndPrintPaymentStatus();
        this.cardPayment.ejectCard();
    }
}

export default PaymentFacade;