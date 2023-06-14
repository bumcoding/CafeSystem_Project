// 최종적으로 클래스를 불러와 최종 주문내역을 실체화하는 파일이다.
// 주문 리스트를 가져오기 위해서 OrderBuilder에 의존한다.
import DrinkBuilder from './Entity/DrinkBuilder.js';

let orders = [];  // 주문들을 저장하는 배열

// 주문을 생성하여 주문 리스트에 추가하는 함수
function createOrder(menu) {
    let drinkBuilder = new DrinkBuilder();
    drinkBuilder.setMenuName(menu.name);
    drinkBuilder.setMenuPrice(menu.price);
    let order = drinkBuilder.build();
    orders.push(order);
}
// 주문 리스트를 가져오는 함수
function getOrders() {
    return orders;
}

// OrderBuilder를 다른 모듈에서 사용할 수 있게 내보내는 구문
export { createOrder, getOrders };
