import Americano from './Menu/Beverages/Coffee/Americano.js';
import OrderSystem from './OrderDetails/OrderSystem.js';
import Payment from './Payment/Payment.js';

let orderSystem = new OrderSystem();
let americano = new Americano();
let payment = new Payment();

// 1. 카드를 넣는 단계
payment.insertCard();

// 2. 결제 진행 및 대기 단계
payment.processPayment(() => {
    console.log('결제가 완료되었습니다. 카드를 빼주세요!');
    // 4. 커피 제조 시작
    orderSystem.takeOrder('박범찬 고객(님)', americano);
    orderSystem.printOrders();
});

// 3. 결제 완료 후 2초 대기
payment.waitForPaymentCompletion(2000);
