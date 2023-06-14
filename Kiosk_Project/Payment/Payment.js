class Payment {
    constructor() {
        this.paymentInProgress = false;
    }

    insertCard() {
        console.log('카드를 넣어주세요!');
    }

    processPayment(callback) {
        this.paymentInProgress = true;
        console.log('결제중입니다! 잠시만 기다려주세요!');
        setTimeout(() => {
            this.paymentInProgress = false;
            callback();
        }, 2000);
    }

    waitForPaymentCompletion(time) {
        if (!this.paymentInProgress) {
            setTimeout(() => {
                console.log('결제가 완료됐습니다. 카드를 빼주세요!');
            }, time);
        } else {
            console.log('아직 결제가 완료되지 않았습니다. 잠시 기다려주세요!');
        }
    }
}

export default Payment;
