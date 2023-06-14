import Americano from './Menu/Beverages/Coffee/Americano.js';
import OrderSystem from './OrderDetails/OrderSystem.js';

// 고객 이름
const customerName = '박범찬(고객)';

let orderSystem = new OrderSystem();
let americano = new Americano();

// 고객 주문 처리
orderSystem.takeOrder(customerName, americano);

// 주문 리스트 출력
orderSystem.printOrders();